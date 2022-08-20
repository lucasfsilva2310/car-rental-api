import { parse } from 'csv-parse'
import fs from 'fs'
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

interface IImportCategory {
  name: string
  description: string
}

class ImportCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  // just hover on top of request.file to see its typing
  async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    const categories: Array<IImportCategory> = []

    // Creating a stream instead of reading entire file at once
    const stream = fs.createReadStream(file?.path)

    // parsing provided csv file
    const parseFile = parse()

    // creating pipe to deal with each block that's being processed
    stream.pipe(parseFile)

    // Dealing with each line of CSV file
    await new Promise((resolve, reject) => {
      parseFile
        .on('data', async (line) => {
          const [name, description] = line

          categories.push({
            name,
            description
          })
        })
        .on('end', () => resolve(categories))
        .on('error', (error) => reject(error))
    })

    return categories
  }

  async execute(file: Express.Multer.File): Promise<IImportCategory[]> {
    const categories = await this.loadCategories(file)

    categories.map((category) => {
      const { name, description } = category

      const categoryExists = this.categoriesRepository.findByName(name)

      if (!categoryExists) {
        this.categoriesRepository.create({ name, description })
      }
    })

    // TODO: decide if want to return whole list or nothing
    return this.categoriesRepository.getAllCategories()
  }
}

export { ImportCategoriesUseCase }

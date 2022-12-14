import { Category } from '../../models/Category'
import {
  ICategoriesRepository,
  ICreateCategoryDTO
} from '../ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  private categories: Array<Category>

  // Way to check if instance already exists
  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.categories = []
  }

  public static getInstance(): CategoriesRepository {
    const alreadyExists = CategoriesRepository.INSTANCE
    if (!alreadyExists) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)

    return category
  }

  getAllCategories() {
    return this.categories
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
}

export { CategoriesRepository }

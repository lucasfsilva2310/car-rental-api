import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { ImportCategoriesController } from './uploadCategoriesController'
import { ImportCategoriesUseCase } from './uploadCategoriesUseCase'

const categoriesRepository = CategoriesRepository.getInstance()

const importCategoriesUseCase = new ImportCategoriesUseCase(
  categoriesRepository
)

const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase
)

export { importCategoriesController }

import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { GetAllCategoriesController } from './GetAllCategoriesController'

const categoriesRepository = new CategoriesRepository()

const getAllCategoriesController = new GetAllCategoriesController(
  categoriesRepository
)

export { getAllCategoriesController }

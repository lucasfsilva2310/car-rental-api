import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

// Repository that already has all methods about category model and to access our DB
const categoriesRepository = new CategoriesRepository()

// UseCase that has all useCases related to category inside our API
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

// Controller that handle all necessary executions and creations
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

// export him to put inside route
export { createCategoryController }

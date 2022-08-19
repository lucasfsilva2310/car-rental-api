import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

// Repository that already has all methods about category model and to access our DB
// created getInstance function to check if an instance already exists (singleton pattern)
const categoriesRepository = CategoriesRepository.getInstance()

// UseCase that has all useCases related to category inside our API
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

// Controller that handle all necessary executions and creations
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

// export him to put inside route
export { createCategoryController }

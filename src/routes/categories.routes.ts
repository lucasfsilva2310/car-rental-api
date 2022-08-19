import { Router, Request, Response } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory/index'
import { getAllCategoriesController } from '../modules/cars/useCases/getAllCategories'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request: Request, response: Response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request: Request, response: Response) => {
  return getAllCategoriesController.handle(request, response)
})

export { categoriesRoutes }

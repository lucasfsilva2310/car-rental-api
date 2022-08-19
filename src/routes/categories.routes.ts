import { Router, Request, Response } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory/index'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request: Request, response: Response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request: Request, response: Response) => {
  const result = categoriesRepository.getList()

  return response.status(200).json({ status: 'success', categories: result })
})

export { categoriesRoutes }

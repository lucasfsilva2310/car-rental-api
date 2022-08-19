import { Router, Request, Response } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'
import { CreateCategoryService } from '../services/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)

  const result = createCategoryService.execute({ name, description })

  return response.status(201).json({ status: 'success', categories: result })
})

categoriesRoutes.get('/', (request: Request, response: Response) => {
  const result = categoriesRepository.getList()

  return response.status(200).json({ status: 'success', categories: result })
})

export { categoriesRoutes }

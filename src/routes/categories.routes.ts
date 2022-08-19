import { Router, Request, Response } from 'express'
import { CategoriesRepository } from '../repositories/Categories.repository'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body

  const result = categoriesRepository.create({ name, description })

  return response.status(201).json({ status: 'success', categories: result })
})

export { categoriesRoutes }

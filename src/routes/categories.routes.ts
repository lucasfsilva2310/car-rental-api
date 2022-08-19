import { Router, Request, Response } from 'express'
import { CategoriesRepository } from '../repositories/Categories.repository'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body

  const categoryAlreadyExists = categoriesRepository.findByName(name)

  if (categoryAlreadyExists)
    return response
      .status(400)
      .json({ status: 'error', message: 'Category already exists.' })

  const result = categoriesRepository.create({ name, description })

  return response.status(201).json({ status: 'success', categories: result })
})

categoriesRoutes.get('/', (request: Request, response: Response) => {
  const result = categoriesRepository.getList()

  return response.status(200).json({ status: 'success', categories: result })
})

export { categoriesRoutes }

import { Router, Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'

const categoriesRoutes = Router()

// Remove later
const categories: Array<{ id: string; name: string; description: string }> = []

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body

  const category = {
    id: uuidv4(),
    name,
    description
  }

  categories.push(category)

  return response.status(201).json({ status: 'success', categories })
})

export { categoriesRoutes }

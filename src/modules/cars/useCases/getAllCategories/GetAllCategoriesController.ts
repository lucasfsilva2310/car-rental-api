import { Response, Request } from 'express'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

class GetAllCategoriesController {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  handle(request: Request, response: Response): Response {
    const result = this.categoriesRepository.getAllCategories()

    return response.status(200).json({ status: 'success', categories: result })
  }
}

export { GetAllCategoriesController }

import { Response, Request } from 'express'
import { GetAllCategoriesUseCase } from './GetAllCategoriesUseCase'

class GetAllCategoriesController {
  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const result = this.getAllCategoriesUseCase.execute()

    return response.status(200).json({ status: 'success', categories: result })
  }
}

export { GetAllCategoriesController }

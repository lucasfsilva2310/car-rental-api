import { Request, Response } from 'express'
import { GetAllSpecificationsUseCase } from './GetAllSpecificationsUseCase'

class GetAllSpecificationsController {
  constructor(
    private getAllSpecificationsUseCase: GetAllSpecificationsUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const result = this.getAllSpecificationsUseCase.execute()

    return response
      .status(200)
      .json({ status: 'success', specifications: result })
  }
}

export { GetAllSpecificationsController }

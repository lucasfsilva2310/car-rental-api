import { Request, Response } from 'express'
import { ImportCategoriesUseCase } from './uploadCategoriesUseCase'

class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request

    const categories = await this.importCategoriesUseCase.execute(file!)

    return response
      .status(201)
      .json({ status: 'success', message: 'File uploaded.', categories })
  }
}

export { ImportCategoriesController }

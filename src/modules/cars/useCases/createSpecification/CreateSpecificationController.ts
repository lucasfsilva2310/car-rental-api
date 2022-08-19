import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body

    const result = this.createSpecificationService.execute({
      name,
      description
    })

    return response
      .status(201)
      .json({ status: 'success', specifications: result })
  }
}

export { CreateSpecificationController }

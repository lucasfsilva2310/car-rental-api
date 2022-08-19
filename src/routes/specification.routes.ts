import { Router, Request, Response } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'
import { getAllSpecificationsController } from '../modules/cars/useCases/getAllSpecifications'

const specificationRoutes = Router()

specificationRoutes.post('/', (request: Request, response: Response) => {
  createSpecificationController.handle(request, response)
})

specificationRoutes.get('/', (request: Request, response: Response) => {
  getAllSpecificationsController.handle(request, response)
})

export { specificationRoutes }

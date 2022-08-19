import { Router, Request, Response } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

const specificationRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateSpecificationService(
    specificationsRepository
  )

  const result = createCategoryService.execute({ name, description })

  return response
    .status(201)
    .json({ status: 'success', specifications: result })
})

// specificationRoutes.get('/', (request: Request, response: Response) => {
//   const result = specificationsRepository.getList()

//   return response
//     .status(200)
//     .json({ status: 'success', specifications: result })
// })

export { specificationRoutes }

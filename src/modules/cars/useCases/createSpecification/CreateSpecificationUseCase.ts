import { Specification } from '../../models/Specification'
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): Specification {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists)
      throw new Error('Specification already exists')

    return this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }

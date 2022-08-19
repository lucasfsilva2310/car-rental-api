import { Specification } from '../models/Specification'
import { ISpeficiationsRepository } from '../repositories/ISpecificationRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpeficiationsRepository) {}

  execute({ name, description }: IRequest): Specification {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists)
      throw new Error('Specification already exists')

    return this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationService }

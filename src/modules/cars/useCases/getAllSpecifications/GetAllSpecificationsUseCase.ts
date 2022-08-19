import { Specification } from '../../models/Specification'
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

class GetAllSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute(): Array<Specification> {
    const result = this.specificationsRepository.getAllSpecifications()

    return result
  }
}

export { GetAllSpecificationsUseCase }

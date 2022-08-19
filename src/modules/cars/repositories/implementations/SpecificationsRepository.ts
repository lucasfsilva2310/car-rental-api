import { Specification } from '../../models/Specification'
import {
  ICreateSpecificationDTO,
  ISpecificationRepository
} from '../ISpecificationRepository'

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Array<Specification>

  // Way to check if instance already exists
  private static INSTANCE: SpecificationsRepository

  private constructor() {
    this.specifications = []
  }

  public static getInstance(): SpecificationsRepository {
    const alreadyExists = SpecificationsRepository.INSTANCE
    if (!alreadyExists) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }
    return SpecificationsRepository.INSTANCE
  }

  create({ description, name }: ICreateSpecificationDTO): Specification {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)

    return specification
  }

  getAllSpecifications() {
    return this.specifications
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    )
    return specification
  }
}

export { SpecificationsRepository }

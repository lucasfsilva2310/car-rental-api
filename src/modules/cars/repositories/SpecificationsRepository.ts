import { Specification } from '../models/Specification'
import {
  ICreateSpecificationDTO,
  ISpeficiationsRepository
} from './ISpecificationRepository'

class SpecificationsRepository implements ISpeficiationsRepository {
  private specifications: Array<Specification>

  constructor() {
    this.specifications = []
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

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    )
    return specification
  }
}

export { SpecificationsRepository }

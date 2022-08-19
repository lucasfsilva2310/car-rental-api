import { Specification } from '../models/Specification'

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificationRepository {
  create({ description, name }: ICreateSpecificationDTO): Specification
  findByName(name: string): Specification | undefined
  getAllSpecifications(): Specification[]
}

export { ISpecificationRepository, ICreateSpecificationDTO }

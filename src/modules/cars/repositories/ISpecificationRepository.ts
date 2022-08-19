import { Specification } from '../models/Specification'

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpeficiationsRepository {
  create({ description, name }: ICreateSpecificationDTO): Specification
  findByName(name: string): Specification | undefined
}

export { ISpeficiationsRepository, ICreateSpecificationDTO }

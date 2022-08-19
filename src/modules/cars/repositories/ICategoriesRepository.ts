import { Category } from '../models/Category'

interface ICreateCategoryDTO {
  name: string
  description: string
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Category
  getAllCategories(): Array<Category>
  findByName(name: string): Category | undefined
}

export { ICategoriesRepository, ICreateCategoryDTO }

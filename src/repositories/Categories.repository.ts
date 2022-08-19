import { Category } from '../models/Category'

interface ICreateCategoryDTO {
  name: string
  description: string
}

class CategoriesRepository {
  private categories: Array<Category>

  constructor() {
    this.categories = []
  }

  create({ name, description }: ICreateCategoryDTO): Array<Category> {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)

    return this.categories
  }
}

export { CategoriesRepository }

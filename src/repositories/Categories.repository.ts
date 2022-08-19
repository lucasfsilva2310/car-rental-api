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

  getList() {
    return this.categories
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
}

export { CategoriesRepository }

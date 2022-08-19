import { Category } from '../../models/Category'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

class GetAllCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Array<Category> {
    const result = this.categoriesRepository.getAllCategories()

    return result
  }
}

export { GetAllCategoriesUseCase }

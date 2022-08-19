// library to deal with file imports
import multer from 'multer'

import { Router, Request, Response } from 'express'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { getAllCategoriesController } from '../modules/cars/useCases/getAllCategories'

const categoriesRoutes = Router()
const uploadFile = multer({
  // files destiny
  dest: './tmp'
})

categoriesRoutes.post('/', (request: Request, response: Response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request: Request, response: Response) => {
  return getAllCategoriesController.handle(request, response)
})

categoriesRoutes.post(
  '/upload',
  uploadFile.single('categories'),
  (request: Request, response: Response) => {
    const { file } = request
    console.log(file)
    return response
      .status(201)
      .json({ status: 'success', message: 'File uploaded.' })
  }
)

export { categoriesRoutes }

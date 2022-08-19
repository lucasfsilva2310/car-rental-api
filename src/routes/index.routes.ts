import { Application } from 'express'
import { categoriesRoutes } from './categories.routes'
import { specificationRoutes } from './specification.routes'

const loadRoutes = (app: Application) => {
  app.use('/categories', categoriesRoutes)
  app.use('/specifications', specificationRoutes)
}

export { loadRoutes }

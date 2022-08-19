import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { Application } from 'express'
import { specificationRoutes } from './routes/specification.routes'

const app = express()

app.use(express.json())

const loadRoutes = (app: Application) => {
  app.use('/categories', categoriesRoutes)
  app.use('/specifications', specificationRoutes)
}

loadRoutes(app)

export { app }

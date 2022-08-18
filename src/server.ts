import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { Application } from 'express'

const app = express()

app.use(express.json())

const loadRoutes = (app: Application) => {
  app.use('/categories', categoriesRoutes)
}

loadRoutes(app)

export { app }

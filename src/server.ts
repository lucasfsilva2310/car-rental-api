import express from 'express'
import { loadRoutes } from './routes/index.routes'

const app = express()
app.use(express.json())

loadRoutes(app)

export { app }

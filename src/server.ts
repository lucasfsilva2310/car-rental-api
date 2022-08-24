import express from 'express'
import swaggerUi from 'swagger-ui-express'
import dotenv from 'dotenv'

// importing database connection
import './database'

import swaggerFile from './swagger.json'
import { loadRoutes } from './routes/index.routes'

const app = express()
dotenv.config()
console.log(process.env)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(express.json())

loadRoutes(app)

export { app }

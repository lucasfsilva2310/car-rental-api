import express from 'express'
import swaggerUi from 'swagger-ui-express'

// importing database connection
import './database'

import swaggerFile from './swagger.json'
import { loadRoutes } from './routes/index.routes'

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(express.json())

loadRoutes(app)

export { app }

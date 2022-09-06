import { Dialect } from 'sequelize/types'

export interface IKeysProps {
  DATABASE_RDS_URL: string
  options?: {
    dialect: Dialect
    ssl?: boolean
    database?: string
    host?: string
    port?: number
    username?: string
    password?: string
    logging: boolean
    dialectOptions: {
      ssl: {
        require?: boolean
        rejectUnauthorized?: boolean
      }
    }
  }
}

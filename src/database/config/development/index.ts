import { IKeysProps } from '../keys'
import * as dotenv from 'dotenv'
dotenv.config()

const { DEVELOPMENT_DATABASE_URL } = process.env

export const development: IKeysProps = {
  DATABASE_RDS_URL: DEVELOPMENT_DATABASE_URL ?? '',
  options: {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false
  }
}

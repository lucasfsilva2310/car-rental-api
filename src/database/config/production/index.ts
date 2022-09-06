import { IKeysProps } from '../keys'
import * as dotenv from 'dotenv'
dotenv.config()

const { PRODUCTION_DATABASE_URL } = process.env

export const production: IKeysProps = {
  DATABASE_RDS_URL: PRODUCTION_DATABASE_URL ?? '',
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

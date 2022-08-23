import { DataSource } from 'typeorm'

const dbConnection = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: 'db',
  username: 'docker',
  password: 'docker',
  port: 5432,
  database: 'dbcar_rental',
  logging: false,
  synchronize: false,
  name: 'default',
  migrations: ['src/database/migrations/**/*{.ts,.js}'],
  subscribers: ['src/subscriber/**/*{.ts,.js}'],
  entities: ['src/**/**.entity{.ts,.js}']
})

dbConnection
  .initialize()
  .then(() => console.log('Postgres database connected successfully.'))
  .catch((error) =>
    console.log('Error when trying to connect with postgres database', error)
  )

export { dbConnection }
// To Create new migrations:
// npm run typeorm migration:create -n <migration_name>

// Find out why migrations are being created in root

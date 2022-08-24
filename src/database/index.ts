// unused-imports/no-unused-imports
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('dbcar_rental', 'docker', 'docker', {
  host: 'db',
  dialect: 'postgres'
})

sequelize
  .authenticate()
  .then(() => console.log('Postgres database connected successfully.'))
  .catch((error) =>
    console.log('Error when trying to connect with postgres database.', error)
  )

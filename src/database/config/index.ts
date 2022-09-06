import { development } from './development'
import { production } from './production'
// import { test } from './test'
import { IKeysProps } from './keys'

const { NODE_ENV } = process.env

let keys: IKeysProps

switch (NODE_ENV) {
  case 'production':
    keys = production
    break
  //   case 'test':
  //     keys = test
  //     break
  case 'development':
  default:
    keys = development
    break
}

export { keys }

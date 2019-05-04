import { init } from '@rematch/core'
import * as models from './models'

// - initail all model in store
const store = init({
  models,
})

export default store
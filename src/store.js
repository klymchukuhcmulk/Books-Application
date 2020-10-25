import { createStore } from 'vuex'
import * as modules from './store'

export default createStore({
  ...modules
})

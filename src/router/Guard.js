import store from '../store/user'

export default {
  auth (to, from, next) {
    if (store.getters.user) {
      next()
    } else {
      next('/login')
    }
  }
}

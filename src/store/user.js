export default {
  namespace: true,
  state: {
    user: null
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}

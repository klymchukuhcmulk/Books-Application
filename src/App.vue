<template>
  <div>
    <router-link v-if="isLogin" to="/">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import user from '../src/store/user'


export default {

  computed: {
    ...mapActions({
      userState: 'user'
    })
  },
  created () {
    if (!this.$store.state.user) {
      this.$store.registerModule('user', user)
    }
    console.log(this.$store.state.user, this.userState)
  },
  beforeDestroy () {
    if (this.$store.state.user) {
      this.$store.unregisterModule('user')
    }
  }
}
</script>

<style>
</style>

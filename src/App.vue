<template>
  <div>
    <router-link v-if="store.getters.user" to="/">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { useStore } from 'vuex'
const setup = () => {
  const store = useStore()
  return {
    store,
  }
}
export default {
  setup
}
</script>

<style>
</style>

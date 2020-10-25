<template>
  <div>
    <router-link v-if="$store.getters.user" to="/">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
//import { mapState } from 'vuex'

export default {

  mounted () {
    console.log('store', this.$store)
  }
}
</script>

<style>
</style>

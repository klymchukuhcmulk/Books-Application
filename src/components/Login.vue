<template>
    <div>
        LOGIN
    </div>
</template>

<script>
  import { onMounted } from 'vue'
  import { useStore } from 'vuex'

  const setup = () => {
    const store = useStore()

    onMounted(() => {})
    return {
      store
    }
  }
  export default {
    setup
  }
</script>

<style scoped>

</style>

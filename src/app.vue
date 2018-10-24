<template lang="pug">
#app(:page="'page-' + $route.name")
  p app

</template>

<script>
import VceLoader from '@c/vce-loader'
export default {
  components: {
    VceLoader
  },
  mounted() {
    window.$vue = this
  }
}
</script>

<style lang='sass'>
#app
  padding: 20px

</style>



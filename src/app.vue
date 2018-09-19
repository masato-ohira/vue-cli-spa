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
// cdn
@import url('https://fonts.googleapis.com/icon?family=Material+Icons')
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,700&subset=japanese')
// npm
@import 'loaders.css/src/loaders.scss'
// core css
@import './assets/sass/config/*.sass'
@import './assets/sass/mixins/*.sass'
@import './assets/sass/utils/*.sass'
// my css
// @import './components/**/*.sass'
// @import './pages/**/*.sass'

#app
  padding: 20px

</style>



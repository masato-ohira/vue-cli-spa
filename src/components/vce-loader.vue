<template lang='pug'>
transition(name="fade")
  .vce-loader(v-if="isShow")
    .ball-pulse
      div
      div
      div
</template>
<script>
export default {
  props: {
    show: null,
  },
  computed: {
    isShow() {
      switch (this.show) {
        case true:
        case 'is-loading':
          return true
        default:
          return false
      }
    }
  }
}
</script>
<style lang='sass' scoped>
.vce-loader
  padding: 50px 0
  display: flex
  flex-wrap: wrap
  justify-content: center

  > *
    div
      background-color: rgba(#000, 0.2)

.fade-enter-active, .fade-leave-active
  transition: opacity .2s

.fade-enter, .fade-leave-to
  opacity: 0
</style>

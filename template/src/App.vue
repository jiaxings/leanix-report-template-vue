<template>
  <div id="app">
    <img class="logo" src="./assets/logo.svg">
    {{#router}}
    <router-view/>
    {{else}}
    <fact-sheet-types/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import FactSheetTypes from './components/FactSheetTypes'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    FactSheetTypes
  }{{/router}},
  mounted () {
    this.$lx.init()
      .then(setup => {
        this.$lx.ready({})
      })
  }
}
</script>


<style lang="stylus" scoped>
  @import './stylus/main'

  #app
    display flex
    flex-flow column
    justify-content center
    align-items center

  .logo
    width 250px
    margin 2rem
    align-self flex-end
</style>

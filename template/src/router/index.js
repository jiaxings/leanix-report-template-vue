import Vue from 'vue'
import Router from 'vue-router'
import FactSheetTypes from '@/components/FactSheetTypes'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'FactSheetTypes', component: FactSheetTypes }
  ]
})

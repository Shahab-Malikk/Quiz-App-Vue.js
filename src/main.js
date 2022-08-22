import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes/route'
import {store} from './store/store'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode:  'history',
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }
    if(to.hash){
      return {selector: to.hash, behavior: 'smooth'}
    }
    return {x:0, y:0}
  }
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
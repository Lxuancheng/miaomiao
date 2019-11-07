import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Scroller from '@/components/Scroller'
import Loading from '@/components/Loading'

Vue.config.productionTip = false
Vue.component('Scroller', Scroller)
Vue.component('Loading', Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

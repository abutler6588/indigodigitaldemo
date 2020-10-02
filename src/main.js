import Vue from 'vue'
import App from './App.vue'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB1-ikCnOtwWPF9nyMZi2B0FA9ISDjLZ34'
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

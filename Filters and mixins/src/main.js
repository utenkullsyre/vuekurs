import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase();
})

new Vue({
  el: '#app',
  render: h => h(App)
})

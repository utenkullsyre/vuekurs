import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase();
})

Vue.mixin({
  created() {
    console.log('Global mixin');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import newComponent from './newComponent.vue'

Vue.component('New', newComponent)


new Vue({
  el: '#app',
  render: h => h(App)
})

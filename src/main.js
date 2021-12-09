import Vue from 'vue'
import App from './components/App.vue'
import store from './store';

Vue.filter('time' , timestamp =>{
  return new Date(timestamp).toLocaleTimeString();
})

new Vue({
  el: '#app',
  store,
  components :  { App }
})

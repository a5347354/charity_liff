// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';

Vue.use(Donut);
Vue.use(BootstrapVue)

Vue.use(firestorePlugin)
firebase.initializeApp({
  apiKey: 'AIzaSyAw5IUAhlO4GZHo9CQEUJ2-FVCoCUIn-lI',
  authDomain: 'lp-json.firebaseapp.com',
  projectId: 'lp-json'
})

export const db = firebase.firestore()
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

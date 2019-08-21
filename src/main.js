// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import router from './router'

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

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/'

import firebase from 'firebase/app';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCBxAQyLos9vn9qzfU0T_YjjLy0IjDa-3o",
  authDomain: "canary-676cf.firebaseapp.com",
  databaseURL: "https://canary-676cf.firebaseio.com",
  projectId: "canary-676cf",
  storageBucket: "canary-676cf.appspot.com",
  messagingSenderId: "1030635092956",
  appId: "1:1030635092956:web:2ee5fc5a144f5cf33ded19",
  measurementId: "G-9RM496L6VP"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

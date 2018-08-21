import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueResourse from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'

import store from './store'

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueResourse);
Vue.config.productionTip = false;

Vue.http.options.root = 'http://178.62.101.205/';

Vue.http.interceptors.push(function(request, next) {
  request.headers.set('Content-Type', 'application/json');
  
  next(function(response) {
    return response;
  })
})

const VuexStore = new Vuex.Store(store)

new Vue({
  el: '#app',
  router: router,
  store: VuexStore,
  components: { App },
  template: '<App/>'
})



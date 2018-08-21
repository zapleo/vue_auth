import Vue from 'vue'
import VueRouter from 'vue-router'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'));
  const app = new Vue({
    el: 'app',
    template: '<app/>',
    render: h => h(App),
  })
})
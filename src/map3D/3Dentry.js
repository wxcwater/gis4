import Vue from 'vue'
import gqindex from './gqindex.vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter);
new Vue({
  el: '#app',
  render: h => h(gqindex)
})

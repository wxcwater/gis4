import Vue from 'vue'
import zbszIndex from './zbszIndex.vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter);
new Vue({
  el: '#app',
  render: h => h(zbszIndex)
})

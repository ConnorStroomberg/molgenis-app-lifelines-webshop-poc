import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import BootstrapVue from 'bootstrap-vue'
import '@/assets/lifelines_bs4.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// @ts-ignore
import BootstrapVueTreeview from 'bootstrap-vue-treeview/dist/bootstrap-vue-treeview.esm.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle, faSave, faUndo, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faQuestionCircle, faSave, faUndo, faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueTreeview)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

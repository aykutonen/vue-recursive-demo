import Vue from 'vue'
import App from './App.vue'
import Page from "./components/Page"
import Row from "./components/Row"
import Column from "./components/Column"

Vue.config.productionTip = false

Vue.component('Page', Page);
Vue.component('Row', Row);
Vue.component('Column', Column);

new Vue({
  render: h => h(App),
}).$mount('#app')

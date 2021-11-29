import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// 引入
import JscyUI from "./libs/js-ui/index.js"

Vue.use(JscyUI)


new Vue({
  render: h => h(App),
}).$mount('#app')

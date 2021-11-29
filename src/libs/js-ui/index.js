import Vue from "vue";
import Starts from '../js-ui/Fivestarts/starts.vue'


const JscyUI = {};

JscyUI.install = ((Vue) => {
  // Vue.component('组件name', 组件本身)
  Vue.component(Starts.name, Starts)

})


export default JscyUI;
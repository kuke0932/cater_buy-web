// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import VConsole from 'vconsole'
import { ToastPlugin, AlertPlugin, LoadingPlugin, ConfirmPlugin, DatetimePlugin } from 'vux'

const vConsole = new VConsole()

Vue.use(vConsole)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(DatetimePlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false
const bus = new Vue()

Vue.prototype.bus = function () {
  return bus
}

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/visualMap'
import 'echarts/map/js/world'
import 'echarts/map/js/china.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

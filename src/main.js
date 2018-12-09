import Vue from 'vue'
import App from './App'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import store from './store/store'
import '../static/css/iconfont.css'
// import 'swiper/dist/css/swiper.css'

// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
// Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

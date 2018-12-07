import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {
      goods: [],
      seller: {}
    },
    mutations: {
      initSeller (state, res) {
        state.seller = res
      },
      initGoods (state, res) {
        state.goods = res
      }
    }
  })
}

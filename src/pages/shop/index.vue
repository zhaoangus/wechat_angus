<template>
  <div id="shop">
    <shopHeader :seller="seller"></shopHeader>
    <div class="tab border-1px">
      <div class="tab-item" @click="togoods">
        <a class="tab-link" :class="{active: ongoods}">商品</a>
      </div>
      <div class="tab-item" @click="toratings">
        <a class="tab-link" :class="{active: onratings}">评论</a>
      </div>
      <div class="tab-item" @click="toseller">
        <a class="tab-link" :class="{active: onseller}">商家</a>
      </div>
    </div>
    <div class="goods-wrapper" v-if="ongoods">
      <Goods :seller="seller"></Goods>
    </div>
    <div class="ratings-wrapper" v-if="onratings">
      <Ratings :seller="seller"></Ratings>
    </div>
    <div class="seller-wrapper" v-if="onseller">
      <seller :seller="seller"></Seller>
    </div>
  </div>
</template>

<script>
// import store from './store/store'
import shopHeader from '@/components/shopheader/shopHeader'
import Goods from '@/components/goods/Goods'
import Ratings from '@/components/ratings/Ratings'
import Seller from '@/components/seller/Seller'
export default {
  name: 'index',
  components: {
    shopHeader,
    Goods,
    Ratings,
    Seller
  },
  data () {
    return {
      ongoods: true,
      onratings: false,
      onseller: false,
      seller: {}
    }
  },
  methods: {
    togoods () {
      this.ongoods = true
      this.onratings = false
      this.onseller = false
    },
    toratings () {
      this.ongoods = false
      this.onratings = true
      this.onseller = false
    },
    toseller () {
      this.ongoods = false
      this.onratings = false
      this.onseller = true
    }
    // getseller (seller) {
    //   this.$store.commit('initSeller', seller)
    // },
    // getgoods (goods) {
    //   this.$store.commit('initGoods', goods)
    // }
  },
  created () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5c0515eef57279499b6ac104/getsellers',
      methods: 'GET',
      success: (res) => {
        this.seller = res.data.seller[0]
        // this.$store.state.seller = res.data.seller
        // let seller = res.data.seller
        // this.getseller(seller)
        // console.log(this.$store.state.seller)
      }
    })
    // wx.request({
    //   url: 'https://www.easy-mock.com/mock/5c0515eef57279499b6ac104/getgoods',
    //   methods: 'GET',
    //   success: (res) => {
    //     this.seller = res.data.seller
    //     // this.$store.state.goods = res.data.goods
    //     // let goods = res.data.goods
    //     // this.getgoods(goods)
    //     // console.log(this.$store.state.goods)
    //   }
    // })
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  #shop
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        .tab-link
          display: block
          text-decoration: none
          font-size: 14px
          color: rgb(77, 85, 93)
        .active
          color: rgb(240, 20, 20)
</style>


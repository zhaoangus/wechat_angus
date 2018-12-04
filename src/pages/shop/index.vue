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
      <div class="tab-item" @click="tosellers">
        <a class="tab-link" :class="{active: onsellers}">商家</a>
      </div>
    </div>
    <div class="goods-wrapper" v-if="ongoods">
      <Goods :seller="seller"></Goods>
    </div>
  </div>
</template>

<script>
import shopHeader from '@/components/header/shopHeader'
import Goods from '@/components/goods/Goods'
export default {
  name: 'index',
  components: {
    shopHeader,
    Goods
  },
  data () {
    return {
      ongoods: true,
      onratings: false,
      onsellers: false,
      seller: {}
    }
  },
  methods: {
    togoods () {
      this.ongoods = true
      this.onratings = false
      this.onsellers = false
    },
    toratings () {
      this.ongoods = false
      this.onratings = true
      this.onsellers = false
    },
    tosellers () {
      this.ongoods = false
      this.onratings = false
      this.onsellers = true
    }
  },
  created () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5c0515eef57279499b6ac104/getsellers',
      methods: 'GET',
      success: (res) => {
        this.seller = res.data.seller
        console.log(this.seller)
      }
    })
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


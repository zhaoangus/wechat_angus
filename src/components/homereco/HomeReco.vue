<template>
  <div class="home-reco">
    <div class="title">—   推荐商家   —</div>
    <div class="title-item">
      <div class="sort">
        <span class="text">综合排序</span>
        <span class="iconfont">&#xe6aa;</span>
      </div>
      <span class="distance">距离最近</span>
      <span class="quality">品质联盟</span>
      <div class="filter">
        <span class="text">筛选</span>
        <span class="iconfont">&#xe789;</span>
      </div>
    </div>
    <div @click="toshop" class="shop-wrapper" v-for="(item,i) in seller" :key="i">
      <div class="avatar">
        <img :src="item.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span v-if="item.brand" class="brand"></span>
          <span class="name">
            {{item.name}}
          </span>
        </div>
        <div class="star">
          <span class="star-wrapper">
            <Star :size="24" :score="item.serviceScore"></Star>
          </span>
          <span class="score">{{item.serviceScore}}</span>
          <span class="count">月售{{item.sellCount}}单</span>
        </div>
        <div class="desc">
          <span class="min-price">
            ¥{{item.minPrice}}起送
          </span>
          <span class="delivery-price">
            远距离配送费¥{{item.deliveryPrice}}
          </span>
          <span class="distance">
            {{item.deliveryDistance}}km
          </span>
          <span class="time">
            {{item.deliveryTime}}分钟
          </span>
        </div>
        <div v-if="item.supports" class="support">
          <span class="icon decrease"></span>
          <span class="text">{{item.supports[0].description}}</span>
        </div>
        <div v-if="item.supports" class="support last">
          <span class="icon discount"></span>
          <span class="text">{{item.supports[1].description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '@/components/star/Star'
export default {
  name: 'HomeReco',
  props: {
    seller: {}
  },
  components: {
    Star
  },
  methods: {
    toshop () {
      wx.navigateTo({
        url: '/pages/shop/main'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .home-reco
    margin: 20px 0
    padding: 0 10px
    text-align: center
    font-size: 16px
    color: #777
    .title
      margin: 10px 0 20px 0
      font-weight: bold
    .title-item
      display: flex
      margin: 10px 0
      border-bottom: rgba(0, 0, 0, .2)
      .sort, .distance, .quality, .filter
        flex-grow: 1
        .iconfont
          font-size: 14px
      .sort
        color: #000
    .shop-wrapper
      position: relative
      margin: 30px 10px
      font-size: 0
      vertical-align: top
      .avatar
        display: inline-block
        float: left
        vertical-align: top
        img
          disaply: inline-block
          width: 64px
          height: 64px
          border-radius: 2px
      .content
        display: inline-block
        float: left
        text-align: left
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight: bold
        .star
          margin: 10px 0
          font-size: 12px
          .star-wrapper
            display: inline-block
            vertical-align: middle
          .score
            display: inline-block
            margin: 0 5px
        .desc
          margin-bottom: 20px
          line-height: 12px
          font-size: 12px
          .min-price, .delivery-price, .distance, .time
            display: inline-block
            margin: 0 5px
          .min-price
            margin-left: 0
          .distance
            margin-left: 20px
          .time
            margin-right: 0
        .support
          display: flex
          align-item: center
          margin-top: 10px
          height: 20px
          .icon
            display: inline-block
            width: 18px
            height: 18px
            line-height: 18px
            margin-right: 4px
            background-size: 18px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            line-height: 18px
            font-size: 12px
        .last
          margin-bottom: 20px
</style>

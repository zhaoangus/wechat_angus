<template>
  <div class="home-content">
    <div class="vip-wrapper">
      <span class="iconfont">&#xe639;</span>
      <span class="vip">超级会员</span>
      <span class="info">每月领20元红包</span>
      <div class="open">立即开通
        <span class="iconfont">&#xe6ab;</span>
      </div>
    </div>
    <div class="discount-wrapper">
      <div class="left">
        <div class="title">品质联盟</div>
        <div class="info">搭配齐全吃得好</div>
        <div class="purchase">立即抢购 ></div>
        <div class="img">
          <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/">
        </div>
      </div>
      <div class="right">
        <div class="title-r">限量抢购</div>
        <div class="info">超值美味9.9元起</div>
        <div class="purchase">
          <span class="num">175人</span>
          <span class="text">正在抢 ></span>
        </div>
        <div class="img">
          <img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/">
        </div>
      </div>
    </div>
    <div class="swiper-wrapper">
      <swiper class="swiper" indicator-dots="true"
    autoplay="true" interval="5000" duration="1000"
    indicator-color="indicatorColor" indicator-active-color="indicatorActive">
        <div v-for="item in swiperlist" :key="item.id">
          <swiper-item class="item">
            <img :src="item.imgUrl">
          </swiper-item>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
    swiperlist: []
  }
}
</script>

<style lang="stylus" scoped>
  .home-content
    padding: 0 10px
    color: #999
    .vip-wrapper
      margin: 5px 0
      padding: 0 10px
      height: 40px
      line-height: 40px
      color: #644f1b
      background: #ffefc4
      .iconfont
        vertical-align: middle
      .vip
        display: inline-block
        margin: 0 5px
        font-size: 14px
        font-weight: bold
      .info
        display: inline-block
        margin: 0 5px
        font-size: 10px     
      .open
        display: inline-block
        float: right
        font-size: 10px
    .discount-wrapper
      .left, .right
        display: inline-block
        padding: 12px 0 0 15px
        width: 161px
        height: 150px
        background: rgba(244, 244, 244, .05) 
        .title
          font-weight: bold
          color: #000
        .title-r
          font-weight: bold
          color: #e81919          
        .info
          font-size: 14px
        .purchase
          margin: 5px 0
          font-size: 12px
          font-weight: bold
          color: #af8260
          .num
            color: #e81919
          .text
            color: #000
        img
          float: right
          width: 120px
          height: 80px
    .swiper-wrapper
      .swiper
        height: 88px
        .item
          img
            width: 355px
            height: 88px
</style>

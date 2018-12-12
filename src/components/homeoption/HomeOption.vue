<template>
  <div class="option">
    <div class="home" @click="backToHome">
      <span class="iconfont">&#xe620;</span>
      <div class="text">首页</div>
    </div>
    <div class="discovery">
      <span class="iconfont">&#xe629;</span>
      <div class="text">发现</div>      
    </div>
    <div class="order">
      <span class="iconfont">&#xe68d;</span>
      <div class="text">订单</div>      
    </div>
    <div class="my">
      <span class="iconfont">&#xe612;</span>
      <div class="text">我的</div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Option',
  methods: {
    backToHome () {
      wx.navigateTo({
        url: '../../pages/home/main'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .option
    display: flex
    align-items: center
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 50px
    color: #777
    background: #fff
    border-top: 1px solid rgba(0, 0, 0, .2)
    opacity: 1
    .home, .discovery, .order, .my
      flex-grow: 1
      text-align: center
      font-size: 14px
      .iconfont
        font-size: 20px
    .home
      color: #0085ff
</style>

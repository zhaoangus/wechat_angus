<template>
  <div class="home-header">
    <div class="header-location">
      <span class="iconfont location-icon">&#xe633;</span>
      <span class="location">鲁疃家园南区</span>
      <span class="iconfont arrow">&#xe6aa;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe60c;</span>
      <span class="content">搜索饿了么商家、商品名称</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .home-header
    padding: 10px 15px
    width: 100%
    color: #fff
    background-color: #0085ff
    .header-location
      margin: 10px 0
      font-size: 18px
      font-weight: bold
      .location-icon
        font-size: 20px
      .location
        display: inline-block
        margin: 0 5px
    .header-input
      width: 345px
      height: 35px
      line-height: 35px
      background: #fff
      color: #999
      text-align: center
      .iconfont
        vertical-align: middle
        font-size: 20px
      .content
        display: inline-block
        margin: 0 5px
        font-size: 16px
</style>

<template>
  <div class="homeicon">
    <swiper class="swiper" indicator-dots="true"
    autoplay="true" interval="8000" duration="1000"
    indicator-color="indicatorColor" indicator-active-color="indicatorActive">
      <swiper-item v-for="(page, i) of page" :key="i" class="swiper-item">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="img">
          </div>
          <span class="title">{{item.desc}}</span>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    iconlist: {}
  },
  data () {
    return {
      indicatorColor: 'rgba(0, 0, 0, .3)',
      indicatorActive: '#999'
    }
  },
  computed: {
    page () {
      const pages = []
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .homeicon
    padding: 5px 0
    width: 100%
    height: 140px
    font-size: 12px
    color: #666
    .swiper
      .swiper-item
        .icon
          display: inline-block
          text-align: center
          width: 75px
          height: 75px
          .icon-img
            .img
              width: 45px
              height: 45px
</style>

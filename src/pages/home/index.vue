<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeIcon :iconlist="iconlist"></HomeIcon>
    <HomeContent :swiperlist="swiperlist"></HomeContent>
    <HomeReco :seller="seller"></HomeReco>
  </div>
</template>

<script>
import HomeHeader from '@/components/homeheader/HomeHeader'
import HomeIcon from '@/components/homeicon/HomeIcon'
import HomeContent from '@/components/homecontent/HomeContent'
import HomeReco from '@/components/homereco/HomeReco'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeIcon,
    HomeContent,
    HomeReco
  },
  data () {
    return {
      iconlist: [],
      swiperlist: [],
      seller: []
    }
  },
  created () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5c0515eef57279499b6ac104/gethome',
      methods: 'GET',
      success: (res) => {
        this.iconlist = res.data.iconList
        this.swiperlist = res.data.swiperList
        // console.log(this.iconList)
      }
    })
    wx.request({
      url: 'https://www.easy-mock.com/mock/5c0515eef57279499b6ac104/getsellers',
      methods: 'GET',
      success: (res) => {
        this.seller = res.data.seller
      }
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>

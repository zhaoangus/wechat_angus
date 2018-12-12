<template>
  <div class="city-list">
    <div class="header">
      <div class="header-info">
        <span @click="back" class="iconfont">&#xe624;</span>
        <span class="text">城市选择</span>
      </div>
      <div class="input">
        <span class="iconfont">&#xe60c;</span>
        <span class="text">输入城市名或者拼音</span>
      </div>
    </div>
    <scroll-view scroll-y style="height:100%" :scroll-into-view="currentLetter">
      <div class="list" ref="wrapper">
        <div class="area">
          <div class="title">当前定位城市</div>
          <div class="city">{{currentCity}}</div>
        </div>
        <div :id="'con_'+key" class="area" v-for="(item, key) of cities" :key="key" :ref="key">
          <div class="title">{{key}}</div>
          <div class="item-list">
            <div class="item" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
          </div>
        </div>
      </div>
    </scroll-view>
    <ul class="letter-list">
      <li class="letter-item" v-for="(item,i) of letters" :key="i" :ref="item"
      @click="handleLetterClick(item)">
      {{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeCity',
  props: {
    currentCity: String
  },
  data () {
    return {
      cities: {},
      startY: 0,
      letter: '',
      letters: [],
      currentLetter: ''
    }
  },
  methods: {
    back () {
      this.$emit('close')
    },
    handleCityClick (city) {
      this.currentCity = city
      this.$emit('close', city)
    },
    handleLetterClick (index) {
      this.currentLetter = `con_${index}`
    }
  },
  created () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5c0515eef57279499b6ac104/getcities',
      methods: 'GET',
      success: (res) => {
        this.cities = res.data.data.cities
        for (let i in this.cities) {
          this.letters.push(i)
        }
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  .city-list
    position: fixed
    top: 0
    left: 0
    z-index: 40
    width: 100%
    height: 100%
    color: #333
    opacity: 1
    background: #fff
    .header
      padding: 10px 0
      height: 75px
      color: #fff
      background: #0085ff
      .header-info
        margin: 0 0 10px 0
        .iconfont
          display: inline-block
          margin: 0 10px
          float: left
          font-size: 20px
        .text
          display: inline-block
          margin-left: 110px
      .input
        margin: 0 10px
        padding: 0 5px
        width: 90%
        height: 35px  
        line-height: 35px
        font-size: 18px
        background: #fff
        border-radius: 15px
        color: #333
        .text
          display: inline-block
          margin-left: 5px
          font-size: 14px
    .list
      .area
        font-size: 14px
        .title
          padding: 0 10px
          width: 100%
          height: 50px
          line-height: 50px
          background: rgb(242, 242, 242)
        .city
          padding: 0 10px
          width: 100%
          height: 50px
          line-height: 50px
          background: #fff
        .item-list
          .item
            padding: 0 10px
            width: 100%
            height: 50px
            line-height: 50px
            background: #fff
            border-bottom: 1px solid rgba(0, 0, 0, .1)
    .letter-list
      display: flex
      flex-direction: column
      justify-content: center
      position: absolute
      top: 110px
      right: 10px
      width: 14px
      .letter-item
        line-height: 18px
        text-align: center
        color: #0085ff
        font-size: 12px
</style>

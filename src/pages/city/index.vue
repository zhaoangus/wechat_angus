<template>
  <div class="city">
    <div class="header">
      <span class="iconfont">&#xe624;</span>
      <span class="text">选择收货地址</span>
      <span class="add">新增地址</span>
    </div>
    <div class="location">
      <span class="select" @click="showCityList">
        <span class="name">{{currentCity}}</span>
        <span class="iconfont">&#xe6aa;</span>
      </span>
      <span class="input">
        <span class="iconfont">&#xe60c;</span>
        <span class="text">请输入地址</span>
      </span>
    </div>
    <div class="current-add">
      <div class="text">当前地址</div>
      <div class="add">
        <span class="info">中关村南大街3号</span>
        <span class="again">
          <span class="iconfont">&#xe633;</span>
          <span class="intext">重新定位</span>
        </span>
      </div>
    </div>
    <div class="add-list">
      <div class="text">收货地址</div>
      <div class="list">
        <div class="info">
          <div class="basic">
            <span class="name">张三</span>
            <span class="sex">先生</span>
            <span class="phone">13848284723</span>
          </div>
          <div class="address">中关村南大街3号</div>
        </div>
        <div class="info">
          <div class="basic">
            <span class="name">张三</span>
            <span class="sex">先生</span>
            <span class="phone">13848284723</span>
          </div>
          <div class="address">中关村南大街3号</div>
        </div>
        <div class="info">
          <div class="basic">
            <span class="name">张三</span>
            <span class="sex">先生</span>
            <span class="phone">13848284723</span>
          </div>
          <div class="address">中关村南大街3号</div>
        </div>
        <div class="info">
          <div class="basic">
            <span class="name">张三</span>
            <span class="sex">先生</span>
            <span class="phone">13848284723</span>
          </div>
          <div class="address">中关村南大街3号</div>
        </div>
        <div class="info">
          <div class="basic">
            <span class="name">张三</span>
            <span class="sex">先生</span>
            <span class="phone">13848284723</span>
          </div>
          <div class="address">中关村南大街3号</div>
        </div>
        <div class="info">
          <div class="basic">
            <span class="name">张三</span>
            <span class="sex">先生</span>
            <span class="phone">13848284723</span>
          </div>
          <div class="address">中关村南大街3号</div>
        </div>
      </div>
    </div>
    <HomeOption></HomeOption>
    <HomeCity :currentCity="currentCity" @close="closeCityList" v-if="cityList"></HomeCity>
  </div>
</template>

<script>
import HomeOption from '@/components/homeoption/HomeOption'
import HomeCity from '@/components/homecity/HomeCity'
export default {
  name: 'City',
  components: {
    HomeOption,
    HomeCity
  },
  data () {
    return {
      cityList: false,
      currentCity: '北京'
    }
  },
  methods: {
    showCityList () {
      this.cityList = true
    },
    closeCityList (city) {
      this.cityList = false
      this.currentCity = city
    }
  }
}
</script>

<style lang="stylus" scoped>
  .city
    color: #333
    .header
      height: 45px
      line-height: 45px
      text-align: center
      color: #fff
      background: #0085ff
      .iconfont, .add
        display: inline-block
        margin: 0 10px
      .iconfont
        float: left
        font-size: 20px
      .text
        margin-left: 50px
      .add
        float: right
        font-size: 16px
    .location
      padding: 10px 20px
      .select
        diaplay: inline-block
        height: 40px
        line-height: 40px
        font-size: 14px
        .name
          display: inline-block
          margin-right: 10px
        .iconfont
          font-size: 10px
      .input
        display: inline-block
        padding: 0 5px
        width: 100%
        height: 40px
        line-height: 40px
        font-size: 18px
        background: rgb(242, 242, 242)
        border-radius: 5px
        .text
          display: inline-block
          margin-left: 5px
          font-size: 14px
    .current-add
      .text
        padding: 0 10px
        width: 100%
        height: 50px
        line-height: 50px
        background: rgb(242, 242, 242)
        font-size: 14px
      .add
        padding: 0 10px
        width: 100%
        height: 50px
        line-height: 50px
        background: #fff
        .info
          font-size: 16px
          font-weight: bold
          color: #000
        .again
          display: inline-block
          float: right
          margin-right: 20px
          color: #0085ff
          .intext
            diaplay: inline-block
            font-size: 16px
            margin-left: 5px
    .add-list
      .text
        padding: 0 10px
        width: 100%
        height: 50px
        line-height: 50px
        background: rgb(242, 242, 242)
        font-size: 14px
      .list
        .info
          padding: 0 10px
          width: 100%
          height: 60px
          background: #fff
          font-size: 14px
          border: 1px solid rgba(242, 242, 242, .1) 
          .basic
            margin: 10px 0 3px 0
            .name
              color: #000
              font-weight: bold
            .sex
              display: inline-block
              margin: 0 10px 0 5px
              font-size: 12px
            .phone
              font-size: 12px
          .address
            font-size: 12px
</style>

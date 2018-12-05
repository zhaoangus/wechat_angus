<template>
  <div>
    <div class="goods">
      <scroll-view style="width:100px" scroll-y class="menu-wrapper">
          <ul>
            <li v-for="(item, index) in goods" :key="index"
            class="menu-item" :class="{ 'current': currentIndex === index }"
            @tap="selectMenu(index)">
              <span class="text border-1px">
                <span v-if="item.type>0" class="icon"
                  :class="classMap[item.type]"></span>{{item.name}}
              </span>
            </li>
          </ul>
      </scroll-view>
      <scroll-view style="height:100%" scroll-y :scroll-into-view="toviewid" scroll-with-animation="true" class="foods-wrapper">
        <ul>
          <li v-for="(item, i) in goods" :id="'con_'+i"
          :key="i" class="food-list food-list-hook">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li @click="selectFood(food)" v-for="(food, subIndex) in item.foods"
              :key="subIndex" class="food-item border-1px">
                <div class="icon">
                  <img :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">¥{{food.price}}</span><span class="old" v-show="food.oldPrice">{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <!-- <cartcontrol :food="food" @cart-add="_drop"></cartcontrol> -->
                    <cartcontrol :food="food"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </scroll-view>
      <shopcar ref="shopcart" :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcar>
    </div>
    <food :food="selectedFood" ref="food"></food>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import Shopcar from '../shopcar/Shopcar'
import Cartcontrol from '../cartcontrol/Cartcontrol'
import Food from '../food/Food'
export default {
  name: 'Goods',
  props: {
    seller: {}
  },
  data () {
    return {
      goods: [],
      classMap: [],
      toviewid: '',
      currentIndex: 0,
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    }
  },
  components: {
    Shopcar,
    Cartcontrol,
    Food
  },
  methods: {
    selectMenu (index) {
      // let foodList = this.$refs.foodswrapper.getElementsByClassName('food-list-hook')
      // let el = foodList[index]
      this.toviewid = `con_${index}`
      this.currentIndex = index
      let menulist = this.$refs.menuwrapper
      console.log(menulist)
    },
    selectFood (food, event) {
      this.selectedFood = food
      this.$refs.food.show()
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    wx.request({
      url: 'https://www.easy-mock.com/mock/5c0515eef57279499b6ac104/getgoods',
      methods: 'GET',
      success: (res) => {
        this.goods = res.data.goods
        console.log(this.goods)
        this.$nextTick(() => {
          this._initScroll()
          this._calculateHeight()
        })
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 6px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, .1))
          font-size: 12px
          .icon
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 2px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.guarantee
              bg-image('guarantee_3')
            &.invoice
              bg-image('invoice_3')
            &.special
              bg-image('special_3')
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, .1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
          img
            width: 57px
            height: 57px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>

<template>
  <div>
    <div class="shopcart">
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{highlight: totalCount>0}">
              <span class="iconfont" :class="{highlight: totalCount>0}">&#xe6b8;</span>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{highlight: totalPrice>0}">¥{{totalPrice}}元</div>
          <div class="desc">另需配送费¥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" @click.stop.prevent="pay">
          <div class="pay" :class="payClass">
            {{payDesc}}
          </div>
        </div>
        <!-- <div class="ball-container">
          <transition name="drop">
            <div v-for="ball in balls" v-show="ball.show"
            :key="ball.index" class="ball">
            </div>
          </transition>
        </div> -->
        <transition name="fold">
          <div class="shopcart-list" v-show="listShow">
            <div class="list-header">
              <div class="title">购物车</div>
              <span class="empty" @click="empty">清空</span>
            </div>
            <div class="list-content" ref="listcontent">
              <ul>
                <li class="food" v-for="food in selectFoods" :key="food.index">
                  <span class="name">{{food.name}}</span>
                  <div class="price">
                    <span>¥{{food.price*food.count}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food"></cartcontrol>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <transition name="fade">
      <div class="list-mask" @click="hideList" v-show="listShow"></div>
    </transition>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Cartcontrol from '../cartcontrol/Cartcontrol'
export default {
  name: 'ShopCar',
  components: {
    Cartcontrol
  },
  data () {
    return {
      balls: [{
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }],
      dropBall: [],
      fold: false
    }
  },
  props: {
    selectFoods: {
      type: Array,
      default () {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    payDesc () {
      if (this.totalPrice === 0) {
        return '¥' + this.minPrice + '元起送'
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice
        return '还差¥' + diff + '元起送'
      } else {
        return '去结算'
      }
    },
    payClass () {
      if (this.totalPrice < this.minPrice) {
        return 'not-enough'
      } else {
        return 'enough'
      }
    },
    listShow () {
      if (!this.totalCount) {
        this.fold = true
        return false
      }
      let show = !this.fold
      if (show) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.listcontent, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
      return show
    }
  },
  methods: {
    toggleList () {
      if (!this.totalCount) {
        return
      }
      this.fold = !this.fold
    },
    empty () {
      this.selectFoods.forEach((food) => {
        food.count = 0
      })
    },
    hideList () {
      this.fold = true
    },
    pay () {
      if (this.totalPrice < this.minPrice) {
        return
      }
      window.alert(`支付${this.totalPrice}元`)
    }
  }
  // methods: {
  //   drop (el) {
  //     for (let i = 0;i < this.balls.length;i++) {
  //       let ball = this.balls[i]
  //       if (!ball.show) {
  //         ball.show = true
  //         bull.el = el
  //         this.dropBall.push(ball)
  //         return
  //       }
  //     }
  //   },
  //  beforeEnter (el) {
  //    let count = this.balls.length
  //    while (count--) {
  //      let ball = this.balls[count]
  //      if (ball.show) {
  //        let rect = ball.el.getBoundingClientRect()
  //        let x = rect.left - 32
  //        let y = -(window.innerHeight - rect.top -22)
  //        el.style.display = ''
  //        el.style.webkitTransform = `translate3d(0, $(y)px, 0)`
  //        el.style.transform = `translate3d(0, $(y)px, 0)`
  //      }
  //    }
  //  }
  // }
}
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    .content
      display: flex
      font-size: 0
      background: #141d27
      color: rgba(255, 255, 255, .4)
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          vertical-align: top
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            background: #2b343c
            text-align: center
            &.highlight
              background: rgb(0, 160, 220)
            .iconfont
              line-height: 44px
              font-size: 24px
              color: #80858a
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #fff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          padding-right: 12px
          line-height: 24px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, .1)
          font-size: 16px
          font-weight: 700
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: top
          line-height: 24px
          margin: 12px 0 0 12px
          font-size: 10px
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          background: #2b333b
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff
      .shopcart-list
        position: absolute
        left: 0
        top: 0
        z-index: -1
        width: 100%
        transition: all 0.5s
        transform: translate3d(0, -100%, 0)
        &.fold-enter, &.fold-leave-to
          transform: translate3d(0, 0, 0)
        .list-header
          height: 40px
          line-height: 40px
          padding: 0 18px
          background: #f3f5f7
          border-bottom: 1px solid rgba(7, 17, 27, .1)
          .title
            float: left
            font-size: 14px
            color: rgb(7, 17, 27)
          .empty
            float: right
            font-size: 12px
            color: rgb(0, 160, 220)
        .list-content
          padding: 0 18px
          max-height: 217px
          background: #fff
          overflow: hidden
          .food
            position: relative
            padding: 12px 0
            box-sizing: border-box
            border-1px(rgba(7, 17, 27, .1))
            .name
              line-height: 24px
              font-size: 14px
              color: rgb(7, 17, 27)
            .price
              position: absolute
              right: 90px
              bottom: 12px
              line-height: 24px
              font-size: 14px
              font-weight: 700
              color: rgb(240, 20, 20)
            .cartcontrol-wrapper
              position: absolute
              right: 0
              bottom: 5px
  .list-mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 40
    backdrop-filter: blur(10px)
    opacity: 1
    transition: all .5s
    background: rgba(7, 17, 27, .6)
    &.fade-enter, &.fold-leave-to
      opacity: 0
      background: rgba(7, 17, 27, 0)
</style>

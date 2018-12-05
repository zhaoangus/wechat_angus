<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-if="food.count>0"
        @click.stop.prevent="decreaseCount">
        <span class="inner iconfont">&#xe604;</span>
      </div>
    </transition>
    <div class="cart-count" v-if="food.count>0">{{food.count}}</div>
    <div class="cart-add iconfont" @click.stop.prevent="addCart">&#xe605;</div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Cartcontrol',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart (event) {
      // console.log('click')
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('cart-add', event.target)
    },
    decreaseCount () {
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      .inner
        display: inline-block
        font-size: 24px
        line-height: 24px
        color: rgb(0, 160, 220)
      &.move-enter-active, &.move-leave-active
        transition: opacity .4s linear
        .inner
          transition: all 0.4s linear
          transform: rotate(0)
      &.move-enter-to, &.move-leave
        opacity: 1
        transform: translate3d(0, 0, 0)
      &.move-enter, &.move-leave-to
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      font-size: 24px
      color: rgb(0, 160, 220)
</style>

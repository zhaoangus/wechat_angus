<template>
  <div class="seller" ref="seller">
    <scroll-view scroll-y style="height:100%">
      <div class="seller-content">
        <div class="overview">
          <h1 class="title">{{seller.name}}</h1>
          <div class="desc border-1px">
            <div class="star">
              <star :size="36" :score="seller.score"></star>
            </div>
            <span class="text">({{seller.ratingCount}})</span>
            <span class="text">月售{{seller.sellCount}}单</span>
          </div>
          <ul class="remark">
            <li class="block">
              <h2>起送价</h2>
              <div class="content">
                <span class="stress">{{seller.minPrice}}</span>元
              </div>
            </li>
            <li class="block">
              <h2>商家配送</h2>
              <div class="content">
                <span class="stress">{{seller.deliveryPrice}}</span>元
              </div>
            </li>
            <li class="block">
              <h2>平均配送时间</h2>
              <div class="content">
                <span class="stress">{{seller.deliveryTime}}</span>分钟
              </div>
            </li>
          </ul>
          <div class="favorite" @click="toggleFavorite">
            <span class="iconfont" :class="{active:favorite}">&#xe628;</span>
            <span class="text">{{favoriteText}}</span>
          </div>
        </div>
        <split></split>
        <div class="bulletin">
          <h1 class="title">公告与活动</h1>
          <div class="content-wrapper border-1px">
            <p class="content">{{seller.bulletin}}</p>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item border-1px" v-for="item in seller.supports" :key="item.index">
              <span class="icon" :class="[{'decrease':item.type===0},{'discount':item.type===1},
              {'special':item.type===2},{'invoice':item.type===3},{'guarantee':item.type===4}]"></span>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
        </div>
        <split></split>
        <div class="pics">
          <h1 class="title">商家实景</h1>
          <div class="pic-wrapper" ref="picWrapper">
            <scroll-view scroll-x>
              <ul class="pic-list" ref="picList">
                <li v-for="pic in seller.pics"
                class="pic-item" :key="pic.index">
                  <img :src="pic">
                </li>
              </ul>
            </scroll-view>
          </div>
        </div>
        <split></split>
        <div class="info">
          <div class="title border-1px">商家信息</div>
          <ul>
            <li v-for="info in seller.infos"
            class="info-item" :key="info.index">{{info}}</li>
          </ul>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
import Star from '../star/Star'
import Split from '../split/Split'
export default {
  name: 'Seller',
  props: {
    seller: {}
  },
  components: {
    Star,
    Split
  },
  data () {
    return {
      favorite: false
    }
  },
  computed: {
    favoriteText () {
      return this.favorite ? '已收藏' : '收藏'
    }
  },
  // watch: {
  //   'seller' () {
  //     this.$nextTick(() => {
  //       this._initPics()
  //     })
  //   }
  // },
  methods: {
    // _initScroll () {
    //   if (!this.scroll) {
    //     this.scroll = new BScroll(this.$refs.seller, {
    //       click: true
    //     })
    //   }
    // },
    // _initPics () {
    //   if (this.seller.pics) {
    //     let picWidth = 120
    //     let margin = 6
    //     let width = (picWidth + margin) * this.seller.pics.length - margin
    //     this.$refs.picList.style.width = width + 'px'
    //     this.$nextTick(() => {
    //       if (!this.picScroll) {
    //         this.picScroll = new BScroll(this.$refs.picWrapper, {
    //           scrollX: true,
    //           eventPassthrough: 'vertical'
    //         })
    //       } else {
    //         this.picScroll.refresh()
    //       }
    //     })
    //   }
    // },
    toggleFavorite () {
      this.favorite = !this.favorite
    }
  }
  // created () {
  //   this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  // }
  // mounted () {
  //   this._initScroll()
  //   this._initPics()
  // }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .seller
    position: absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      position: relative
      padding: 18px
      .title
        margin-bottom: 8px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-size: 14px
      .desc
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, .1))
        font-size: 0
        .star
          display: inline-block
          margin-bottom: 8px
          vertical-align: top
        .text
          display: inline-block
          margin-right: 12px
          line-height: 18px
          vertical-align: top
          font-size: 10px
          color: rgb(77, 85, 93)
      .remark
        display: flex
        padding-top: 18px
        .block
          flex: 1
          text-align: center
          border-right: 1px solid rgba(7, 17, 27, .1)
          &:last-child
            border: none
          h2
            margin-bottom: 4px
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .content
            line-height: 24px
            font-size: 10px
            color: rgb(7, 17, 27)
            .stress
              font-size: 24px
      .favorite
        position: absolute
        width: 50px
        right: 11px
        top: 18px
        text-align: center
        .iconfont
          display: block
          margin-bottom: 4px
          color: #d4d6d9
          line-height: 24px
          font-size: 24px
          &.active
            color: rgb(240, 20, 20)
        .text
          line-height: 10px
          font-size: 10px
          color: rgb(77, 85, 93)
    .bulletin
      padding: 18px 18px 0 18px
      .title
        margin-bottom: 8px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-size: 14px
      .content-wrapper
        padding: 0 12px 16px 12px
        border-1px(rgba(7, 17, 27, .1))
        .content
          line-height: 24px
          font-size: 12px
          color: rgb(240, 20, 20)
      .supports
        .support-item
          padding: 16px 12px
          border-1px(rgba(7, 17, 27, .1))
          font-size: 0
          &:last-child
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 16px
          height: 16px
          margin-right: 6px
          background-size: 16px 16px
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
        .text
          line-height: 16px
          font-size: 12px
          color: rgb(7, 17, 27)
    .pics
      padding: 18px
      .title
        margin-bottom: 12px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-size: 14px
      .pic-wrapper
        width: 100%
        overflow: hidden
        white-space: nowrap
        .pic-list
          font-size: 0
          .pic-item
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
            &:last-child
              margin: 0
            img
              width: 120px
              height: 90px
    .info
      padding: 18px 18px 0 18px
      color: rgb(7, 17, 27)
      .title
        padding-bottom: 12px
        line-height: 14px
        border-1px(rgba(7, 17, 27, .1))
        font-size: 14px
      .info-item
        padding: 16px 12px
        line-height: 16px
        border-1px(rgba(7, 17, 27, .1))
        font-size: 12px
        &:last-child
          border-none()
</style>

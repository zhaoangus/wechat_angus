# Wechat_ele

之前使用vue来搭建了饿了么app，加上最近学习了一些微信小程序的东西，准备结合vue和小程序来搭建饿了么和小程序。发现美团开源了mpvue，正好一试。

在实际开发中发现有*不少的坑*（博客中进行了一些总结），以及学习了很多小程序的开发方式，小程序的一些操作比如页面滚动、路由跳转其实也是很方便的。

接下来会对这个小程序进行不断改进，若有兴趣，欢迎交流。

## 安装方法

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 功能简介
该小程序重点实现了饿了么的商家页面的主要功能，同时也提供了首页以及收货地址的选择页面。
+ 用户点击定位，可以进入收货页面，点击定位可以选择当前城市，点击右侧字母可跳转到该字母的城市列表。
+ 在首页实现了商品种类和活动轮播，下方商家栏可点击商家进入商家页面。
+ 商家页面分为头部、商品、评论和商家四部分，头部实现了隐藏说明，商品部分分为左右两栏，左侧为大类，右侧为商品小类，实现了左右联动。评论部分实现了对评论的过滤。
+ 在商品部分点击“+”或“-”可添加商品至购物车，购物车根据商品总价计算运费；点击商品进入商品详情页，也可点击购物车组件，进行商品的购买。

## 页面简介
这里展示了所有页面的主要功能，包括首页，收货地址，商家，购物车等页面或组件。

![conv_ops](https://github.com/zhaoangus/wechat_angus/blob/master/static/image/ele.gif)

## 功能实现
### 首页icon和图片轮播
使用微信小程序自带的swiper组件，在swiper-item中引入v-for循环，内层通过计算属性，根据icon数量和每页显示数量，形成分页的轮播图。

```
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
    
```
```
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
```
### 商家列表左右联动
左->右：对小程序组件scroll-view的属性scroll-into-view，其值为某个子元素的id，在mpvue中，使用v-bind绑定id到元素上。

右->左：contentHeight是右侧内容scroll-view的高度，同时也是左侧导航scroll-view的高度，navItemHeight是导航ul下每一个item的高度，当导航下ul的高度超过scroll-view的高度，并且this.currentIndex * this.navItemHeight  > this.contentHeight，导航才向上滚动。

具体js部分代码可查看页面代码。

```
<scroll-view style="width:100px" scroll-y
class="menu-wrapper" :scroll-into-view="navId"
scroll-with-animation="true">
  <ul class="menu-ul">
    <li v-for="(item, index) in goods" :key="index"
    class="menu-item" :class="index===currentIndex ? 'current' : ''"
    @click="selectMenu(index)" :id="'nav_'+index">
    ...
    </li>
  </ul>
</scroll-view>
<scroll-view style="height:100%" scroll-y
:scroll-into-view="toviewid" scroll-with-animation="true"
class="foods-wrapper" @scroll="onScroll">
  <ul>
    <li v-for="(item, i) in goods" :id="'con_'+i"
    :key="i" class="food-list food-list-hook">
      <h1 class="title">{{item.name}}</h1>
      <ul>
        <li @click="selectFood(food, subIndex)" v-for="(food, subIndex) in item.foods"
        :key="subIndex" class="food-item border-1px">
          <div class="icon">
            <img :src="food.icon">
          </div>
          ...
        </li>
      </ul>
    </li>
  </ul>
</scroll-view>
```

### 购物车实现
将购物按钮组件化，方便商品页面和详情页面调用。

在商品页面将selectedFoods设置为计算属性，传入购物车组件，在商品数量和种类变化时，生成选择的商品数组，自动计算商品总价等参数。

```
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
```
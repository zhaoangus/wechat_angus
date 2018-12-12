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


# 介绍

fpi-ui 是基于 [element-ui](http://element-cn.eleme.io/2.6/#/zh-CN) 二次封装的UI库，可以直接在项目中使用 `<el-xx />`，再封装后的组件统一 `<fpi-xx />`


## 安装

```bash
# 安装依赖
yarn add git+ssh://git@git.fpi-inc.site:wanghao/fpi-ui.git
```

## 引入

```js
// main.js
import Vue from 'vue';
import FpiUI from 'fpi-ui'
import App from './App.vue';

Vue.use(FpiUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

图标库
```html
<link type="text/css" rel="stylesheet" href="http://at.alicdn.com/t/font_653301_sblyj1jdu3.css">
```

## 全局定制化的element-ui

1. 全局组件使用 `mini`尺寸 
```js
Vue.use(Element, { size: 'mini' });
```

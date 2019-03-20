# fpi-ui

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

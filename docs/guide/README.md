# 指南

## 开始

```bash
# 下载依赖包
yarn
# 开始写作
yarn docs:dev
```

## 目录介绍

```
.
├── .gitignore
├── .gitlab-ci.yml
├── .vscode
│   └── launch.json         预置了一个 vscode 调试配置
├── docs                    有关文档的所有文件
│   ├── .vuepress           用于存放存放文档工程全局的配置、组件、静态资源等。
│   ├── README.md
│   ├── guide
│   ├── share
│   └── ui
├── package.json
└── yarn.lock
```

::: tip
输出目录树：```tree -L 2 -I 'node_modules|.git|.DS_Store' -a```；更多功能：```tree --help```
:::

## 一个小例子 🌰

::: demo 可以是一个完整的.vue代码
```html
<style lang="stylus" scoped>
.box
    .el-button
        color red
</style>

<template lang="pug">
.box 
    el-button(@click="onClick") 点击一下按钮123
</template>

<script>
export default {
    methods: {
        onClick() {
            alert('现在：' + new Date().toLocaleString())
        }
    } 
}
</script>
```
:::

## 再来个例子 🌰

::: demo
```html
<fpi-hello msg="fpi">
```
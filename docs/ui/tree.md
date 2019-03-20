# tree 树组件

在 [element-ui/tree](http://element-cn.eleme.io/2.6/#/zh-CN/component/tree#tree-shu-xing-kong-jian) 基础上增加了一些功能，主要包括：
- 1.附加（attached）节点
- 2.默认选择关键字

## 普通用法

::: demo

```html 
<template lang="pug">
fpi-tree(
    @onNodeClick="onNodeClick"
    :data="treeData"
)
</template>
<script>
export default {
    data() {
        return {
            treeData: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 2,
                    label: '二级 1-1',
                    children: [{
                        id: 4,
                        label: '三级 1-1-1',
                    }]
                }, {
                    id: 3,
                    label: '二级 1-2',
                    sites: [{
                        siteName: '站点 3',
                        status: 'online'
                    }]
                }],
                sites: [{
                    siteName: '站点 1',
                    status: 'online'
                }, {
                    siteName: '站点 2',
                    status: 'offline'
                }]
            }]
        }
    },
    methods: {
        onNodeClick(data) {
            console.log(data)
        }
    }
}
</script>
```
:::
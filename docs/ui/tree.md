# tree 树组件

在 [element-ui/tree](http://element-cn.eleme.io/2.6/#/zh-CN/component/tree#tree-shu-xing-kong-jian) 基础上增加了一些功能，主要包括：


1. 附加（attached）节点

2. 默认选择关键字

## 基本用法

::: demo  

```html 
<template lang="pug">
fpi-tree(
    :data="treeData"
    @onNodeClick="onNodeClick"
)
</template>
<script>
export default {
    data() {
        return {
            treeData: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1',
                    }]
                }, {
                    label: '二级 1-2'
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

## 添加附件节点

::: demo 附加节点（`attached`），可以补充树结构；另外还支持默认选择

```html {3,6} 
<template>
<fpi-tree
    v-if="treeData.length > 0"
    :options="treeOptions"
    :data="treeData"
    defaultSelectedKey="treeAttached"
    @defaultSelected="onDefaultSelected"
/>
</template>
<script>
export default {
    data() {
        return {
            treeData: [],
            treeOptions: {
                childrenProp: 'child',
                attachedProp: 'data',
                nodeLabelProp: 'name',
                attachedLabelProp: 'siteName',
                keyProp: 'keyword'
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.treeData = [{
                keyword: '1',
                name: '一级 1',
                child: [{
                    keyword: '2',
                    name: '二级 1-1',
                    child: [{
                        keyword: '3',
                        name: '三级 1-1-1',
                    }]
                }],
                data: [{
                    keyword: '4',
                    siteName: '站点 1',
                    status: 'online'
                }, {
                    keyword: '5',
                    siteName: '站点 2',
                    status: 'offline'
                }]
            }]
        }, 500);
    },
    methods: {
        onDefaultSelected(data) {
            console.log( '默认选中' + data.siteName)
        }
    }
}
</script>
```
:::


### Attributes
| 参数                | 说明                          | 类型              | 可选值   | 默认值 |
| ------------------- | ----------------------------- | ----------------- | -------- | ------ |
| data                | 展示数据                      | array             | -        | -      |
| options             | 配置选项，具体看下表          | object            | -        | -      |
| render-attachedNode | 附加节点内容区的渲染 Function | Function(h, data) | -        | -      |
| defaultSelectedKey  | 默认选择的节点                | -                 | 下面补充 | -      |

### props
| 参数              | 说明                                   | 类型   | 可选值 | 默认值     |
| ----------------- | -------------------------------------- | ------ | ------ | ---------- |
| childrenProp      | 指定子树为节点对象的某个属性值         | string | —     | —         |
| attachedProp      | 指定附加树为节点对象的某个属性值       | string | —     | —         |
| nodeLabelProp     | 指定节点标签为节点对象的某个属性值     | string | —     | —         |
| attachedLabelProp | 指定附加节点标签为节点对象的某个属性值 | string | —     | —         |
| keyProp           | 关键字，用于 el-tree 的 node-key       | string | —     | `id|ID|Id` |

### defaultSelectedKey

| 可选值       | 说明                                                                                   |
| ------------ | -------------------------------------------------------------------------------------- |
| treeChildren | 第一个子节点                                                                           |
| treeAttached | 第一个附加节点                                                                         |
| key          | 这个值跟 props 的 keyProp 有关，如果树节点和附加节点 key 不同，可以用管道符 `|` 写多个 |


### Events

| 方法名           | 说明                     | 参数 |
| ---------------- | ------------------------ | ---- |
| node-click       | 节点被点击时的回调       | data |
| default-selected | 加载后默认节点数据的回调 | data |

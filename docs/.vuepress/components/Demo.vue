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
                attachedProp: 'aa',
                nodeLabelProp: 'name',
                attachedLabelProp: 'siteName',
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.treeData = [{
                id: '1',
                name: '一级 1',
                child: [{
                    id: '2',
                    name: '二级 1-1',
                    child: [{
                        id: '3',
                        name: '三级 1-1-1',
                    }]
                }],
                aa: [{
                    id: '4',
                    siteName: '站点 1',
                    status: 'online'
                }, {
                    id: '5',
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
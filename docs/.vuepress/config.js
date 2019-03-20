module.exports = {
    title: 'fpi-inc',
    themeConfig: {
        // 导航栏
        nav: [
            { text: '指南', link: '/guide/' },
            { text: 'UI', link: '/ui/' },
            { text: '工具库', link: '/tools/' },
            {
                text: '分享',
                items: [
                    { text: 'js', link: '/share/js/' },
                    { text: 'css', link: '/share/css/' },
                    { text: 'others', link: '/share/others/' }
                ]
            },
            { text: '代码仓库', link: 'https://git.fpi-inc.site/' },
        ],
        // 侧边栏
        sidebar: {
            '/guide/': [''],
            '/ui/': ['tree', 'button', 'learn'],
            '/share/others/': ['vuepress']
        },

        editLinks: true,
        lastUpdated: '上次更新',
        editLinkText: '在 GitHub 上编辑此页',
    },

    head: [
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'http://at.alicdn.com/t/font_653301_sblyj1jdu3.css' }]
    ],

    plugins: [
        require('./md-demo'),
        // 这个插件还有bug，但是想法很好
        // 'demo-block', 
        ['@vuepress/medium-zoom', {
            selector: '.content img'
        }],
        ['@vuepress/back-to-top', true],
        '@vuepress/blog',
        // '@vuepress/clean-urls',
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                const moment = require('moment')
                moment.locale('zh-CN')
                return moment(timestamp).fromNow()
            }
        }]
    ]
}
import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '电子科技大学智能计算系统实验室网站',

  themeConfig: {
    nav: [
      { text: '主页', link: '/zh' },
      { text: '人员', link: '/zh/people' },
      { text: '发表', link: '/zh/publication' },
      { text: '联系我们', link: '/zh/contact' },
      { text: '内容主页', link: 'https://home.icsl.nise.ac.cn' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 智能计算系统实验室`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})

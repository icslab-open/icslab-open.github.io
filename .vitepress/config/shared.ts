import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader
} from 'vitepress-plugin-group-icons'

export const shared = defineConfig({
  title: 'Intelligent Computing Systems Laboratory',

  rewrites: {
    'en/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],
    config(md) {
      // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'zh':
              return '复制代码'
            default:
              return 'Copy code'
          }
        })()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        )
      }
      md.use(groupIconMdPlugin)
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', size: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'ICSLab' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['script', {}, `
      (function () {
        var themeKey = 'vitepress-theme-appearance';
        var langKey = 'nise-lang';
        var theme = localStorage.getItem(themeKey) || 'auto';
        var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', theme === 'dark' || (theme === 'auto' && prefersDark));

        if (window.location.pathname === '/' && !sessionStorage.getItem('lang-redirected')) {
          sessionStorage.setItem('lang-redirected', '1');
          var savedLang = localStorage.getItem(langKey);
          var languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
          var useZh = savedLang ? savedLang === 'zh' : languages.some(function (lang) {
            return /^zh\\b/i.test(lang);
          });
          if (useZh) {
            localStorage.setItem(langKey, 'zh');
            window.location.href = '/zh/';
          } else {
            localStorage.setItem(langKey, 'en');
          }
        }
      })();
    `]
  ],

  themeConfig: {
    logo: { src: '/favicon.svg', width: 24, height: 24 },

    socialLinks: [{ icon: 'github', link: 'https://github.com/nise-open' }]
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          niselab: localIconLoader(import.meta.url, '../../public/favicon.svg')
        }
      })
    ]
  }
})

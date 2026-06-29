import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description:
    'The website of Intelligent Computing Systems Laboratory at the University of Electronic Science and Technology of China.',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'People', link: '/people' },
      { text: 'Publications', link: '/publication' },
      { text: 'Contact us', link: '/contact' },
      { text: 'Content Home', link: 'https://home.icsl.nise.ac.cn' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Intelligent Computing Systems Laboratory'
    }
  }
})

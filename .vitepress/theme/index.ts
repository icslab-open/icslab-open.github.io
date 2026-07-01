import { h } from 'vue'
import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'
import './styles.css'
import ThemeModeSelect from './ThemeModeSelect.vue'

export default {
  extends: Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'nav-bar-content-after': () => h(ThemeModeSelect)
    })
  },
  enhanceApp({ app, router }) {
    app.component('ThemeModeSelect', ThemeModeSelect)

    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = (to) => {
        localStorage.setItem('icslab-lang', to.startsWith('/zh') ? 'zh' : 'en')
      }
    }
  }
}

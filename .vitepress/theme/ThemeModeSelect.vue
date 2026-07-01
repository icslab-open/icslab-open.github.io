<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'

type ThemeMode = 'light' | 'dark' | 'auto'

const storageKey = 'vitepress-theme-appearance'
const mode = ref<ThemeMode>('auto')
const systemDark = ref(false)
const { lang } = useData()

const isZh = computed(() => lang.value.startsWith('zh'))

const options = computed<{ value: ThemeMode; labelZh: string; labelEn: string; icon: string }[]>(
  () => [
    { value: 'light', labelZh: '白天', labelEn: 'Light', icon: '☀' },
    { value: 'auto', labelZh: '自动', labelEn: 'System', icon: '⬤' },
    { value: 'dark', labelZh: '夜间', labelEn: 'Dark', icon: '☽' }
  ]
)

function label(opt: { labelZh: string; labelEn: string }) {
  return isZh.value ? opt.labelZh : opt.labelEn
}

function readMode(): ThemeMode {
  if (typeof localStorage === 'undefined') return 'auto'
  const v = localStorage.getItem(storageKey)
  return v === 'light' || v === 'dark' || v === 'auto' ? v : 'auto'
}

function applyMode(value: ThemeMode) {
  mode.value = value
  localStorage.setItem(storageKey, value)
  document.documentElement.classList.toggle(
    'dark',
    value === 'dark' || (value === 'auto' && systemDark.value)
  )
}

function handleSystemChange(e: MediaQueryListEvent) {
  systemDark.value = e.matches
  if (mode.value === 'auto') applyMode('auto')
}

onMounted(() => {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  systemDark.value = media.matches
  applyMode(readMode())
  media.addEventListener('change', handleSystemChange)
  onUnmounted(() => media.removeEventListener('change', handleSystemChange))
})
</script>

<template>
  <div class="icslab-theme-toggle" role="group" :aria-label="isZh ? '主题模式' : 'Theme mode'">
    <button
      v-for="opt in options"
      :key="opt.value"
      class="icslab-theme-btn"
      :class="{ active: mode === opt.value }"
      :title="label(opt)"
      :aria-pressed="mode === opt.value"
      @click="applyMode(opt.value)"
    >
      <span class="icslab-theme-icon" aria-hidden="true">{{ opt.icon }}</span>
      <span class="icslab-theme-label">{{ label(opt) }}</span>
    </button>
  </div>
</template>

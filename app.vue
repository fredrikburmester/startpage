<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useLinksStore } from '@/stores/links'
import { themeChange } from 'theme-change'
import { useSettingsStore } from './stores/settings'

const store = useLinksStore()
const settingsStore = useSettingsStore()

onMounted(() => {
  themeChange(false)
})
</script>

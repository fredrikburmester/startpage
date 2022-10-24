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

const store = useLinksStore()

onMounted(() => {
  themeChange(false)
})

console.log(store.links)
</script>

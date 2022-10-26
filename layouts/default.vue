<template>
  <div ref="main" class="relative min-h-screen">
    <div class="z-10 md:container md:mx-auto px-4 md:px-0 m-0">
      <slot />
    </div>
    <AddLinkButtonModal />
    <SettingsModal />
    <ThemeModal />
    <EditButton />
  </div>
</template>

<script setup lang="ts">
import { useSettingsStore } from '~~/stores/settings';
const settingsStore = useSettingsStore()
const background = computed(() => settingsStore.getBackgroundImage)
const main = ref(null)

onMounted(() => {
  console.log(background.value)
  main.value.style.backgroundImage = `url(${background.value})`
  main.value.style.backgroundSize = 'cover'
})

watch(background, (newVal) => {
  main.value.style.backgroundImage = `url(${newVal})`
  main.value.style.backgroundSize = 'cover'
})
</script>
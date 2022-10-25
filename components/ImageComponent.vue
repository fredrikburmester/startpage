<template>
  <div class="card max-h-[calc(30vh)] md:max-h-[calc(80vh)] bg-base-100 shadow-xl image-full">
    <figure><img :src="image" alt="image" /></figure>
  </div>
</template>
<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings'

const store = useSettingsStore()
const image = ref<string>(store.getImageFullURL)

  watch(
  () => store.image,
  (img) => {
    image.value = img
  }
)
</script>
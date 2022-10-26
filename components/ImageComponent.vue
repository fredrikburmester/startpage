<template>
  <div class="card max-h-[calc(30vh)] md:max-h-[calc(80vh)] bg-base-100 shadow-xl image-full">
    <figure v-show="!loading"><img @load="loading = false" :src="image" alt="image" /></figure>
  </div>
</template>
<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings'

const store = useSettingsStore()
const image = ref<string>(store.getImageFullURL)
const loading = ref<boolean>(true)

watch(
  () => store.image,
  (img) => {
    image.value = img
  }
)
</script>

<style>
/* skeleton animation */
@keyframes pulse {
  0% {
    background-color: #ffffff64;
  }
  50% {
    background-color: #8181817f;
  }
  100% {
    background-color: #ffffff64;
  }
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
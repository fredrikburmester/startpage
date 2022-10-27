<template>
  <div class="card max-h-[calc(30vh)] md:max-h-[calc(80vh)] bg-base-100 shadow-xl image-full">
    <figure v-show="!loading"><img @load="loading = false" :src="image" alt="image" /></figure>
  </div>
</template>
<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings'

const images = ['https://mj-gallery.com/2812b085-5451-4cfe-a511-b797a8adb6fb/grid_0.png',
'https://mj-gallery.com/0edf827b-e308-4521-ba93-90e498cfe48b/grid_0.png',
'https://mj-gallery.com/271d74ce-349e-4865-a18e-0438845a0bb4/grid_0.png',
'https://mj-gallery.com/b79206ba-8edf-4dec-bd47-e7fb3bc0d368/grid_0.png',
'https://mj-gallery.com/7bf4774a-985d-4244-a46d-d05c859b6920/grid_0.png',
'https://mj-gallery.com/62308fbb-5274-421d-b7ae-84b89e249428/grid_0.png',
'https://mj-gallery.com/62d7898a-0d04-41b2-8091-f08576a643f8/grid_0.png']

const store = useSettingsStore()

const getImageOrRandom = () => {
  if (store.image !== '') {
    return store.image
  } else {
    return images[Math.floor(Math.random() * images.length)]
  }
}

const image = ref<string>(getImageOrRandom())
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
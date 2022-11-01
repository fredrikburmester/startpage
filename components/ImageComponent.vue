<template>
  <div style="max-height: 100%;" class="rounded-3xl max-h-[calc(30vh)] flex justify-items-center items-center">
    <img class="w-100 h-100 object-contain rounded-3xl" :style="`opacity: ${imageOpacity / 100}`" @load="loading = false" :src="image" alt="image" />
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
'https://mj-gallery.com/62d7898a-0d04-41b2-8091-f08576a643f8/grid_0.png',
'https://mj-gallery.com/83283aaa-44db-4f5c-b5e9-8a5aa5559a9d/grid_0.png',
'https://mj-gallery.com/f7b965ff-71eb-4e75-b788-1651c20cdcd5/grid_0.png',
'https://mj-gallery.com/c4bd6b31-5824-4f86-a6a1-9c4408f7c091/grid_0.png',
'https://mj-gallery.com/c30016e1-ca57-4b19-840b-21b5e9c05a83/grid_0.png',
'https://mj-gallery.com/b2f7ecab-725a-476b-9e6d-d08f535f0d4e/grid_0.png',
'https://mj-gallery.com/47ef2540-f911-41f6-8a68-75b49be79a2d/grid_0.png',
'https://mj-gallery.com/f2e9fd82-a879-4c63-8827-a0e316d669f9/grid_0.png',
'https://mj-gallery.com/473c2fdd-8207-4ddb-bd20-ffa0833cdca2/grid_0.png',
'https://mj-gallery.com/8009e2a6-062a-4057-bbf6-bdcb0508d558/grid_0.png',
'https://mj-gallery.com/b0129365-3bac-453b-a198-9bc3ce176b98/grid_0.png',
'https://mj-gallery.com/0c6b3646-c95e-4e10-b486-3276c2cd0a7b/grid_0.png',
]

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
const imageOpacity = ref(store.getImageOpacity)

watch(
  () => store.image,
  () => {
    image.value = getImageOrRandom()
  }
)

watch(
  () => store.imageOpacity,
  () => {
    imageOpacity.value = store.getImageOpacity
  }
)

</script>
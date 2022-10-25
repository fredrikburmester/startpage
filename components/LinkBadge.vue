<template>
  <nuxt-link :to="url" v-if="!edit">
    <div class="badge bg-primary p-4 m-1 text-center border-0 text-white cursor-pointer" :style="style">
        {{ name }}
    </div>
  </nuxt-link>
  <div v-show="edit">
    <div class="badge bg-primary py-4 pl-4 pr-0 m-1 text-center border-0 text-white cursor-pointer" :style="style">
        {{ name }}
      <button @click="removeSelf(name)" class="ml-4 btn btn-circle  border-0 min-h-6 h-7 w-7 transition-all mr-1">x</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings'
import { useLinksStore } from '@/stores/links'

const linkStore = useLinksStore()
const settingStore = useSettingsStore()

const { name, url, color } = defineProps<{
  name: string
  url?: string
  color?: string
}>()

const classes = computed(() => {
  return {
    'badge p-4 m-1 text-center border-0 text-white cursor-pointer': true,
    'bg-primary': color === '' || color === undefined || color === null,
  }
})

const style = computed(() => {
  if(color !== '' && color !== undefined && color !== null) {
    return {
      backgroundColor: color
    }
  }
  return {
    
  }
})

const edit = ref(false)

watch(
  () => settingStore.edit,
  (newEdit: boolean) => {
    edit.value = newEdit
  }
)

const removeSelf = (name: string) => {
  linkStore.removeLinkByName(name)
}

</script>
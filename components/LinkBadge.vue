<template>
  <nuxt-link :to="url" v-if="!edit">
    <div class="flex items-center group badge bg-primary p-4 m-1 text-center border-0 text-white cursor-pointer hover:opacity-80 overflow-hidden" :style="style">
      {{ name }}
      <span class="hidden group-hover:flex ml-2 items-center">
        <Icon name="ei:external-link" />
      </span>
    </div>
  </nuxt-link>
  <div v-show="edit">
    <div class="badge bg-primary py-4 pl-4 pr-0 m-1 text-center border-0 text-white cursor-pointer" :style="style">
        {{ name }}
      <button @click="removeSelf(name)" class="ml-4 btn btn-circle  border-0 min-h-6 h-7 w-7 transition-all mr-1">
        <Icon name="material-symbols:close" />
      </button>
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
    console.log(newEdit)
    edit.value = newEdit
  }
)

const removeSelf = (name: string) => {
  linkStore.removeLinkByName(name)
}

</script>
<template>
  <nuxt-link :to="link.url" v-if="!edit" @contextmenu="openContext($event)">
    <div class="whitespace-nowrap flex items-center group badge bg-primary p-4 m-1 text-center border-0 text-white cursor-pointer hover:opacity-80 overflow-hidden" :style="style">
      {{ link.name }}
      <span class="hidden group-hover:flex ml-2 items-center">
        <Icon name="ei:external-link" />
      </span>
    </div>
  </nuxt-link>
  <div v-show="edit">
    <div class="whitespace-nowrap badge bg-primary py-4 pl-4 pr-0 m-1 text-center border-0 text-white cursor-pointer" :style="style">
        {{ link.name }}
      <button @click="editSelf = true" class="ml-4 btn btn-circle  border-0 min-h-6 h-7 w-7 transition-all mr-1">
        <Icon name="material-symbols:edit-note"  />
      </button>
      <button @click="removeSelf(link.name)" class="ml-4 btn btn-circle  border-0 min-h-6 h-7 w-7 transition-all mr-1">
        <Icon name="material-symbols:close" />
      </button>
    </div>
  </div>
  <EditLinkModal v-if="editSelf" :link="link" :onClose="closeAndEdit" />
  <ContextMenu v-if="contextOpen" :x="posX" :y="posY" @close="contextOpen = false" :actions="actions"/>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings'
import { useLinksStore } from '@/stores/links'
import { ContextAction, Link } from '~~/types/types'
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()

const posX = ref(0)
const posY = ref(0)
const linkStore = useLinksStore()
const settingStore = useSettingsStore()
const editSelf = ref(false)
const edit = ref(false)
const contextOpen = ref(false)

const actions: ContextAction[] = [
  {
    name: 'Edit',
    fn: () => editSelf.value = true
  },
  {
    name: 'Remove',
    fn: () => linkStore.removeLinkByName(link.name)
  }
]

const closeAndEdit = () => {
  editSelf.value = false
}

const openContext = (e: MouseEvent) => {
  e.preventDefault()
  posX.value = x.value
  posY.value = y.value
  contextOpen.value = true
}

const { link } = defineProps<{
  link: Link
}>()

const style = computed(() => {
  if(link.color !== '' && link.color !== undefined && link.color !== null) {
    return {
      backgroundColor: link.color
    }
  }
  return {
    
  }
})

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
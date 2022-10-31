<template>
  <ModalComponent :open="true" confirm="Save" cancel="Cancel" :onClose="onClose" :onConfirm="saveLink">
    <template v-slot:title>
      Edit <span class="font-bold">{{ link.name }}</span>
    </template>
    <template v-slot:form>
      <label class="label">
        <span class="label-text">Link name</span>
        </label>
        <input v-model="name" type="text" placeholder="(ex. Github)" class="input input-bordered w-full max-w-xs" >
        <label class="label">
          <span class="label-text">Link url</span>
        </label>
        <input v-model="url"  type="text" placeholder="(ex. https://github.com)" class="input input-bordered w-full max-w-xs" >
        <label class="label">
          <span class="label-text">Group</span>
        </label>
        <input v-model="group"  type="text" placeholder="(ex. Productivity)" class="input input-bordered w-full max-w-xs" >
        <div class="mt-2 flex flex-row flex-wrap">
          <span v-for="g in groups" class="badge cursor-pointer mr-1 mb-1" @click="group = g">{{g}}</span>
        </div>
        <label class="label">
          <span class="label-text">Color</span>
        </label>
        <input v-model="color" type="text" placeholder="(ex. #FFF000)" class="input input-bordered w-full max-w-xs" >

        <div class="mt-2 flex flex-row flex-wrap">
          <span class="badge cursor-pointer mr-1 mb-1" @click="color = ''">Follow theme</span>
          <span v-for="c in colors" class="badge cursor-pointer mr-1 mb-1" :style="`background-color: ${c.color}`" @click="color = c.color" >{{ c.name }}</span>
        </div>
    </template>
  </ModalComponent>
</template>

<script lang="ts" setup>
import { useLinksStore } from '@/stores/links'
import { Link } from '~~/types/types'

const groups = ['Productivity', 'School', 'Work', 'Home', 'Entertainment', 'Other']
const colors = [
  {
    name: 'Red',
    color: '#dc2626'
  },
  {
    name: 'Blue',
    color: '#2563eb'
  },
  {
    name: 'Green',
    color: '#059669'
  },
  {
    name: 'Yellow',
    color: '#fbbf24'
  },
  {
    name: 'Purple',
    color: '#8b5cf6'
  },
  {
    name: 'Pink',
    color: '#ec4899'
  },
  {
    name: 'Gray',
    color: '#6b7280'
  },
  {
    name: 'Black',
    color: '#111827'
  }
]

const { link, onClose } = defineProps<{
  link: Link
  onClose: () => void
}>()

const store = useLinksStore()
const name = ref<string>(link.name)
const url = ref<string>(link.url)
const color = ref<string>(link.color)
const group = ref<string>(link.group)

const saveLink = () => {
  const existingLink = store.links.find((l: Link) => l.name === link.name)
  if(existingLink) {
    const l: Link = {
      'name': name.value,
      'url': url.value,
      'color': color.value,
      'group': group.value !== '' ? group.value : 'Other'
    }
    store.editLink(link, l)
  } 
  onClose()
}
</script>
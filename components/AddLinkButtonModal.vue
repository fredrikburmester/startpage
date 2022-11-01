<template>
  <label for="my-modal-6" class="btn btn-circle fixed bottom-0 right-0 m-6">+</label>

  <Teleport to="body">
    <input type="checkbox" id="my-modal-6" class="modal-toggle" @click="disableEdit"/>
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-3xl">Add a badge</h3>
        <p class="">Here you can add a new button with any link, text and color you want. Make sure the link starts with
            <code class="bg-primary rounded p-1 text-sm">https://</code> and that the color is a hex code. You can change a badge after the fact by right clicking it.
        </p>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Badge name</span>
          </label>
          <input v-model="name" type="text" placeholder="(ex. Github)" class="input input-bordered w-full max-w-xs" >
          <label class="label">
            <span class="label-text">URL</span>
          </label>
          <input v-model="url"  type="text" placeholder="(ex. https://github.com)" class="input input-bordered w-full max-w-xs" >
          <label class="label">
            <span class="label-text">Category</span>
          </label>
          <input v-model="group"  type="text" placeholder="(ex. Productivity)" class="input input-bordered w-full max-w-xs" >
          <div class="mt-2 flex flex-row flex-wrap">
            <span v-for="g in groups" class="badge cursor-pointer mr-1 mb-1 border-none" @click="group = g">{{g}}</span>
          </div>
          <label class="label">
            <span class="label-text">Color</span>
          </label>
          <input v-model="color" type="text" placeholder="(ex. #FFF000)" class="input input-bordered w-full max-w-xs" >

          <div class="mt-2 flex flex-row flex-wrap">
            <span class="badge cursor-pointer mr-1 mb-1" @click="color = ''">Follow theme</span>
            <span v-for="c in colors" class="badge cursor-pointer mr-2 mb-2 border-none text-white" :style="`background-color: ${c.color}`" @click="color = c.color" >{{ c.name }}</span>
          </div>

        </div>
        <div class="modal-action">
          <label for="my-modal-6" class="btn">Cancel</label>
          <label for="my-modal-6" class="btn btn-secondary" @click="addLink">Add</label>
        </div>
      </div>
    </div>
  </Teleport>

</template>
<script lang="ts" setup>
import { useLinksStore } from '@/stores/links'
import { useAlertStore } from '~~/stores/alert'
import { useSettingsStore } from '~~/stores/settings'
import { Link } from '~~/types/types'

const groups = ['Productivity', 'School', 'Work', 'Home', 'Entertainment', 'Server', 'Training', 'Other']
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
    name:'Blue',
    color: '#166088'
  },
  {
    name: 'Blue',
    color: '#161925'
  },
  {
    name: 'Green',
    color: '#059669'
  },
  {
    name: 'Orange',
    color: '#F6821E'
  },
  {
    name: 'Purple',
    color: '#8b5cf6'
  },
  {
    name: 'Purple',
    color: '#7D83FF'
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
  },
  {
    name: 'Black',
    color: '#000000'
  },
  {
    name: 'Navy Blue',
    color: '#0D3B66'
  },
  {
    name: 'Lime',
    color: '#31D843'
  },
  {
    name: 'Brown',
    color: '#AF7A6D'
  },
  {
    name: 'Brown',
    color: '#653239'
  },
  {
    name: 'Blue Gray',
    color: '#4F6D7A'
  },
  


]

const store = useLinksStore()
const settingsStore = useSettingsStore()

const name = ref<string>('')
const url = ref<string>('')
const color = ref<string>('')
const group = ref<string>('')

const disableEdit = () => {
  settingsStore.setEdit(false)
}

const alertStore = useAlertStore()

const addLink = () => {
  // check if link with same name already exist
  const link = store.links.find((l: Link) => l.name === name.value)
  if(link) {
    alertStore.setAlert('A link with the same name already exist', 'error')
    return
  }

  const l: Link = {
    'name': name.value,
    'url': url.value,
    'color': color.value,
    'group': group.value !== '' ? group.value : 'Other'
  }
  store.addLink(l)
}
</script>
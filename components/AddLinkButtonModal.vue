<template>
  <label for="my-modal-6" class="btn btn-circle fixed bottom-0 right-0 m-6">+</label>

  <Teleport to="body">
    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Add a link button</h3>
        <p class="py-4">Here you can add a new button with any link, text and color you want. Make sure the link starts with
            <code class="bg-primary rounded p-1 text-sm">https://</code> and that the color is a hex code.
        </p>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Link name</span>
          </label>
          <input v-model="name" type="text" placeholder="(ex. Github)" class="input input-bordered w-full max-w-xs" />
          <label class="label">
            <span class="label-text">Link url</span>
          </label>
          <input v-model="url"  type="text" placeholder="(ex. https://github.com)" class="input input-bordered w-full max-w-xs" />
          <label class="label">
            <span class="label-text">Color</span>
          </label>
          <input v-model="color" type="text" placeholder="(ex. #FFF000)" class="input input-bordered w-full max-w-xs" />
          <div class="mt-2 flex flex-row flex-wrap space-x-1">
            <span class="badge cursor-pointer" @click="color = ''">Follow theme</span>
            <span class="badge cursor-pointer bg-red-600" @click="color = '#dc2626'">Red</span>
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

const store = useLinksStore()

const name = ref<string>('')
const url = ref<string>('')
const color = ref<string>('')

interface Link {
  name: string
  url: string
  color: string
}

const addLink = () => {
  const newLink = {
    name: name.value,
    url: url.value,
    color: color.value
  } as Link
  store.addLink(newLink)
}
</script>
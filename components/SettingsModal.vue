<template>
  <label for="settings-modal" class="btn btn-circle fixed bottom-0 left-0 m-6">
    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  </label>

  <Teleport to="body">
    <input type="checkbox" id="settings-modal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h1 class="font-bold text-2xl">Settings</h1>
        <p class="py-4">Change the settings!</p>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Image</span>
          </label>
          <div class="flex flex-row space-x-2">
            <input v-model="image" type="text" placeholder="" class="input input-bordered w-full max-w-xs" />
            <button class="btn" @click="restoreDefaultImage">Reset</button>
          </div>
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <div class="flex flex-row space-x-2">
            <input v-model="username" type="text" placeholder="(ex. Cagemaster)" class="input input-bordered w-full max-w-xs" />
          </div>
        </div>
        <div class="modal-action">
          <label for="settings-modal" class="btn">Cancel</label>
          <label for="settings-modal" class="btn btn-secondary" @click="save">Save</label>
        </div>
      </div>
    </div>
  </Teleport>

</template>
<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings'
const store = useSettingsStore()

const image = ref<string>(store.getImage)
const username = ref<string>()

const save = () => {
  store.setImage(image.value)
  store.setUsername(username.value)
}

const restoreDefaultImage = () => {
  image.value = store.defaultImage
}

</script>
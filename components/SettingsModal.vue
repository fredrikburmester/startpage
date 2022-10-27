<template>
  <label for="settings-modal" class="btn btn-circle fixed bottom-0 left-0 m-6" @click="disableEdit">
    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  </label>

  <Teleport to="body">
    <input type="checkbox" id="settings-modal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h1 class="font-bold text-2xl">Settings</h1>
        <p class="py-4">Change the settings!</p>
        <h1 class="font-bold text-xl my-2">Image</h1>
        <!-- <div class="form-control w-full">
          <div class="flex flex-row space-x-2">
            <input v-model="image" type="text" placeholder="" class="input input-bordered w-full max-w-xs" />
            <button class="btn" @click="restoreDefaultImage">Reset</button>
          </div>
        </div> -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">Image link</span>
          </label>
          <label class="input-group">
            <span>https://</span>
            <input v-model="image" type="text" placeholder="image.com/image" class="flex-1 input input-bordered" />
            <button class="btn" @click="restoreDefaultImage">Reset</button>
          </label>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Background image link</span>
          </label>
          <label class="input-group">
            <input v-model="backgroundImage" type="text" placeholder="(ex. https://image.com/image)" class="flex-1 input input-bordered" />
            <button class="btn" @click="backgroundImage = ''">Reset</button>
          </label>
        </div>
        <h1 class="font-bold text-xl my-2">Name</h1>
        <div class="form-control w-full">
          <div class="flex flex-row space-x-2">
            <input v-model="username" type="text" placeholder="(ex. Cagemaster)" class="input input-bordered w-full max-w-xs" />
          </div>
        </div>
        <h1 class="font-bold text-xl my-2">More settings</h1>
        <div class="form-control">
          <label class="label cursor-pointer w-48">
            <span class="label-text">Show search bar</span> 
            <input v-model="searchbar" type="checkbox" class="checkbox checkbox-primary" />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer w-48">
            <span class="label-text">Show date</span> 
            <input v-model="showDate" type="checkbox" class="checkbox checkbox-primary" />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer w-48">
            <span class="label-text">Show clock</span> 
            <input v-model="showClock" type="checkbox" class="checkbox checkbox-primary" />
          </label>
        </div>
        <div class="modal-action">
          <label for="settings-modal" class="btn mr-auto bg-red-900 text-white" @click="clearAllData">Clear all data</label>
          <label for="settings-modal" class="btn">Cancel</label>
          <label for="settings-modal" class="btn btn-secondary" @click="save">Save</label>
        </div>
      </div>
    </div>
  </Teleport>

</template>
<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings'
import { useLinksStore } from '~~/stores/links'
const store = useSettingsStore()
const linksStore = useLinksStore()

const image = ref<string>(store.getImageWithoutProtocol)
const username = ref<string>()
const searchbar = ref(store.searchbar)
const showDate = ref(store.showDate)
const showClock = ref(store.showClock)
const backgroundImage = ref(store.backgroundImage)

const save = () => {
  if (image.value.includes('http://') || image.value.includes('https://')) {
    store.setImage(image.value)
  } else {
    store.setImage(`https://${image.value}`)
  }
  store.setUsername(username.value)
  store.setSearchbar(searchbar.value)
  store.setShowDate(showDate.value)
  store.setShowClock(showClock.value)
  store.setBackgroundImage(backgroundImage.value)
}

const disableEdit = () => {
  store.setEdit(false)
}

const restoreDefaultImage = () => {
  image.value = store.getDefaultImageWithoutProtocol
}

const clearAllData = () => {
  console.log('clearing all data')
  store.clearAllData()
  linksStore.clearAllData()

  // reload window
  window.location.reload()
}

</script>
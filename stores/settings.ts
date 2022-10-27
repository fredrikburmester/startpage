
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'



export const useSettingsStore = defineStore('settings', {
  state: () => ({
      image: useStorage('image', ''),
      edit: false,
      username: useStorage('username', ''),
      searchbar: useStorage('searchbar', true),
      showDate: useStorage('showDate', true),
      showClock: useStorage('showClock', true),
      backgroundImage: useStorage('backgroundImage', ''),
  }),
  actions: {
    setImage(url: string) {
      this.image = url
    },
    setBackgroundImage(url: string) {
      this.backgroundImage = url
    },
    setEdit(edit: boolean) {
      this.edit = edit
    },
    toggleEdit() {
      this.edit = !this.edit
    },
    setUsername(username: string) {
      this.username = username
    },
    setSearchbar(val: boolean) {
      this.searchbar = val
    },
    setShowDate(val: boolean) {
      this.showDate = val
    },
    setShowClock(val: boolean) {
      this.showClock = val
    },
    clearAllData() {
      this.image = this.defaultImage
      this.username = ''
      this.searchbar = true
      this.showDate = true
      this.showClock = true
      this.backgroundImage = ''
    }
  },
  getters: {
    getImage() {
      return this.image
    },
    getBackgroundImage() {
      return this.backgroundImage
    }
  }
})

import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
      defaultImage: 'https://regmedia.co.uk/2022/07/29/midjourney_all_this_useless_beauty.jpg',
      image: useStorage('image', ''),
      edit: false,
      username: useStorage('username', ''),
      searchbar: useStorage('searchbar', true),
      showDate: useStorage('showDate', true),
      showClock: useStorage('showClock', true),
  }),
  actions: {
    setImage(url: string) {
      this.image = url
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
    }
  },
  getters: {
    getImage() {
      if(!this.image) return this.defaultImage
      return this.image
    }
  }
})
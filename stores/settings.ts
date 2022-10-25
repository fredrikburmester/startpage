
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
      defaultImage: 'https://regmedia.co.uk/2022/07/29/midjourney_all_this_useless_beauty.jpg',
      image: useStorage('image', ''),
      edit: false,
      username: useStorage('username', ''),
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
    }
  },
  getters: {
    getImage() {
      if(!this.image) return this.defaultImage
      return this.image
    }
  }
})
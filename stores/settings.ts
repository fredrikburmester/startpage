
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
      defaultImage: 'https://placeimg.com/400/225/arch',
      image: useStorage('image', ''),
      edit: false
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
    }
  },
  getters: {
    getImage() {
      if(!this.image) return this.defaultImage
      return this.image
    }
  }
})
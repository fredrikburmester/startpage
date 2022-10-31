
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
      imageOpacity: useStorage('imageOpacity', 50),
      plexToken: useStorage('plexToken', ''),
      plexURL: useStorage('plexURL', ''),
      plexUpdateInterval: useStorage('plexUpdateInterval', 30),
  }),
  actions: {
    setImage(l: string) {
      this.image = l
    },
    setPlexURL(u: string) {
      this.plexURL = u
    },
    setPlexToken(t: string) {
      this.plexToken = t
    },
    setImageOpacity(p: number) {
      this.imageOpacity = p
    },
    setBackgroundImage(l: string) {
      this.backgroundImage = l
    },
    setEdit(v: boolean) {
      this.edit = v
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
    setPlexUpdateInterval(val: number) {
      this.plexUpdateInterval = val
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
    },
    getImageOpacity() {
      return this.imageOpacity
    }
  }
})
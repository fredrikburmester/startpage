
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
      lat: useStorage('lat', 0),
      lon: useStorage('lon', 0),
      token: useStorage('token', ''),
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setLat(lat: number) {
      this.lat = lat
    },
    setLon(lon: number) {
      this.lon = lon
    }
  },
})
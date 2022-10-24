import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { Link } from '~~/types/types'

export const useLinksStore = defineStore('links', {
  state: () => ({
      links: useStorage('links', [{
        name: 'Nuxt',
        url: 'https://nuxtjs.org',
      }] as Link[]),
  }),
  actions: {
    addLink(link: Link) {
      this.links.push(link)
    },
    removeLinkByName(name: string) {
      this.links = this.links.filter((l: Link) => l.name !== name)
    }
  },
})
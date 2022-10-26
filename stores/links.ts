import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { Link } from '~~/types/types'

export const useLinksStore = defineStore('links', {
  state: () => ({
      defaultLinks: [
        {
          name: 'Nuxt',
          url: 'https://nuxtjs.org',
          group: 'Programming',
          color: '#059669'
        },
        {
          name: 'daisyUI',
          url: 'https://daisyui.com/',
          group: 'Programming',
        },
        {
          name: 'YouTube',
          url: 'https://youtube.com',
          group: 'Entertainment',
          color: '#FF0000'
        },
        {
          name: 'Reddit',
          url: 'https://reddit.com',
          group: 'Entertainment',
          color: '#FF4500'
        }
      ],
      links: useStorage('links', [
        {
          name: 'Nuxt',
          url: 'https://nuxtjs.org',
          group: 'Programming',
          color: '#059669'
        },
        {
          name: 'daisyUI',
          url: 'https://daisyui.com/',
          group: 'Programming',
        },
        {
          name: 'YouTube',
          url: 'https://youtube.com',
          group: 'Entertainment',
          color: '#FF0000'
        },
        {
          name: 'Reddit',
          url: 'https://reddit.com',
          group: 'Entertainment',
          color: '#FF4500'
        }
      ] as Link[]),
  }),
  actions: {
    addLink(link: Link) {
      this.links.push(link)
    },
    removeLinkByName(name: string) {
      this.links = this.links.filter((l: Link) => l.name !== name)
    },
    clearAllData() {
      this.links = this.defaultLinks
    }
  },
})
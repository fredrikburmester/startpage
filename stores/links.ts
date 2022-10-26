import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { Link } from '~~/types/types'

export const useLinksStore = defineStore('links', {
  state: () => ({
      count: 4,
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
      this.count += 1
    },
    removeLinkByName(name: string) {
      this.links = this.links.filter((l: Link) => l.name !== name)
      this.count -= 1
    },
    clearAllData() {
      this.links = this.defaultLinks
      this.count = 4
    }
  },
  getters: {
    getLinks() {
      return this.links
    },
    getUniqueGroups() {
      return [...new Set(this.links.map((l: Link) => l.group))]
    }
  }
})
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { Link } from '~~/types/types'

export const useLinksStore = defineStore('links', {
  state: () => ({
      linkChanged: 0,
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
      this.linkChanged += 1
    },
    removeLinkByName(name: string) {
      this.links = this.links.filter((l: Link) => l.name !== name)
      this.linkChanged += 1
    },
    clearAllData() {
      this.links = this.defaultLinks
      this.linkChanged = 0
    },
    editLink(ol: Link, nl: Link) {
      const index = this.links.findIndex((link: Link) => link.name === ol.name)
      this.links[index] = nl
      this.linkChanged += 1
    }
  },
  getters: {
    getLinks() {
      return this.links
    },
    getUniqueGroups(): string[] {
      return [...new Set(this.links.map((l: Link) => l.group))] as string[]
    }
  }
})
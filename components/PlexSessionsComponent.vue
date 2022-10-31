<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="bg-neutral rounded-xl p-4 flex flex-row space-x-4" v-for="s in sessions" :key="s.id" :style="`background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${plexURL + s.art + '?X-Plex-Token=' + plexToken}); background-size: cover;`">
      <img src="~/assets/plex.jpg" alt="" class="w-12 h-12">
      <div class="flex flex-col text-white">
        <span class="text-xs">{{s.artist}}</span>
        <span class="font-bold">{{s.title}}</span>
        <span class="text-xs opacity-50">{{s.type}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>import { useSettingsStore } from '~~/stores/settings'
import { Session } from '~~/types/types'

const settingsStore = useSettingsStore()

const plexURL = ref(computed(() => settingsStore.plexURL))
const plexToken = ref(computed(() => settingsStore.plexToken))
const updateInterval = ref(computed(() => settingsStore.plexUpdateInterval * 1000))
const totalSessions = ref<number>(0)
const sessions = ref<Session[]>([])
const sessionsURL = ref('/status/sessions')

const getPlexData = async () => {
  const { data } = await useFetch(plexURL.value + sessionsURL.value + '?X-Plex-Token=' + plexToken.value, {
    initialCache: false,
  })

  if(!window.DOMParser || !data) return

  const parser = new DOMParser();
  // @ts-ignore 
  const xmlDoc = parser.parseFromString(data.value, "text/xml");
  const tracks = xmlDoc.getElementsByTagName("Track").length
  const videos = xmlDoc.getElementsByTagName("Video").length

  totalSessions.value = tracks + videos

  // Empty sessions array
  sessions.value = []
  let index = 0

  for (let i = 0; i < tracks; i++) {
    const artist = xmlDoc.getElementsByTagName("Track")[i].getAttribute('grandparentTitle')
    const title = xmlDoc.getElementsByTagName("Track")[i].getAttribute('parentTitle')
    const type = xmlDoc.getElementsByTagName("Track")[i].getAttribute('librarySectionTitle')
    const art = xmlDoc.getElementsByTagName("Track")[i].getAttribute('parentThumb')
    sessions.value.push({
      id: index, 
      artist: artist, 
      title: title, 
      type: type, 
      art: art})
    index++
  }

  for (let j = 0; j < videos; j++) {
    const name = xmlDoc.getElementsByTagName("Video")[j].getAttribute('grandparentTitle')
    const title = xmlDoc.getElementsByTagName("Video")[j].getAttribute('title')
    const type = xmlDoc.getElementsByTagName("Video")[j].getAttribute('librarySectionTitle')
    const art = xmlDoc.getElementsByTagName("Video")[j].getAttribute('art')
    sessions.value.push({
      id: index,
      artist: name || '', 
      title: title, 
      type: type, 
      art: art
    })
    index++
  }
}

onMounted(() => {
  getPlexData()
  setInterval(() => {
    getPlexData()
  }, updateInterval.value)
})
</script>
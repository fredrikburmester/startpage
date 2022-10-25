<template>
  <div class="grid pt-24 md:pt-0 md:place-items-center min-h-screen">
    <div class="flex flex-col">
      <SearchBar v-if="settingsStore.searchbar" />
      <div class="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 space-x-0 md:space-x-12">
        <ImageComponent />
        <div class="flex flex-col space-y-4 min-w-[calc(50%)] items-center md:items-start">
          <h1 class="font-bold text-4xl">{{ useGreetingText() }} {{ username }}</h1>
          <DateComponent v-if="settingsStore.showDate" />
          <ClockComponent v-if="settingsStore.showClock" />
          <div class="flex flex-row flex-wrap">
            <LinkBadge v-for="l in store.links" :key="l.name" :name="l.name" :url="l.url" :color="l.color" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useLinksStore } from '@/stores/links'
import { useSettingsStore } from '~~/stores/settings';
const store = useLinksStore()
const settingsStore = useSettingsStore()

const username = ref<string>(settingsStore.username)

watch(() => settingsStore.username, (name) => {
  username.value = name
})
watch(() => settingsStore.searchbar, () => {})
watch(() => settingsStore.showDate, () => {})
watch(() => settingsStore.showClock, () => {})
</script>
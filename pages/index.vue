<template>
  <div class="flex flex-col place-items-start md:place-items-center md:h-screen justify-around mt-20 md:mt-0 md:px-24 mb-12 md:mb-0 max-w-scren overflow-clip">
    <div class="flex flex-col">
      <SearchBar v-if="settingsStore.searchbar" />
      <div class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 items-center gap-2 md:gap-16">
        <ImageComponent />
        <div class="flex flex-col space-y-4 min-w-[calc(50%)] items-start ">
          <h1 class="font-bold text-4xl">{{ useGreetingText() }} {{ username }}</h1>
          <DateComponent v-if="settingsStore.showDate" />
          <ClockComponent v-if="settingsStore.showClock" />
          <div class="flex flex-row">
            <div v-for="c in uniqueCategories" class="flex flex-col flex-wrap justify-items-start mr-4" :key="c">
              <h1 class="text-xl p-1">{{ c }}</h1>
              <LinkBadge v-for="l in links.filter(l => l.group == c)" :key="l.name" :name="l.name" :url="l.url" :color="l.color" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLinksStore } from '@/stores/links'
import { useSettingsStore } from '~~/stores/settings';
import { Link } from '~~/types/types'
const store = useLinksStore()
const settingsStore = useSettingsStore()

const uniqueCategories = ref(store.getUniqueGroups)
const links = ref<Link[]>(store.getLinks)

const username = ref<string>(settingsStore.username)

watch(() => settingsStore.username, (name) => {
  username.value = name
})
watch(() => settingsStore.searchbar, () => {})
watch(() => settingsStore.showDate, () => {})
watch(() => settingsStore.showClock, () => {})
watch(() => store.count, () => {
  console.log(store.getLinks)
  uniqueCategories.value = store.getUniqueGroups
  links.value = store.getLinks
})
</script>
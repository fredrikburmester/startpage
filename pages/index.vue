<template>
  <div class="grid grid-cols-1 md:place-items-center justify-around md:px-24 max-w-scren h-screen">
    <div class="grid grid-cols-1 md:grid-cols-6 md:grid-rows-1 items-center gap-2 md:gap-16 py-16 xl:py-24 max-h-screen">
      <ImageComponent class="overflow-clip h-[calc(40vh)] md:h-full md:col-span-2"/>
      <div class="flex flex-col space-y-2 min-w-[calc(50%)] items-start mt-4 md:mt-0 justify-between md:col-span-4 self-start">
        <WeatherComponent />
        <SearchBar v-if="showSearchBar" />
        <h1 class="font-bold text-4xl md:text-5xl">{{ useGreetingText() }} {{ username }}</h1>
        <DateComponent v-if="showDate" />
        <ClockComponent v-if="showClock" />
        <div class="flex flex-row overflow-x-scroll" style="max-width: -webkit-fill-available;" :key="store.linkChanged">
          <div v-for="c in uniqueCategories" class="flex flex-col flex-wrap justify-items-start mr-4">
            <h1 class="text-xl p-1">{{ c }}</h1>
            <LinkBadge v-for="l in links.filter(l => l.group == c)" :key="l.name" :link="l" />
          </div>
        </div>
        <PlexSessionsComponent class="mt-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLinksStore } from '@/stores/links'
import { useSettingsStore } from '~~/stores/settings';
const store = useLinksStore()
const settingsStore = useSettingsStore()
const uniqueCategories = ref(computed(() => store.getUniqueGroups))
const username = ref(computed(() => settingsStore.username))
const links = ref(computed(() => store.links))
const showSearchBar = ref(computed(() => settingsStore.searchbar))
const showDate = ref(computed(() => settingsStore.showDate))
const showClock = ref(computed(() => settingsStore.showClock))
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
}
</style>
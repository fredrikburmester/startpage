<template>
  <div class="grid pt-24 md:pt-0 md:place-items-center min-h-screen">
    <div class="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 space-x-0 md:space-x-12">
      <ImageComponent />

      <div class="flex flex-col space-y-4 min-w-[calc(50%)] items-center md:items-start">
        <h1 class="font-bold text-3xl">Welcome!</h1>
        <div class="flex flex-row flex-wrap">
          <LinkBadge v-for="l in store.links" :key="l.name" :name="l.name" :url="l.url" :color="l.color" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLinksStore } from '@/stores/links'

const store = useLinksStore()
</script>
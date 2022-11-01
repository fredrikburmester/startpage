<template>
  <div>
    <div class="flex flex-row justify-items-center items-center capitalize space-x-4">
      <img :src="iconurl" alt="Weather icon">
      <div>
        <p>{{ data.weather[0].description }}</p>
        <p class="opacity-50">{{ data.name }}</p>
      </div>
      <div class="flex flex-row place-content-start items-start">
        <span class="text-2xl">{{ parseInt(data.main.temp) }}</span>
        <span class="text-sm">°C</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from '~~/stores/weather'

const weatherStore = useWeatherStore()

const lat = ref(computed(() => weatherStore.lat))
const lon = ref(computed(() => weatherStore.lon))
const token = ref(computed(() => weatherStore.token))

const url = 'https://api.openweathermap.org/data/2.5/weather?'

const { data } = await useFetch(`${url}lat=${lat.value}&lon=${lon.value}&appid=${token.value}&units=metric`)

const iconurl = ref("http://openweathermap.org/img/w/" + data.value.weather[0].icon + ".png")
</script>
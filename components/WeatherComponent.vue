<template>
  <div v-if="loaded" class="flex flex-row justify-items-center items-center capitalize space-x-4">
    <img :src="iconURL" alt="Weather icon">
    <div>
      <p>{{ weatherData.weather[0].description }}</p>
      <p class="opacity-50">{{ weatherData.name }}</p>
    </div>
    <div class="flex flex-row place-content-start items-start">
      <span class="text-2xl">{{ parseInt(weatherData.main.temp) }}</span>
      <span class="text-sm">°C</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from '~~/stores/weather'
const weatherStore = useWeatherStore()

const token = ref(computed(() => weatherStore.token))
const lat = ref(computed(() => weatherStore.lat))
const lon = ref(computed(() => weatherStore.lon))

const weatherData = ref(null)
const iconURL = ref('')
const loaded = ref(false)

const getWeather = async () => {
  if(token.value) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?'
    const { data } = await useFetch(`${url}lat=${lat.value}&lon=${lon.value}&appid=${token.value}&units=metric`)

    weatherData.value = data.value
    iconURL.value = "http://openweathermap.org/img/w/" + weatherData.value.weather[0].icon + ".png"
    loaded.value = true
  }
}

onMounted(() => {
  getWeather()
})

watch(() => weatherStore.token, () => {
  getWeather()
})
watch(() => weatherStore.lat, () => {
  getWeather()
})
watch(() => weatherStore.lon, () => {
  getWeather()
})

// Update weather every 10 minutes
setInterval(() => {
  getWeather()
}, 600000)



</script>
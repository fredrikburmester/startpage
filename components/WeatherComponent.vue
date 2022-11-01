<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>

const lat = 50
const lon = 50
const apiKey = '02d57bd49bf7245867ff71b112cb32c6'
const part = 'minutely'
const url = 'https://api.openweathermap.org/data/2.5/weather?'

const { data } = await useFetch(`${url}lat=${lat}&lon=${lon}&appid=${apiKey}`)

console.log(data.value)
</script>
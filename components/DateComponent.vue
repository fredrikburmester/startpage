<template>
  <div>
    <p class="text-2xl" ref="dateRef">{{dateString}}</p>
  </div>
</template>

<script lang="ts" setup>
const dateRef = ref(null)

const formatDate = () => {
  const today = new Date()
  const weekDay = today.toLocaleString('en-us', { weekday: 'long' })
  const day = today.getDate()

  return `${weekDay} ${day}`
}

const dateString = computed(() => {
  return formatDate()
})

</script>
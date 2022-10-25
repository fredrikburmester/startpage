<template>
  <span class="countdown font-mono text-6xl p-0">
    <span ref="hours"></span>:
    <span ref="minutes"></span>:
    <span ref="seconds"></span>
  </span>
</template>

<script lang="ts" setup>

const hours = ref(null)
const minutes = ref(null)
const seconds = ref(null)

const updateTime = () => {
  const now = new Date()
  const _hours = now.getHours()
  const _minutes = now.getMinutes()
  const _seconds = now.getSeconds()

  hours.value.style = _hours < 10 ? `--value: 0${_hours}` : `--value: ${_hours.toString()}`
  minutes.value.style = _minutes < 10 ? `--value: 0${_minutes}` : `--value: ${_minutes.toString()}`
  seconds.value.style = _seconds < 10 ? `--value: 0${_seconds}` : `--value: ${_seconds.toString()}`
}

setInterval(updateTime, 500)

</script>
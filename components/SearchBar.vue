<template>
  <div>
    <span class="text-xs ml-6 opacity-30">Search:</span>
    <div class="flex flex-row items-center p-2 rounded-full bg-neutral glass opacity-75 border-0 hover:bg-neutral hover:opacity-60 transition-all">
      <input autofocus ref="search" v-model="input" type="text" class="ml-4 text-start text-neutral-content bg-transparent border-none appearance-none outline-none focus:outline-none text-3xl font-bold w-full" @keyup.enter="searchGoogle">
    </div>
  </div>
</template>

<script lang="ts" setup>
const input = ref<string>('')
const search = ref(null)

const searchGoogle = (e) => {
  // check if button presed is enter
  if (e.keyCode === 13) {
    // check if input is empty
    if (input.value !== '') {
      location.href = `https://google.com/search?q=${input.value}`
    }
  }
}

</script>
<template>
  <button @click="edit" class="btn btn-ghost fixed bottom-0 right-16 m-6">edit</button>
</template>
<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings'
const store = useSettingsStore()

const edit = () => {
  store.toggleEdit()
}
</script>
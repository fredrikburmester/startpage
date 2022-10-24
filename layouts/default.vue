<template>
  <div class="relative min-h-screen">
    <div class="z-10 md:container md:mx-auto px-4 md:px-0 m-0">
      <slot />
    </div>
    <AddLinkButtonModal />
    <SettingsModal />
    <ThemeModal />
    <EditButton />
  </div>
</template>

<script setup lang="ts">
</script>
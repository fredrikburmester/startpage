<template>
  <transition name="slide">
    <div class="alert alert-warning text-black shadow-lg fixed bottom-0 left-0 z-50 m-12 w-96" v-if="alert">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span class="text-black">{{alertMessage}}</span>
      </div>
      <div class="flex-none">
        <button class="btn btn-sm btn-secondary" @click="close">Close</button>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { useAlertStore } from '~~/stores/alert'

const alertStore = useAlertStore()

const alert = ref<boolean>(alertStore.getAlertStatus())
const alertMessage = computed(() => alertStore.alertMessage)
const alertType = computed(() => alertStore.alertType)

onMounted(() => {
  console.log(alertStore.alert)
})

watch(() => alertStore.alert, (newAlert: boolean) => {
  alert.value = newAlert
})

const close = () => {
  alertStore.removeAlert()
}
</script>

<style>
/* vue transition slide */
.slide-enter-active, .slide-leave-active {
  transition: all .5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}

</style>
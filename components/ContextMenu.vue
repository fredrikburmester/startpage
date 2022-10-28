<template>
  <teleport to='body'>
    <div class="fixed w-screen h-screen top-0 left-0"></div>
    <div ref="target" class="bg-transparent rounded-xl shadow fixed top-0 left-0 flex flex-col text-start items-start" :style="pos">
      <button class="[&:nth-child(1)]:rounded-b-none [&:last-child]:rounded-t-none btn btn-sm bg-neutral hover:bg-neutral-focus text-base text-start flex-1 w-32 justify-start rounded-xl" v-for="a in actions" :key="a.name" @click="a.fn">{{ a.name }}</button>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { ContextAction } from '~~/types/types'

const target = ref(null)

const { right, width: elWidth } = useElementBounding(target)
const { width: screenWidth } = useWindowSize()

const props = defineProps<{
  x?: number
  y?: number
  actions: ContextAction[]
}>()

const pos = computed(() => {
  return {
    top: props.y + 'px',
    left: props.x + 'px'
  }
})

onMounted(() => {
  if(right.value > screenWidth.value) {
    target.value.setAttribute('style', `top: ${props.y}px; left: ${props.x - elWidth.value}px`)
  }
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

onClickOutside(target, () => emit('close'))

</script>
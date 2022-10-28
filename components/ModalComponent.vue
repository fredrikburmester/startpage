<template>
  <teleport to='body'>
    <div class="modal modal-bottom sm:modal-middle z-50 fixed top-0 left-0 w-screen h-screen visible opacity-100 pointer-events-auto">
      <div class="modal-box">
        <h3 class="font-bold text-lg">
          <slot name="title"></slot>
        </h3>
        <p class="py-4">
          <slot name="description"></slot>
        </p>
        <div class="form-control w-full max-w-xs">
          <slot name="form"></slot>
        </div>
        <div class="modal-action">
          <label class="btn" @click="onClose">
            {{ cancel}}
          </label>
          <label class="btn btn-secondary" @click="onConfirm">
            {{ confirm }}
          </label>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { useLinksStore } from '@/stores/links'
import { useSettingsStore } from '@/stores/settings'

const props = defineProps<{
  onConfirm?: () => void
  onClose: () => void
  open: boolean
  confirm: string
  cancel: string
}>()
</script>
<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  show: Boolean,
  title: { type: String, default: '' },
  maxWidth: { type: String, default: 'max-w-2xl' },
})
const emit = defineEmits(['close'])

const close = () => emit('close')

const onKey = (e) => {
  if (e.key === 'Escape') close()
}

onMounted(() => document.addEventListener('keydown', onKey))
onUnmounted(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show"
        class="fixed inset-0 z-[999] flex items-center justify-center p-4"
        @mousedown.self="close"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="close" />

        <!-- Panel -->
        <div
          :class="[
            'relative z-10 w-full bg-white dark:bg-[#161b22] rounded-2xl shadow-2xl shadow-black/40',
            'border border-gray-200 dark:border-gray-700',
            maxWidth,
          ]"
          @click.stop
        >
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
            <h3 class="font-bold text-gray-900 dark:text-white text-lg leading-snug pr-4">{{ title }}</h3>
            <button
              @click="close"
              class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                     text-gray-400 hover:text-gray-700 dark:hover:text-white
                     hover:bg-gray-100 dark:hover:bg-gray-800
                     transition-colors duration-150"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Content slot -->
          <div class="p-6">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Backdrop + panel animate together */
.modal-enter-active {
  transition: opacity 0.25s ease;
}
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Panel scale */
.modal-enter-active .relative.z-10 {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
}
.modal-leave-active .relative.z-10 {
  transition: transform 0.15s ease-in, opacity 0.15s ease;
}
.modal-enter-from .relative.z-10 {
  transform: scale(0.92);
  opacity: 0;
}
.modal-leave-to .relative.z-10 {
  transform: scale(0.95);
  opacity: 0;
}
</style>

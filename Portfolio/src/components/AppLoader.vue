<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['done'])

const progress = ref(0)
const visible = ref(true)

onMounted(() => {
  // Animate progress 0 → 100 over ~1.8s
  const duration = 1800
  const interval = 18
  const steps = duration / interval
  let current = 0

  const timer = setInterval(() => {
    current++
    // Ease-out curve: fast at start, slow at end
    progress.value = Math.round(100 * (1 - Math.pow(1 - current / steps, 2.5)))
    if (current >= steps) {
      progress.value = 100
      clearInterval(timer)
      // Brief pause at 100%, then fade out
      setTimeout(() => {
        visible.value = false
        setTimeout(() => emit('done'), 500)
      }, 300)
    }
  }, interval)
})
</script>

<template>
  <Transition name="loader-fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-[9999] flex flex-col items-center justify-center
             bg-gray-50 dark:bg-[#0d1117]
             select-none"
    >
      <!-- Background ambient blobs -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-violet-500/10 blur-3xl animate-pulse" />
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-violet-500/10 to-blue-500/5 blur-3xl animate-pulse" style="animation-delay: 1s;" />
      </div>

      <div class="relative z-10 flex flex-col items-center gap-8 w-full max-w-sm px-8">

        <!-- Logo mark -->
        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-bounce-slow">
          <span class="text-white font-black text-xl font-orbitron">MA</span>
        </div>

        <!-- Welcome text -->
        <div class="text-center">
          <p class="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-2">Welcome to my</p>
          <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 font-orbitron uppercase tracking-wide">
            Portfolio
          </h1>
        </div>

        <!-- Progress bar -->
        <div class="w-full">
          <div class="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transition-all duration-100 ease-out"
              :style="{ width: progress + '%' }"
            />
          </div>
          <div class="flex justify-between items-center mt-2">
            <span class="text-xs text-gray-400 dark:text-gray-600">Loading...</span>
            <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">{{ progress }}%</span>
          </div>
        </div>

        <!-- Dots -->
        <div class="flex gap-1.5">
          <span v-for="i in 3" :key="i"
            class="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 animate-bounce"
            :style="{ animationDelay: `${(i - 1) * 0.15}s` }"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.loader-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.loader-fade-leave-to {
  opacity: 0;
  transform: scale(1.03);
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}
</style>

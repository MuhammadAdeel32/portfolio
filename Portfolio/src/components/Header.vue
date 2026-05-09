<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  isDark: Boolean,
  sidebarOpen: Boolean,
})
const emit = defineEmits(['toggleTheme', 'toggleSidebar'])

const route = useRoute()

const pageTitles = {
  '/': 'Home',
  '/about': 'About',
  '/skills': '',
  '/projects': 'Portfolio',
  '/education': 'Credentials',
  '/certifications': 'Certifications',
  '/contact': 'Contact us',
}

const pageTitle = computed(() => pageTitles[route.path] ?? 'Portfolio')
</script>

<template>
  <header class="fixed top-0 left-0 md:left-60 right-0 z-20 h-20
                 bg-white/80 dark:bg-[#05070a]/80 backdrop-blur-md
                 border-b border-slate-200/60 dark:border-white/5
                 flex items-center justify-between px-6
                 transition-all duration-500">

    <!-- Left: Page Title -->
    <div class="flex items-center gap-6">
      <button
        @click="emit('toggleSidebar')"
        class="md:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-50 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <h1 class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[0.25em]">{{ pageTitle }}</h1>
    </div>

    <!-- Right: Status -->
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span class="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Available</span>
      </div>

      <router-link 
        to="/admin" 
        class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-black uppercase tracking-widest hover:bg-blue-500/20 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
        View
      </router-link>

      <button
        @click="emit('toggleTheme')"
        class="p-2 rounded-lg text-slate-400 hover:text-slate-900 transition-colors"
      >
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591 1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591 1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      </button>
    </div>
  </header>
</template>

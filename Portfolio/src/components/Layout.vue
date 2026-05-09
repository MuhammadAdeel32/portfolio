<script setup>
import { ref, onMounted } from 'vue'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

/* ─── Theme Management ─── */
const isDark = ref(false)

const applyTheme = (dark) => {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  isDark.value = dark
}

const toggleTheme = () => {
  const newVal = !isDark.value
  localStorage.setItem('theme', newVal ? 'dark' : 'light')
  applyTheme(newVal)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    applyTheme(saved === 'dark')
  } else {
    // System preference
    applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }
})

/* ─── Sidebar (mobile) ─── */
const sidebarOpen = ref(false)
const toggleSidebar = () => { sidebarOpen.value = !sidebarOpen.value }
const closeSidebar = () => { sidebarOpen.value = false }
</script>

<template>
  <div class="min-h-screen bg-transparent transition-colors duration-300">
    <!-- Sidebar -->
    <Sidebar :is-open="sidebarOpen" @close="closeSidebar" />

    <!-- Header -->
    <Header
      :is-dark="isDark"
      :sidebar-open="sidebarOpen"
      @toggle-theme="toggleTheme"
      @toggle-sidebar="toggleSidebar"
    />

    <!-- Main content — offset by sidebar width on md+ -->
    <main class="md:ml-60 pt-6 md:pt-10 min-h-screen">
      <router-view v-slot="{ Component }">
        <Transition name="page-fade" mode="out-in">
          <div class="p-6 md:p-6">
            <component :is="Component" />
          </div>
        </Transition>
      </router-view>
    </main>
  </div>
</template>


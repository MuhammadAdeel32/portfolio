<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const username = ref("")
const password = ref("")
const isAuthenticated = ref(false)
const messages = ref([])
const loading = ref(false)
const errorMsg = ref("")

// Check if already authenticated on mount
onMounted(() => {
  const token = localStorage.getItem("adminToken")
  if (token) {
    isAuthenticated.value = true
    fetchMessages(token)
  }
})

const handleLogin = async () => {
  if (!username.value || !password.value) {
    errorMsg.value = "Please fill in all fields"
    return
  }
  
  loading.value = true
  errorMsg.value = ""

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      username: username.value,
      password: password.value
    })

    if (res.data.success) {
      localStorage.setItem("adminToken", res.data.token)
      isAuthenticated.value = true
      fetchMessages(res.data.token)
    }
  } catch (error) {
    errorMsg.value = error.response?.data?.message || "Login failed"
  } finally {
    loading.value = false
  }
}

const fetchMessages = async (token) => {
  try {
    const res = await axios.get("http://localhost:5000/api/messages", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    messages.value = res.data
  } catch (error) {
    if (error.response?.status === 401) {
      handleLogout()
    } else {
      console.error("Failed to fetch messages", error)
    }
  }
}

const handleLogout = () => {
  localStorage.removeItem("adminToken")
  isAuthenticated.value = false
  messages.value = []
  username.value = ""
  password.value = ""
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date)
}
</script>

<template>
  <div class="min-h-screen bg-secondary text-gray-300 font-sans selection:bg-primary/30 selection:text-emerald-200">
    <!-- Navbar -->
    <nav class="w-full bg-secondary/90 backdrop-blur-md shadow-lg shadow-black/20 py-4 fixed z-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold text-white tracking-tight">MA<span class="text-primary">.</span></router-link>
        <div>
          <button v-if="isAuthenticated" @click="handleLogout" class="hover:text-red-400 text-sm font-medium transition-colors">Logout</button>
          <router-link v-else to="/" class="hover:text-primary transition-colors text-sm font-medium">Back to Home</router-link>
        </div>
      </div>
    </nav>

    <main class="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center min-h-screen">
      
      <!-- Login Form -->
      <div v-if="!isAuthenticated" class="w-full max-w-md card bg-gray-800/80 p-8 mt-10 shadow-xl">
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Admin Login</h2>
        <div v-if="errorMsg" class="mb-4 text-red-400 bg-red-400/10 p-3 rounded text-sm text-center">
          {{ errorMsg }}
        </div>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Username</label>
            <input
              v-model="username"
              type="text"
              class="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Password</label>
            <input
              v-model="password"
              type="password"
              class="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <button type="submit" class="btn-primary w-full py-3 mt-4" :disabled="loading">
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </form>
      </div>

      <!-- Messages Dashboard -->
      <div v-else class="w-full">
        <div class="mb-8 flex justify-between items-end border-b border-gray-700 pb-4">
          <div>
            <h1 class="text-3xl font-bold text-white mb-2">Messages</h1>
            <p class="text-gray-400 text-sm">Overview of submissions from your portfolio.</p>
          </div>
          <div class="text-primary text-sm font-medium">{{ messages.length }} Total</div>
        </div>

        <div v-if="messages.length === 0" class="text-center py-20 text-gray-500 bg-gray-900/20 rounded-xl border border-gray-800 border-dashed">
          No messages received yet.
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="msg in messages" :key="msg._id" class="card bg-gray-800/60 border border-gray-700/50 hover:border-gray-600 transition-colors flex flex-col">
            <div class="flex justify-between items-start mb-4 border-b border-gray-700 pb-4">
              <div class="truncate pr-4 w-full">
                <h3 class="text-lg font-bold text-white truncate">{{ msg.name }}</h3>
                <a :href="'mailto:' + msg.email" class="text-emerald-400 text-sm hover:underline truncate block">{{ msg.email }}</a>
              </div>
            </div>
            <p class="text-gray-300 leading-relaxed text-sm flex-grow mb-6 whitespace-pre-wrap">{{ msg.message }}</p>
            <div class="mt-auto text-xs text-gray-500 font-medium">
              Received: {{ formatDate(msg.createdAt) }}
            </div>
          </div>
        </div>
      </div>
      
    </main>
  </div>
</template>

<style scoped>
/* Scoped overrides if needed */
</style>

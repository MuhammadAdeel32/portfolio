<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const username = ref("")
const password = ref("")
const isAuthenticated = ref(false)
const messages = ref([])
const loading = ref(false)
const loadingMessages = ref(false)
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
    const res = await axios.post("/api/auth/login", {
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
  loadingMessages.value = true
  try {
    const res = await axios.get("/api/messages", {
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
  } finally {
    loadingMessages.value = false
  }
}

const deleteMessage = async (id) => {
  if (!confirm("Are you sure you want to delete this message? This action cannot be undone.")) return;
  
  try {
    const token = localStorage.getItem("adminToken");
    await axios.delete(`/api/messages?id=${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    // Remove from UI without refetching or just refetch
    fetchMessages(token);
  } catch (error) {
    console.error("Failed to delete message", error);
    alert(error.response?.data?.message || "Failed to delete message.");
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

        <div v-if="loadingMessages" class="text-center py-20 text-gray-500 bg-gray-900/20 rounded-xl border border-gray-800">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          Loading messages...
        </div>

        <div v-else-if="messages.length === 0" class="text-center py-20 text-gray-500 bg-gray-900/20 rounded-xl border border-gray-800 border-dashed">
          No messages received yet.
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="msg in messages" :key="msg._id" class="card bg-gray-800/60 border border-gray-700/50 hover:border-gray-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col p-6 rounded-xl group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div class="flex justify-between items-start mb-4 border-b border-gray-700 pb-4">
              <div class="truncate pr-4 w-full">
                <h3 class="text-lg font-bold text-white truncate">{{ msg.name }}</h3>
                <a :href="'mailto:' + msg.email" class="text-emerald-400 text-sm hover:underline truncate block">{{ msg.email }}</a>
              </div>
            </div>
            <p class="text-gray-300 leading-relaxed text-sm flex-grow mb-6 whitespace-pre-wrap relative z-10">{{ msg.message }}</p>
            <div class="mt-auto flex justify-between items-end relative z-10">
              <div class="text-xs text-gray-500 font-medium">
                Received: {{ formatDate(msg.createdAt) }}
              </div>
              <button 
                @click="deleteMessage(msg._id)" 
                class="text-red-400 hover:text-red-300 hover:bg-red-400/10 p-2 rounded-lg transition-colors text-sm font-medium"
                title="Delete message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
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

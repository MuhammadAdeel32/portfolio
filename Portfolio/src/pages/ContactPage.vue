<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const success = ref(false)
const errorMsg = ref('')

/* ── API call unchanged: axios.post("/api/messages") ── */
const sendMessage = async () => {
  if (!name.value || !email.value || !message.value) {
    errorMsg.value = 'Please fill in all fields.'
    return
  }

  try {
    loading.value = true
    errorMsg.value = ''
    success.value = false

    await axios.post('/api/messages', {
      name: name.value,
      email: email.value,
      message: message.value,
    })

    success.value = true
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (err) {
    console.error('Contact form error:', err)
    errorMsg.value = 'Failed to send message. Please try again.'
  } finally {
    loading.value = false
  }
}

const contactDetails = [
  {
    label: 'Email',
    value: 'adeellaravel12@gmail.com',
    href: 'mailto:adeellaravel12@gmail.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>`,
  },
  {
    label: 'Phone',
    value: '+92 337 7249569',
    href: 'tel:03377249569',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>`,
  },
  {
    label: 'GitHub',
    value: 'Adeel-fullstack',
    href: 'https://github.com/Adeel-fullstack',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>`,
  },
  {
    label: 'LinkedIn',
    value: 'mohammad-adeel',
    href: 'https://www.linkedin.com/in/mohammad-adeel-883518353/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
    </svg>`,
  },
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 md:px-10 py-8">

    <div class="flex items-start gap-5 mb-8">
      <div class="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <h2 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-1">Let's Build Something Together</h2>
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Feel free to reach out if you're looking for a developer, have a question, or simply want to connect.</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">

      <!-- Contact info panel -->
      <div class="lg:col-span-2 space-y-4">
        <a
          v-for="item in contactDetails"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 p-3.5 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-200 group shadow-sm"
        >
          <span class="w-10 h-10 flex-shrink-0 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-200 dark:border-blue-800" v-html="item.icon" />
          <div class="min-w-0">
            <p class="text-xs text-gray-400 dark:text-gray-500 font-medium">{{ item.label }}</p>
            <p class="text-sm text-gray-700 dark:text-gray-300 font-semibold truncate">{{ item.value }}</p>
          </div>
        </a>
      </div>

      <!-- Contact form -->
      <div class="lg:col-span-3">
        <div class="card bg-white dark:bg-gray-800/60">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-t-2xl" />

          <!-- Success message -->
          <Transition name="page-fade">
            <div v-if="success" class="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Message sent successfully! I'll get back to you soon.
            </div>
          </Transition>

          <!-- Error message -->
          <div v-if="errorMsg" class="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
            {{ errorMsg }}
          </div>

          <form @submit.prevent="sendMessage" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">Name</label>
                <input
                  id="contact-name"
                  v-model="name"
                  type="text"
                
                  class="form-input"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">Email</label>
                <input
                  id="contact-email"
                  v-model="email"
                  type="email"
                  
                  class="form-input"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">Message</label>
              <textarea
                id="contact-message"
                v-model="message"
                rows="5"
                placeholder="How can I help you?"
                class="form-input resize-none"
              />
            </div>

            <button
              id="contact-submit"
              type="submit"
              class="btn-primary w-full py-2.5"
              :disabled="loading"
            >
              <svg v-if="loading" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
              {{ loading ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

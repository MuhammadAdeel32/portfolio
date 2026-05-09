<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

const certificates = [
  {
    title: 'Internship Completion Certificate',
    issuer: 'WEBEDUCATORZ',
    description: 'Successfully completed internship demonstrating practical experience in web development and software engineering.',
    img: '/web.png',
    color: 'blue',
    colorClass: 'from-blue-600 to-blue-400',
    iconBg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    title: 'SQL Server Certificate',
    issuer: 'Sololearn',
    description: 'Completed SQL Server training covering database design, queries, joins, and data management fundamentals.',
    img: '/sql.png',
    color: 'violet',
    colorClass: 'from-violet-600 to-purple-500',
    iconBg: 'bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    title: 'C++ Course Completion Certificate',
    issuer: 'Saylor Academy',
    description: 'Completed C++ programming course with strong understanding of OOP concepts, data structures, and problem-solving.',
    img: '/saylor.png',
    color: 'emerald',
    colorClass: 'from-emerald-600 to-teal-400',
    iconBg: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'GDG Cloud Meetup Lahore',
    issuer: 'Google Developer Groups',
    description: 'Participated in GDG Cloud Meetup Lahore — gained insights into cloud technologies and modern development practices.',
    img: '/cloud.png',
    color: 'blue',
    colorClass: 'from-sky-600 to-blue-400',
    iconBg: 'bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800',
    iconColor: 'text-sky-600 dark:text-sky-400',
  },
  {
    title: 'Superior Debate Session (SUMUN)',
    issuer: 'Superior University',
    description: 'Participated in a formal debate session enhancing public speaking, critical thinking, and communication skills.',
    img: '/debate.png',
    color: 'orange',
    colorClass: 'from-orange-500 to-amber-400',
    iconBg: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    iconColor: 'text-orange-500 dark:text-orange-400',
  },
  {
    title: 'Superior Cloud Event',
    issuer: 'Superior University',
    description: 'Attended cloud computing event focused on AI, cloud infrastructure, and emerging technologies.',
    img: '/AI.jpeg',
    color: 'violet',
    colorClass: 'from-fuchsia-600 to-violet-500',
    iconBg: 'bg-fuchsia-50 dark:bg-fuchsia-900/20 border-fuchsia-200 dark:border-fuchsia-800',
    iconColor: 'text-fuchsia-600 dark:text-fuchsia-400',
  },
]

const selectedCert = ref(null)
const showModal = ref(false)

const openModal = (cert) => {
  selectedCert.value = cert
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
  setTimeout(() => { selectedCert.value = null }, 250)
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 md:px-10 py-8">

    <div class="flex items-start gap-5 mb-8">
      <div class="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M9.083 18L5 11L9.083 4H14.917L19 11L14.917 18H9.083Z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 11V21" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M8 15L12 13L16 15" />
        </svg>
      </div>
      <div>
        <h2 class="text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-2">Certifications</h2>
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Professional credentials & achievements</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <div
        v-for="(cert, index) in certificates"
        :key="cert.title"
        class="fade-up group relative bg-white dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
        :style="{ animationDelay: (index * 0.1) + 's' }"
        @click="openModal(cert)"
      >
        <!-- Image Container (Showcasing the actual certificate) -->
        <div class="relative h-48 w-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <!-- Subtle Glow behind image -->
          <div :class="['absolute w-32 h-32 blur-3xl opacity-20 transition-all duration-700 group-hover:opacity-40 group-hover:scale-150', cert.color === 'blue' ? 'bg-blue-500' : cert.color === 'emerald' ? 'bg-emerald-500' : 'bg-purple-500']" />
          
          <img
            :src="cert.img"
            :alt="cert.title"
            loading="lazy"
            class="relative z-10 max-w-full max-h-full object-contain rounded shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          
          <!-- Quick Look Overlay -->
          <div class="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
            <div class="bg-white/10 border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-white text-sm font-bold shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
              </svg>
              Click to Expand
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="p-5">
          <div class="flex items-center gap-2 mb-2">
            <span :class="['w-2 h-2 rounded-full animate-pulse', cert.color === 'blue' ? 'bg-blue-500' : cert.color === 'emerald' ? 'bg-emerald-500' : 'bg-purple-500']"></span>
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">{{ cert.issuer }}</span>
          </div>
          
          <h3 class="text-base font-bold text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ cert.title }}
          </h3>
          
          <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {{ cert.description }}
          </p>
        </div>

        <!-- Animated border bottom -->
        <div :class="['absolute bottom-0 left-0 h-1 transition-all duration-500 bg-gradient-to-r w-0 group-hover:w-full', cert.colorClass]" />
      </div>
    </div>

    <!-- Certificate Modal -->
    <Modal :show="showModal" :title="selectedCert?.title ?? ''" max-width="max-w-4xl" @close="closeModal">
      <div v-if="selectedCert" class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
             <div :class="['w-10 h-10 rounded-xl flex items-center justify-center border', selectedCert.iconBg]">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" :class="['w-5 h-5', selectedCert.iconColor]">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
               </svg>
             </div>
             <div>
               <p class="text-[10px] font-black uppercase tracking-widest text-gray-400">{{ selectedCert.issuer }}</p>
               <h4 class="text-lg font-bold text-gray-900 dark:text-white">{{ selectedCert.title }}</h4>
             </div>
          </div>
          <a :href="selectedCert.img" download class="btn-primary py-2 px-4 text-xs">Download Copy</a>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-900 p-2 rounded-2xl border border-gray-100 dark:border-gray-800">
          <img
            :src="selectedCert.img"
            :alt="selectedCert.title"
            class="w-full rounded-xl shadow-inner object-contain max-h-[60vh]"
          />
        </div>
        
        <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed px-2">
          {{ selectedCert.description }}
        </p>
      </div>
    </Modal>

  </div>
</template>

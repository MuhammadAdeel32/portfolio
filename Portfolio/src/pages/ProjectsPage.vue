<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

const projects = ref([
  {
    id: 1,
    title: 'Pharmacy Control System',
    description: [
      'Streamline medicine inventory and sales processes',
      'Real-time billing and invoice generation',
      'Intuitive user interface with real-time updates',
      'Comprehensive stock tracking and expiry alerts'
    ],
    tech: ['Laravel', 'Livewire', 'MySQL'],
    color: 'emerald',
    icon: '/icons/pharmacy.png',
    demoLink: '#',
    screenshots: ['/screenshots/pharmacy1.png', '/screenshots/pharmacy2.png'],
    videoLink: '#',
    githubLink: 'https://github.com/Adeel-fullstack/Pharmacy-control-system'
  },
  {
    id: 2,
    title: 'Inventory Management System',
    description: [
      'Efficiently manage products and stock levels',
      'Dynamic dashboard for business operations',
      'Real-time inventory tracking and reporting',
      'Login: adeel@gmail.com | Pass: 12345678'
    ],
    tech: ['Laravel', 'Livewire', 'MySQL'],
    color: 'blue',
    icon: '/icons/inventory.png',
    demoLink: 'https://inventory-management-system-production-11.up.railway.app/',
    videoLink: '#',
    screenshots: ['/screenshots/inventory-admin.png'],
    githubLink: 'https://github.com/Adeel-fullstack/Inventory-management-system'
  },
  {
    id: 3,
    title: 'Bus & Ticket Management System',
    description: [
      'Efficiently manage bus routes and ticketing',
      'Terminal-based C++ application with DSA',
      'Real-time route tracking and data handling',
      'Seat reservation and availability management'
    ],
    tech: ['C++', 'DSA', 'Algorithms'],
    color: 'teal',
    icon: '/icons/bus.png',
    demoLink: '#',
    videoLink: '#',
    githubLink: 'https://github.com/Adeel-fullstack/Ticket-booking-system'
  },
  {
    id: 4,
    title: 'Community Platform UI',
    description: [
      'High-fidelity Frontend of a modern community website',
      'Developed with Vue 3, Tailwind CSS, and Vite',
      'Interactive dashboard with community features',
      'Fully responsive design for all screen sizes'
    ],
    tech: ['Vue 3', 'Tailwind', 'Vite'],
    color: 'indigo',
    icon: '/icons/learning.png',
    demoLink: '#',
    videoLink: '#',
    githubLink: 'https://github.com/Adeel-fullstack/Skill_sprint_UI'
  },
  {
    id: 5,
    title: 'Rock Paper Scissors',
    description: [
      'Classic game built with vanilla HTML/CSS/JS',
      'Responsive UI with smooth animations',
      'Real-time score tracking and interactive play',
      'Local storage integration for high scores'
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'orange',
    icon: '/icons/rock_paper_scissors.png',
    demoLink: '#',
    videoLink: '#',
    githubLink: 'https://github.com/Adeel-fullstack/paper_rock_scissors'
  }
])

const showModal = ref(false)
const selectedProject = ref(null)

const openGallery = (project) => {
  selectedProject.value = project
  showModal.value = true
}

const themeClasses = {
  emerald: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  teal: 'bg-teal-500/10 text-teal-500 border-teal-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
  orange: 'bg-orange-500/10 text-orange-500 border-orange-500/20'
}

const btnClasses = {
  emerald: 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20',
  blue: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20',
  teal: 'bg-teal-500/10 text-teal-500 hover:bg-teal-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20',
  orange: 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20'
}
</script>

<template>
  <div class="pb-20 px-4 md:px-8 max-w-7xl mx-auto pt-10 space-y-12">
    <!-- Page Header -->
    <div class="flex items-start gap-5">
      <div class="w-14 h-14 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      </div>
      <div>
        <h2 class="text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-2">Projects</h2>
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">My technical portfolio</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="project in projects" 
        :key="project.id"
        class="flex flex-col bg-white dark:bg-[#0b0f1a] rounded-2xl p-4 border border-slate-200 dark:border-slate-800/60 shadow-sm hover:shadow-xl dark:hover:border-slate-700 transition-all duration-300 group"
      >
        <!-- Header: Icon & Title in same row -->
        <div class="flex items-center gap-3 mb-3">
          <div :class="['w-14 h-14 rounded-xl flex items-center justify-center p-2 transition-all group-hover:scale-110 duration-300 shrink-0', themeClasses[project.color]]">
            <img :src="project.icon" :alt="project.title" class="w-full h-full object-contain" />
          </div>
          
          <!-- Title as a button-like card -->
          <div class="flex-grow bg-slate-50 dark:bg-white/5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm group-hover:border-blue-500/30 transition-all">
            <h3 class="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              {{ project.title }}
            </h3>
          </div>
        </div>

        <!-- Description -->
        <div class="flex-grow">
          <ul class="space-y-1 mb-3">
            <li 
              v-for="(point, index) in project.description" 
              :key="index"
              class="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-[13px] font-medium leading-relaxed"
            >
              <span :class="['mt-2 w-2 h-2 rounded-full shrink-0', themeClasses[project.color]]"></span>
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-1.5 mb-4">
          <span 
            v-for="tech in project.tech" 
            :key="tech" 
            :class="['px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border transition-all', themeClasses[project.color]]"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3 mt-auto">
          <template v-if="project.title === 'Inventory Management System'">
            <a 
              :href="project.demoLink" 
              target="_blank"
              :class="['flex-1 py-2 rounded-xl text-[10px] font-bold text-center transition-all', btnClasses[project.color]]"
            >
              Live Demo
            </a>
          </template>
          <template v-else>
            <a v-if="project.videoLink && project.videoLink !== '#'"
               :href="project.videoLink"
               target="_blank"
               :class="['flex-1 py-2 rounded-xl text-[10px] font-bold text-center transition-all', btnClasses[project.color]]"
            >
              Demo
            </a>
            <button v-else-if="project.screenshots && project.screenshots.length > 0"
              @click="openGallery(project)"
              :class="['flex-1 py-2 rounded-xl text-[10px] font-bold text-center transition-all', btnClasses[project.color]]"
            >
              Demo
            </button>
            <a v-else
              :href="project.demoLink"
              :class="['flex-1 py-2 rounded-xl text-[10px] font-bold text-center transition-all', btnClasses[project.color]]"
            >
              Demo
            </a>
          </template>

          <a :href="project.githubLink" class="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl text-[10px] font-bold text-center transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="w-4 h-4">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>

    <!-- Gallery Modal -->
    <Modal 
      :show="showModal" 
      :title="selectedProject?.title + ' - Screenshots'" 
      @close="showModal = false"
      maxWidth="max-w-4xl"
    >
      <div v-if="selectedProject" class="space-y-4">
        <div class="grid grid-cols-1 gap-4">
          <div 
            v-for="(img, idx) in selectedProject.screenshots" 
            :key="idx"
            class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            <img :src="img" :alt="selectedProject.title" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<style scoped>
.grid {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

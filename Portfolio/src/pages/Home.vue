<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

const featuredProjects = ref([
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
    githubLink: 'https://github.com/Adeel-fullstack/Pharmacy-control-system'
  },
  {
    id: 2,
    title: 'Inventory Management System',
    description: [
      'Efficiently manage products and stock levels',
      'Dynamic dashboard for business operations',
      'Real-time inventory tracking and reporting',
      'Supplier management and purchase tracking'
    ],
    tech: ['Laravel', 'Livewire', 'MySQL'],
    color: 'blue',
    icon: '/icons/inventory.png',
    demoLink: '#',
    screenshots: ['/screenshots/inventory-admin.png'],
    githubLink: 'https://github.com/Adeel-fullstack/Inventory-management-system'
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
  orange: 'bg-orange-500/10 text-orange-500 border-orange-500/20'
}

const btnClasses = {
  emerald: 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20',
  blue: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20',
  orange: 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20'
}
</script>

<template>
  <div class="pb-20 space-y-32">
    
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center pt-8 md:pt-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <!-- Background Glow Decoration (Isolated overflow) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      </div>
      
      <div class="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <!-- Left: Content -->
        <div class="flex-1 space-y-6 text-center lg:text-left">
          <!-- Status Badge -->
         

          <div class="space-y-6">
            <h2 class="text-4xl md:text-5xl font-medium text-slate-500 dark:text-slate-400 tracking-tight">Hi, I'm</h2>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[7.5rem] font-black leading-[0.85] tracking-tighter uppercase mb-4">
              <span class="block text-slate-900 dark:text-white">MUHAMMAD</span>
              <span class="block bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] via-[#3b82f6] to-[#8b5cf6]">ADEEL</span>
            </h1>
            <p class="text-lg md:text-xl font-bold text-slate-500 dark:text-slate-400 tracking-tight">
              Full Stack Developer <span class="text-slate-600 dark:text-slate-500 font-medium">(Laravel & Vue Specialist)</span>
            </p>
          </div>

          <p class="text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed mx-auto lg:mx-0 font-medium">
            build responsive and high-performance web applications with clean and efficient code. Develop create user-friendly interfaces and develop reliable backend systems, ensuring everything works smoothly together.
          </p>

          <div class="flex flex-row justify-center lg:justify-start gap-4">
            <router-link to="/projects" class="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#10b981] to-[#3b82f6] hover:scale-105 transition-all duration-300 text-white font-black uppercase tracking-widest rounded-xl shadow-lg shadow-emerald-500/20 whitespace-nowrap text-[11px]">
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
            <router-link to="/about" class="group flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 text-white font-black uppercase tracking-widest rounded-xl shadow-lg whitespace-nowrap text-[11px]">
              About Me
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>

        <!-- Right: Photo -->
        <div class="relative w-full max-w-md lg:max-w-xl flex flex-col items-center gap-8">
          <div class="relative w-[280px] md:w-[320px] lg:w-[350px] 2xl:w-[420px] aspect-square rounded-full p-2 bg-gradient-to-tr from-[#10b981] via-[#3b82f6] to-[#8b5cf6] shadow-[0_0_80px_-20px_rgba(59,130,246,0.3)] flex-shrink-0">
            <div class="w-full h-full rounded-full bg-white dark:bg-[#05070a] overflow-hidden border-4 border-white dark:border-[#05070a]">
              <img src="/portfoliopic.png" alt="Muhammad Adeel" class="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
          </div>

          <!-- Contact Icons -->
          <div class="flex items-center gap-4">
            <a href="tel:+923377249569" class="p-4 rounded-2xl bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-slate-800 text-[#10b981] hover:border-[#10b981] hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            
            <a href="mailto:adeellaravel12@gmail.com" class="p-4 rounded-2xl bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-slate-800 text-[#3b82f6] hover:border-[#3b82f6] hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- Featured Projects -->
    <section class="px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      <div class="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-8">
        <div class="flex items-start gap-5">
          <div class="w-14 h-14 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <h2 class="text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-2">Featured Projects</h2>
            <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Here are some of the projects I’ve built to apply and strengthen my development skills.</p>
          </div>
        </div>
        <router-link to="/projects" class="hidden md:block text-sm font-black text-blue-500 uppercase tracking-widest hover:text-blue-400 transition-colors mt-4">
          View All Projects &rarr;
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="project in featuredProjects" 
          :key="project.id"
          class="flex flex-col bg-white dark:bg-[#0b0f1a] rounded-2xl p-8 border border-slate-200 dark:border-slate-800/60 shadow-sm hover:shadow-2xl dark:hover:border-slate-700 transition-all duration-500 group"
        >
          <!-- Header: Icon & Title in same row -->
          <div class="flex items-center gap-5 mb-8">
            <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center p-3 transition-all group-hover:scale-110 duration-500 shadow-inner shrink-0', themeClasses[project.color]]">
              <img :src="project.icon" :alt="project.title" class="w-full h-full object-contain drop-shadow-lg" />
            </div>
            
            <!-- Title as a button-like card -->
            <div class="flex-grow bg-slate-50 dark:bg-white/5 px-6 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm group-hover:border-[#10b981]/30 transition-all duration-500">
              <h3 class="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                {{ project.title }}
              </h3>
            </div>
          </div>

          <!-- Description -->
          <div class="flex-grow">
            <ul class="space-y-3 mb-8">
              <li 
                v-for="(point, index) in project.description" 
                :key="index"
                class="flex items-start gap-3 text-slate-500 dark:text-slate-400 text-[15px] font-medium leading-relaxed"
              >
                <span :class="['mt-2 w-2 h-2 rounded-full shrink-0', themeClasses[project.color]]"></span>
                {{ point }}
              </li>
            </ul>
          </div>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-10">
            <span 
              v-for="tech in project.tech" 
              :key="tech" 
              :class="['px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider border transition-all', themeClasses[project.color]]"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-4">
            <template v-if="project.screenshots && project.screenshots.length > 0">
              <button 
                @click="openGallery(project)"
                :class="['flex-1 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest text-center transition-all', btnClasses[project.color]]"
              >
                View Gallery
              </button>
            </template>
            <template v-else>
              <a :href="project.demoLink" :class="['flex-1 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest text-center transition-all', btnClasses[project.color]]">
                Live Demo
              </a>
            </template>
            <a :href="project.githubLink" class="flex-1 flex items-center justify-center gap-2 py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-2xl text-xs font-black uppercase tracking-widest text-center transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="w-4 h-4">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

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
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

section {
  animation: fadeIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
</style>

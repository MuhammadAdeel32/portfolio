<script setup>
const stats = [
  { value: '1+', label: 'Years Active in Development' },
  { value: '5+', label: 'Projects Completed' },
  { value: '2', label: 'Community Roles' },
  { value: '6+', label: 'Certifications Earned' },
]

const experience = [
  {
    role: 'Technical Associate',
    company: 'Skill Sprint Community',
    period: 'Current',
    description: 'Assisting in technical tasks, development activities, and problem-solving. Gaining hands-on experience in real-world development workflows.',
    color: 'blue',
  },
  {
    role: 'CNCF Volunteer',
    company: 'Cloud Native Computing Foundation',
    period: 'Current',
    description: 'Contributing to event management, coordination, and community engagement. Assisted in organizing technical events, workshops, and meetups to promote cloud-native technologies.',
    color: 'violet',
  },
  {
    role: 'Active Member – Superior Debating Society',
    company: 'Superior University',
    period: 'Current',
    description: 'Regularly participating in debates and discussions. Represented as a Country Delegate in the Security Council at the SUMUN conference.',
    color: 'emerald',
  },
  {
    role: 'Web Development Intern',
    company: 'WEBEDUCATORZ',
    period: 'Completed',
    description: 'Worked extensively with Laravel and Livewire. Gained foundational experience in building real-world applications.',
    color: 'blue',
  },
]

const colorMap = {
  blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
  violet: 'bg-violet-100 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-800',
  emerald: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
}

const dotMap = {
  blue: 'bg-blue-500',
  violet: 'bg-violet-500',
  emerald: 'bg-emerald-500',
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 md:px-10 py-8">

    <!-- Page header -->
    <div class="flex items-start gap-5 mb-8">
      <div class="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <div>
        <h2 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-1">About Me</h2>
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">My professional journey</p>
      </div>
    </div>

    <!-- Bio + Stats -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

      <!-- Bio -->
      <div class="fade-up space-y-6">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-slate-300">
          My journey in software development is driven by a passion for creating meaningful, scalable solutions. With expertise rooted in
          <strong class="text-blue-600 dark:text-blue-400 font-semibold underline decoration-blue-500/30 underline-offset-4">Laravel</strong> and
          <strong class="text-violet-600 dark:text-violet-400 font-semibold underline decoration-violet-500/30 underline-offset-4">Vue.js</strong>, I build comprehensive web applications from the database architecture to the interactive user interface.
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-slate-400">
          Currently working as a <strong class="text-gray-900 dark:text-white">Technical Associate at Skill Sprint</strong>, where I assist in technical tasks, actively engage in development workflows, and solve real-world problems alongside a talented team.
        </p>

        <!-- Social links -->
        <div class="flex flex-wrap gap-4 pt-4">
          <a href="https://github.com/Adeel-fullstack" target="_blank" rel="noopener noreferrer"
             class="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" class="group-hover:scale-110 transition-transform">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <span class="font-bold text-sm">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/mohammad-adeel-883518353/" target="_blank" rel="noopener noreferrer"
             class="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" class="group-hover:scale-110 transition-transform text-blue-600 dark:text-blue-400">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
            <span class="font-bold text-sm">LinkedIn</span>
          </a>
        </div>
      </div>

      <!-- Stats grid -->
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="fade-up card group text-center bg-white/80 dark:bg-gray-800/40 backdrop-blur-md"
          :style="{ animationDelay: (index * 0.1) + 's' }"
        >
          <div class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mb-1 group-hover:scale-110 transition-transform">
            {{ stat.value }}
          </div>
          <div class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 leading-snug">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Experience timeline -->
    <div class="fade-up fade-up-delay-3">
      <div class="flex items-center gap-3 mb-10">
        <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Experience &amp; Leadership</h3>
        <div class="h-px flex-1 bg-gradient-to-r from-gray-200 dark:from-gray-700/50 to-transparent" />
      </div>

      <div class="relative border-l-2 border-gray-100 dark:border-gray-800 ml-8 md:ml-4 space-y-8">
        <div
          v-for="(job, i) in experience"
          :key="i"
          class="relative pl-10"
        >
          <!-- Timeline dot -->
          <span :class="['absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-gray-50 dark:border-[#0d1117] shadow-sm transition-transform hover:scale-125 cursor-pointer', dotMap[job.color]]" />

          <div class="flex flex-wrap items-center gap-3 mb-2">
            <h4 class="text-lg font-bold text-gray-900 dark:text-white">{{ job.role }}</h4>
            <span :class="['text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border shadow-sm', colorMap[job.color]]">
              {{ job.period }}
            </span>
          </div>
          <p class="text-sm font-bold text-blue-600 dark:text-blue-400 mb-3 tracking-wide">{{ job.company }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">{{ job.description }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

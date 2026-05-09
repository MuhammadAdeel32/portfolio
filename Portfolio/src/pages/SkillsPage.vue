<script setup>
const technicalSkills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95 },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90 },
  { name: 'JavaScript/Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 80 },
  { name: 'PHP / Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', level: 92 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 85 }
]

const currentlyLearning = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactjs/react-original.svg', level: 60 },
  { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', level: 40 },
  { name: 'Software Architect', icon: '🏛️', level: 30 }
]

const upcomingRoles = [
  { name: 'Mern Stack Technology', icon: '🚀' },
  { name: 'System Design', icon: '📐' },
]

const otherSkills = [
  'Prompt Engineering', 'Git & GitHub', 'Responsive Design', 'Problem Solving', 'RESTful APIs'
]
</script>

<template>
  <div class="min-h-screen bg-[#f8fafc] dark:bg-[#05070a] py-8 px-4 md:px-8">
    <div class="max-w-7xl mx-auto space-y-10">
      
      <!-- Technical Skills Section -->
      <section class="space-y-6">
        <div class="flex items-start gap-5">
          <div class="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <h2 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-1">Technical Skills</h2>
            <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Technologies I work with</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="skill in technicalSkills" 
            :key="skill.name"
            class="bg-white dark:bg-[#0b0f1a] rounded-2xl p-4 border border-slate-200 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-5 mb-4">
              <div class="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center p-2.5 shrink-0">
                <img v-if="skill.icon.includes('http')" :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" />
                <span v-else class="text-2xl">{{ skill.icon }}</span>
              </div>
              <div class="flex-grow space-y-2">
                <div class="flex justify-between items-end">
                  <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{{ skill.name }}</h3>
                  <span class="text-[10px] font-black text-blue-500 uppercase tracking-widest">{{ skill.level }}%</span>
                </div>
                <div class="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Currently Learning Section -->
      <section class="space-y-6">
        <div class="flex items-start gap-5">
          <div class="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h2 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-1">Currently Learning</h2>
            <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Technologies I'm mastering right now</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="skill in currentlyLearning" 
            :key="skill.name"
            class="bg-white dark:bg-[#0b0f1a] rounded-2xl p-4 border border-slate-200 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-5 mb-4">
              <div class="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center p-2.5 shrink-0">
                <img v-if="skill.icon.includes('http')" :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" />
                <span v-else class="text-2xl">{{ skill.icon }}</span>
              </div>
              <div class="flex-grow space-y-2">
                <div class="flex justify-between items-end">
                  <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{{ skill.name }}</h3>
                  <span class="text-[10px] font-black text-blue-500 uppercase tracking-widest">Learning</span>
                </div>
                <div class="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full transition-all duration-1000 opacity-60"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Upcoming Roles -->
      <section class="bg-white dark:bg-[#0b0f1a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800/60 shadow-sm space-y-4">
        <h2 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Upcoming</h2>
        <div class="flex flex-wrap gap-4">
          <div 
            v-for="role in upcomingRoles" 
            :key="role.name"
            class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-bold shadow-sm"
          >
            <span>{{ role.icon }}</span>
            {{ role.name }}
          </div>
        </div>
      </section>

      <!-- Other Skills -->
      <section class="bg-white dark:bg-[#0b0f1a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800/60 shadow-sm space-y-4">
        <h2 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Other Skills</h2>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="skill in otherSkills" 
            :key="skill"
            class="px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-bold shadow-sm"
          >
            {{ skill }}
          </span>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
section {
  animation: slideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<script setup>
const educationList = [
  {
    id: 1,
    institution: 'Superior University, Lahore',
    degree: 'Bachelor of Computer Science',
    period: '2023 – Present',
    grade: '3.01 CGPA',
    gradeColor: 'from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 border-purple-500/20',
    isCurrent: true,
    icon: '🎓'
  },
  {
    id: 2,
    institution: 'Intermediate (Pre-Engineering)',
    degree: 'BISE DG Khan',
    period: '2020 – 2022',
    grade: '90% Inter',
    gradeColor: 'from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    isCurrent: false,
    icon: '📖'
  },
  {
    id: 3,
    institution: 'Matriculation',
    degree: 'BISE DG Khan',
    period: '2018 – 2020',
    grade: '83% Matric',
    gradeColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    isCurrent: false,
    icon: '🏫'
  }
]
</script>

<template>
  <div class="min-h-screen bg-[#f8fafc] dark:bg-[#05070a] py-10 px-4 md:px-8">
    <div class="max-w-7xl mx-auto space-y-10">
      
      <!-- Header -->
      <div class="flex items-start gap-5 mb-10">
        <div class="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        </div>
        <div>
          <h1 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none mb-1">Education</h1>
          <p class="text-sm font-medium text-slate-500 dark:text-slate-400">My academic journey</p>
        </div>
      </div>

      <!-- Timeline Container -->
      <div class="relative ml-10 md:ml-12 border-l-2 border-slate-200 dark:border-slate-800 space-y-10 pb-10">
        
        <div 
          v-for="(edu, index) in educationList" 
          :key="edu.id"
          class="relative pl-12 group"
        >
          <!-- Timeline Node (Icon) -->
          <div class="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center text-lg shadow-sm z-10 group-hover:border-blue-500 transition-colors">
            {{ edu.icon }}
          </div>

          <!-- Education Card -->
          <div class="bg-white dark:bg-[#0b0f1a] rounded-[2rem] p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group-hover:border-blue-500/20">
            <!-- Glow Decoration -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -mr-32 -mt-32"></div>

            <div class="relative z-10 space-y-6">
              <!-- Top Row: Grade Badge & Current Badge -->
              <div class="flex justify-between items-start">
                <div :class="['px-4 py-1.5 rounded-2xl bg-gradient-to-br border font-black text-xs tracking-tight shadow-sm', edu.gradeColor]">
                  {{ edu.grade }}
                </div>
                <div v-if="edu.isCurrent" class="px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">
                  Current
                </div>
              </div>

              <!-- Main Info -->
              <div class="space-y-2">
                <h2 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-blue-500 transition-colors">
                  {{ edu.institution }}
                </h2>
                <p class="text-base font-bold text-slate-500 dark:text-slate-400">
                  {{ edu.degree }}
                </p>
              </div>

              <!-- Period -->
              <div class="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                {{ edu.period }}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.group:hover .absolute.z-10 {
  @apply scale-110 border-blue-500 shadow-lg shadow-blue-500/10;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.group {
  animation: slideIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
</style>

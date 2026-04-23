
<script setup>
import { ref, onMounted } from 'vue'
import axios from "axios";


const name = ref("");
const email = ref("");
const message = ref("");

const loading = ref(false);

/* =========================
   SEND MESSAGE FUNCTION
========================= */
const sendMessage = async () => {
  if (!name.value || !email.value || !message.value) {
    alert("Please fill all fields");
    return;
  }

  try {
    loading.value = true;

    console.log("Sending message...");

    const res = await axios.post("http://localhost:5000/api/messages", {
      name: name.value,
      email: email.value,
      message: message.value,
    });

    console.log("SUCCESS:", res.data);

    alert("Message sent successfully!");

    // reset form
    name.value = "";
    email.value = "";
    message.value = "";
  } catch (error) {
    console.log("ERROR:", error);
    alert("Failed to send message. Check backend.");
  } finally {
    loading.value = false;
  }
};

/* =========================
   UI STATE (NAV SCROLL & MOBILE MENU)
========================= */
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 50;
  });
});

/* =========================
   FUNCTIONS
========================= */
const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const scrollToAndClose = (id) => {
  scrollTo(id);
  isMobileMenuOpen.value = false;
};


const skills = {
  Backend: ['PHP','Laravel', 'Livewire'],
  Frontend: ['HTML','CSS','Bootstrap','Tailwind CSS','JavaScript','Vue.js'],
  Database: ['MySQL','SQL'],
  Programming: ['C++','OOP','DSA']
}

const projects = [
  {
    title: 'Pharmacy Control System',
    description: 'A modern Pharmacy Management System built with Laravel and Livewire 3 to streamline medicine inventory, sales, and billing processes with real-time updates and an intuitive user interface.',
    tech: ['Laravel', 'Livewire','MySQL'],
    demo: '#',
    github: 'https://github.com/Adeel-fullstack/Pharmacy-control-system'
  },
  {
    title: 'Inventory Management System',
    description: 'A dynamic Inventory Management System built with Laravel and Livewire to efficiently manage products, stock levels, and business operations. The system provides real-time updates, streamlined CRUD operations, and an intuitive dashboard for tracking inventory performance.',
    tech: ['Laravel', 'Livewire', 'MySQL'],
    demo: '#',
    github: 'https://github.com/Adeel-fullstack/Inventory-management-system'
  },
  {
    title: 'Bus & Ticket Management System',
    description: 'A terminal-based C++ application leveraging Data Structures and Algorithms to efficiently manage bus routes and passenger ticketing. The system includes features for route tracking, seat booking, cancellations, and real-time data handling, demonstrating strong problem-solving and programming skills.',
    tech: ['C++','Programming Fundamentals' ,'Data Structure & Algorithms'],
    demo: '#',
    github: 'https://github.com/Adeel-fullstack/Ticket-booking-system'
  },

 {
    title: "Skill Sprint Learning Platform UI",
    description: "A responsive and modern learning platform UI built with Vue 3 and Tailwind CSS, emphasizing a clean, intuitive design and smooth, interactive user experience. The interface showcases modular components, responsive layouts, and visually appealing elements, making it suitable for engaging and accessible online learning.",
    tech: ["Vue 3", "Tailwind CSS", "Vite"],
    demo: "#", // or connect to your screenshot modal
    github: "https://github.com/Adeel-fullstack/Skill_sprint_UI"
  }

]

const experience = [
  {
    role: 'Technical Associate',
    company: 'Skill Sprint Community',
    period: 'Current',
    description: 'Currently working as a Technical Associate. Assisting in technical tasks, development activities, and problem-solving. Gaining hands-on experience in real-world development workflows.'
  },

  {
   role: 'CNCF Volunteer',
    company: 'CNCF',
    period: 'Current',  
    description: 'Volunteer at the Cloud Native Computing Foundation (CNCF), contributing to event management, coordination, and community engagement. Assisted in organizing technical events, workshops, and meetups to support the CNCF community and promote cloud-native technologies.'
  },
    {
      role:'Active Member-Superior Debating Society ',
      company: 'Superior University',
      period: 'current',
      description:'Active member of the Superior Debating Society, regularly participating in debates and discussions.Represented as a Country Delegate in the Security Council at the SUMUN conference.Developed strong communication, critical thinking, and diplomatic skills through active engagement.' 

    },
  {
    role: 'Web Development Intern',
    company: 'WEBEDUCATORZ',
    period: 'Completed',
    description: 'Completed internship in web development. Worked extensively with Laravel and Livewire. Gained foundational experience in building real-world applications.'
  }
]



const certificates = [
  {
    title: 'Internship Completion Certificate',
    description: 'Successfully completed internship demonstrating practical experience in web development and software engineering tasks.',
    img: '/web.png'
  },
  {
    title: 'Sql Server Certificate',
    description: 'Completed SQL Server training covering database design, queries, joins, and data management fundamentals.',
    img: '/sql.png'
  },
  {
    title: 'C++ Course Completion Certificate',
    description: 'Completed C++ programming course with strong understanding of OOP concepts, data structures, and problem-solving.',
    img: '/saylor.png'
  },
  {
    title: 'GDG Cloud Meetup Lahore',
    description: 'Participated in Google Developer Groups Cloud Meetup Lahore and gained insights into cloud technologies and modern development practices.',
    img: '/cloud.png'
  },
  {
    title: 'Superior Debate Session (SUMUN)',
    description: 'Participated in a formal debate session enhancing public speaking, critical thinking, and communication skills.',
    img: '/debate.png'
  },
  {
    title: 'Superior Cloud Event',
    description: 'Attended cloud computing event focused on AI, cloud infrastructure, and emerging technologies in modern software systems.',
    img: '/AI.jpeg'
  }
]
</script>

<template>
  <div class="min-h-screen bg-secondary relative selection:bg-primary/30 selection:text-emerald-200 font-sans text-gray-300">
    <!-- Navbar -->
    <nav :class="['fixed w-full z-50 transition-all duration-300', isScrolled || isMobileMenuOpen ? 'bg-secondary/90 backdrop-blur-md shadow-lg shadow-black/20 py-4' : 'bg-transparent py-6']">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-white tracking-tight uppercase">MA<span class="text-primary">.</span></a>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8 text-sm font-medium">
          <button @click="scrollTo('about')" class="hover:text-primary transition-colors">About</button>
          <button @click="scrollTo('education')" class="hover:text-primary transition-colors">Education</button>
          <button @click="scrollTo('skills')" class="hover:text-primary transition-colors">Skills</button>
          <button @click="scrollTo('projects')" class="hover:text-primary transition-colors">Projects</button>
          <button @click="scrollTo('experience')" class="hover:text-primary transition-colors">Experience</button>
          <button @click="scrollTo('certificates')" class="hover:text-primary transition-colors">Certificates</button>
        </div>
        <router-link to="/admin" class="hidden md:block btn-primary py-2 px-4 text-sm">view</router-link>

        <!-- Mobile Menu Button -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-gray-300 hover:text-white focus:outline-none">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-xl py-4 flex flex-col items-center gap-6">
        <button @click="scrollToAndClose('about')" class="text-gray-300 hover:text-primary transition-colors font-medium">About</button>
        <button @click="scrollToAndClose('education')" class="text-gray-300 hover:text-primary transition-colors font-medium">Education</button>
        <button @click="scrollToAndClose('skills')" class="text-gray-300 hover:text-primary transition-colors font-medium">Skills</button>
        <button @click="scrollToAndClose('projects')" class="text-gray-300 hover:text-primary transition-colors font-medium">Projects</button>
        <button @click="scrollToAndClose('experience')" class="text-gray-300 hover:text-primary transition-colors font-medium">Experience</button>
        <button @click="scrollToAndClose('certificates')" class="text-gray-300 hover:text-primary transition-colors font-medium">Certificates</button>
        <router-link to="/admin" class="btn-primary py-2 px-8 text-sm mt-2" @click="isMobileMenuOpen = false">Admin Panel</router-link>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-screen">
      <!-- Background Decorations -->
      <div class="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden pointer-events-none">
        <div class="absolute top-[20%] left-[20%] w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[20%] right-[20%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col-reverse lg:flex-row items-center gap-16">
        <div class="flex-1 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-sm font-medium text-emerald-400 mb-6">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>
          <h1 class="text-4xl lg:text-6xl font-light tracking-tight text-white/90 mb-4">
            Hi, I'm <span class="block mt-4 text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 font-orbitron tracking-normal uppercase">Muhammad Adeel</span>
          </h1>
          <h2 class="text-2xl lg:text-3xl font-medium text-gray-400 mb-8 tracking-wide">
            Full Stack Developer <span class="text-lg lg:text-2xl opacity-60 ml-2">(Laravel & Vue Specialist)</span>
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-[1.8]">
            I build responsive and high-performance web applications with clean and efficient code. I create user-friendly interfaces and develop reliable backend systems, ensuring everything works smoothly together.
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button @click="scrollTo('projects')" class="btn-primary w-full sm:w-auto">
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </button>
            <button @click="scrollTo('contact')" class="btn-secondary w-full sm:w-auto">Contact Me
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>

            </button>
          </div>
        </div>
        <div class="flex-1 flex flex-col items-center lg:items-end justify-center relative">
          <div class="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-primary to-blue-500 shadow-2xl shadow-primary/10">
             <div class="w-full h-full rounded-full bg-secondary overflow-hidden">
                <img src="/portfoliopic.png" alt="Muhammad Adeel" class="w-full h-full object-cover mix-blend-lighten" />
             </div>
          </div>
          
          <!-- Contact Badges -->
          <div class="mt-8 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-3 w-full lg:w-auto items-center justify-center">
            <a href="tel:03377249569" class="flex items-center gap-3 bg-gray-800/80 hover:bg-gray-800 border border-gray-700/50 hover:border-emerald-500/50 px-5 py-2.5 rounded-full transition-all duration-300 group shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.033 11.033 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span class="text-gray-300 font-medium text-sm tracking-wide">+923377249569</span>
            </a>
            
            <a href="mailto:adeellaravel12@gmail.com" class="flex items-center gap-3 bg-gray-800/80 hover:bg-gray-800 border border-gray-700/50 hover:border-blue-500/50 px-5 py-2.5 rounded-full transition-all duration-300 group shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span class="text-gray-300 font-medium text-sm tracking-wide">adeellaravel12@gmail.com</span>
            </a>
          </div>
        </div>
        
      </div>
      
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 relative z-10 border-t border-gray-800/50 bg-gray-900/20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
          <div class="flex-1 space-y-6">
            <h2 class="section-title">About Me</h2>
            <p class="text-lg leading-relaxed text-slate-300">
              My journey in software development is driven by a passion for creating meaningful, scalable solutions. With expertise rooted in <strong class="text-emerald-400 font-medium">Laravel</strong> and <strong class="text-emerald-400 font-medium">Vue.js</strong>, I build comprehensive web applications from the database architecture to the interactive user interface.
            </p>
            <p class="text-lg leading-relaxed text-slate-300">
              Currently, I am working as a <strong class="text-white">Technical Associate at Skill Sprint</strong>, where I assist in technical tasks, actively engage in development workflows, and solve real-world problems alongside a talented team. My career goal is to continuously evolve, master modern full-stack architectures, and deliver products that provide exceptional value.
            </p>
          </div>
          <div class="flex-1 w-full grid grid-cols-2 gap-4">
            <div class="card bg-gray-800/80">
              <div class="text-primary text-3xl font-bold mb-2">1+</div>
              <div class="text-sm text-gray-400">Years Active Learning & Development</div>
            </div>
            <div class="card bg-gray-800/80">
              <div class="text-primary text-3xl font-bold mb-2">5+</div>
              <div class="text-sm text-gray-400">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
        
        <!-- Left: Header -->
        <div class="lg:w-1/3">
          <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 uppercase">Education</h2>
          <div class="h-1.5 w-24 bg-emerald-500 mb-8"></div>
          <p class="text-slate-300 leading-relaxed text-lg max-w-sm">
            Acquiring a solid foundation in Computer Science, focusing on modern technologies and software engineering principles at Superior University.
          </p>
        </div>

        <!-- Right: Content -->
        <div class="lg:w-2/3 space-y-12">
          <div class="group">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h3 class="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-wide">
                Bachelor of Computer Science
              </h3>
              <div class="flex items-center gap-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  Currently Studying
                </span>
              </div>
            </div>
            
            <p class="text-xl text-gray-400 font-medium mb-6">
              Superior University <span class="text-gray-700 mx-2">|</span> 2022 – 2027
            </p>

            <div class="bg-gray-800/30 border border-gray-700/50 p-6 rounded-2xl">
              <h4 class="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Focus Areas</h4>
              <div class="flex flex-wrap gap-3">
                <span v-for="course in ['Data Structures', 'Database Systems', 'Web Development','AI Integration']" :key="course" 
                  class="px-4 py-2 rounded-xl bg-secondary text-gray-300 text-sm border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
                  {{ course }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">Technical Expertise</h2>
          <p class="text-slate-300 max-w-2xl mx-auto">A comprehensive toolkit spanning the entire stack, allowing me to build robust, scalable, and responsive applications.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(items, category) in skills" :key="category" class="card group">
            <div class="h-12 w-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-700/50 text-emerald-400">
              <!-- Dynamic Icon placeholder based on category -->
            
              <svg v-if="category === 'Backend'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
</svg>

<svg v-if="category === 'Frontend'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

<svg v-if="category === 'Database'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
</svg>

<svg v-if="category === 'Programming'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
            
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">{{ category }}</h3>
            <ul class="space-y-3">
              <li v-for="skill in items" :key="skill" class="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                <span class="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3"></span>
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 relative z-10 border-t border-gray-800/50 bg-gray-900/20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">Featured Projects</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">A selection of my best work, demonstrating my ability to build full-stack solutions.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" class="card flex flex-col h-full bg-gradient-to-b from-gray-800/60 to-gray-800/30">
            <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{{ project.title }}</h3>
            <p class="text-gray-400 mb-6 flex-grow leading-relaxed">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-8">
              <span v-for="tech in project.tech" :key="tech" class="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-700/50 text-emerald-300 border border-emerald-900/30">
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-4 mt-auto">
              <a :href="project.demo" class="flex-1 text-center py-2.5 bg-primary/10 hover:bg-primary/20 text-emerald-400 font-medium rounded-lg transition-colors border border-primary/20 hover:border-primary/50 text-sm">Live Demo</a>
              <a :href="project.github" class="flex-1 text-center py-2.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg transition-colors border border-white/10 hover:border-white/20 text-sm flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience & Activities Section -->
    <section id="experience" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <!-- Professional Experience -->
        <div>
          <h2 class="section-title">Experience</h2>
          <div class="relative border-l border-gray-700 ml-3 mt-8 space-y-12">
            <div v-for="(job, index) in experience" :key="index" class="relative pl-8">
              <span class="absolute -left-3.5 top-1 h-7 w-7 rounded-full bg-gray-800 border-4 border-secondary flex items-center justify-center">
                 <span class="h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <div class="flex flex-wrap items-center gap-4 mb-2">
                <h3 class="text-xl font-bold text-white">{{ job.role }}</h3>
                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 text-emerald-400 border border-gray-700">{{ job.period }}</span>
              </div>
              <div class="text-md font-medium text-blue-400 mb-4">{{ job.company }}</div>
              <p class="text-gray-400 leading-relaxed">{{ job.description }}</p>
            </div>
          </div>
        </div>

        <!-- Activities and Leadership -->
       
      </div>
    </section>

    <!-- Certificates Section -->
    <section id="certificates" class="py-24 relative z-10 border-t border-gray-800/50 bg-gray-900/20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">Certificates & Roles</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">Professional certifications and community leadership roles.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="cert in certificates" :key="cert.title" class="card p-0 overflow-hidden group">
            <div class="h-56 w-full overflow-hidden relative border-b border-gray-700">
              <div class="absolute inset-0 bg-secondary/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img :src="cert.img" :alt="cert.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-3">{{ cert.title }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">{{ cert.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
   <section id="contact" class="py-24 relative z-10">
    <div class="max-w-3xl mx-auto px-6 lg:px-8 text-center">

      <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
        Let's Build Something
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
          Together
        </span>
      </h2>

      <p class="text-lg text-gray-400 mb-12">
        Feel free to reach out if you're looking for a developer, have a question, or simply want to connect.
      </p>

      <!-- CONTACT FORM -->
      <form
        class="card bg-gray-800/80 text-left p-8 md:p-10 mb-12"
        @submit.prevent="sendMessage"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          <!-- NAME -->
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Name</label>
            <input
              v-model="name"
              type="text"
              placeholder="John Doe"
              class="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          <!-- EMAIL -->
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="john@example.com"
              class="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
        </div>

        <!-- MESSAGE -->
        <div class="mb-8">
          <label class="block text-sm font-medium text-gray-400 mb-2">Message</label>
          <textarea
            v-model="message"
            rows="4"
            placeholder="How can I help you?"
            class="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
          ></textarea>
        </div>

        <!-- BUTTON -->
        <button type="submit" class="btn-primary w-full py-4 text-lg">Send Message</button>
      </form>

      <!-- SOCIAL LINKS -->
      <div class="flex justify-center gap-6 mt-8">
        <a href="https://github.com/Adeel-fullstack" target="_blank" class="text-gray-400 hover:text-emerald-400 transition-colors group">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="group-hover:scale-110 transition-transform" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/mohammad-adeel-883518353/" target="_blank" class="text-gray-400 hover:text-blue-400 transition-colors group">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="group-hover:scale-110 transition-transform" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        </a>
      </div>

    </div>
  </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
      <p>&copy; {{ new Date().getFullYear() }} Muhammad Adeel. All rights reserved.</p>
      <p class="mt-2 text-xs">Developed with Vue.js & Tailwind CSS</p>
    </footer>
  </div>
</template>

<style scoped>
/* Scoped styles can go here if needed, but we rely mostly on Tailwind */
</style>


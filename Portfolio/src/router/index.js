import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../pages/Home.vue";
import AboutPage from "../pages/AboutPage.vue";
import SkillsPage from "../pages/SkillsPage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import EducationPage from "../pages/EducationPage.vue";
import CertificationsPage from "../pages/CertificationsPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import Admin from "../pages/Admin.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "",          name: "Home",           component: Home },
      { path: "about",     name: "About",          component: AboutPage },
      { path: "skills",    name: "Skills",         component: SkillsPage },
      { path: "projects",  name: "Projects",       component: ProjectsPage },
      { path: "education", name: "Education",      component: EducationPage },
      { path: "certifications", name: "Certifications", component: CertificationsPage },
      { path: "contact",   name: "Contact",        component: ContactPage },
    ],
  },
  {
    // Admin lives outside Layout — standalone page, logic untouched
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;

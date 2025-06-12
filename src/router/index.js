import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Callback from '../components/Callback.vue';
import ProjectDetails from '../components/projectdetails.vue'; // Note: Renamed to PascalCase for convention

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/project-details', // A more descriptive path
    name: 'ProjectDetails',
    component: ProjectDetails
  }
  // {
  //   path: '/', // Optional: A default route, e.g., redirect to login or project details
  //   redirect: '/project-details' // Or '/login' if login is the first page
  // }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
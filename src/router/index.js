import Vue from 'vue'; 
import VueRouter from 'vue-router'; 
import Home from '@/views/Home.vue'; 
import About from '@/views/About.vue'; 
import Contact from '@/views/contact.vue';
import RandomFacts from '@/views/Random-Facts.vue';
 
Vue.use(VueRouter); 
const routes = [ 
  { 
      path: '/', name: 'Home', component: Home 
  }, 
  { 
      path: '/about', name: 'About', component: About 
  },
  {
      path: '/contact', name: 'Contact', component: Contact
  },
  {
      path: '/Random-Facts', name: 'Random Facts', component: RandomFacts
  },
  {
    path: '*', name: 'Not-Found', component: 'NotFound'
  }
]; 
const router = new VueRouter({ 
  mode: 'history', routes 
}); 
export default router; 

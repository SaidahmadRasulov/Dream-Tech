import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projects from '@/views/Projects.vue'
import Comment from '@/views/Comment.vue'
import Contact from '@/views/Contact.vue'
import Order from '@/views/Order.vue'
import Single from '@/views/Single.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'Project',
      component: Projects
    },
    {
      path: '/comments',
      name: 'Comments',
      component: Comment
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/projects/:id',
      name: 'Single Project',
      component: Single
    }
  ]
})

export default router

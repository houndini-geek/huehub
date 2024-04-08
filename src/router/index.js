import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ThemesView from '../views/ThemesView.vue'
import GroupsView from '../views/GroupsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/themes/:themes',
      name: 'themes',
      props: true,
      component: ThemesView
    },
    {
      path: '/groups/:groups',
      name: 'groups',
      props: true,
      component: GroupsView
    }
    
  ]
})

export default router

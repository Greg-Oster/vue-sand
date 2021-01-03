import { createRouter, createWebHistory } from 'vue-router'
import list from '../projects/routing/components/list.vue'
import item from '../projects/routing/components/item.vue'

const routes = [
  {
    path: '/list',
    name: 'Some list idk',
    component: list
  },
  {
    path: '/item',
    name: 'Some item',
    component: item
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

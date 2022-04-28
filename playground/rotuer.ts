import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import ScrollingTerminal from "./ScrollingTerminal.vue"
import BasicTerminal from "./BasicTerminal.vue"
import IntersectionObserver from "./IntersectionObserver.vue"

const routes: RouteRecordRaw[] = [
  { path: "/", component: BasicTerminal },
  { path: "/autoscroll", component: ScrollingTerminal },
  { path: "/intersection-observer", component: IntersectionObserver },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

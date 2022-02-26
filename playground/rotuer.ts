import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import ScrollingTerminal from "./ScrollingTerminal.vue"
import BasicTerminal from "./BasicTerminal.vue"

const routes: RouteRecordRaw[] = [
  { path: "/", component: BasicTerminal },
  { path: "/autoscroll", component: ScrollingTerminal },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

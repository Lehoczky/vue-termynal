import "./styles.css"

import VueTermynalPlugin from "@lehoczky/vue-termynal"
import { createApp } from "vue"

import App from "./App.vue"
import { router } from "./router"

createApp(App).use(router).use(VueTermynalPlugin).mount("#app")

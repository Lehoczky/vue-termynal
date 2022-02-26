import { createApp } from "vue"
import { router } from "./rotuer"
import App from "./App.vue"
import VueTermynalPlugin from "../src"

createApp(App).use(router).use(VueTermynalPlugin).mount("#app")

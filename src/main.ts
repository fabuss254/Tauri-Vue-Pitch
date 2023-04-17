// Vue
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vue router
import * as VueRouter from "vue-router";
import routes from "./routes/Index.js";

// Material icons
import materialIcons from '@dbetka/vue-material-icons';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
})

const VueApp = createApp(App)

VueApp.use(router)
VueApp.use(materialIcons)
VueApp.mount('#app')

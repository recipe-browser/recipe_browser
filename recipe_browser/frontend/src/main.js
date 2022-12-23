import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import './input.css'

import store from './store'
import router from './router'
import App from './App.vue'

import './axios'

const pinia = createPinia()

pinia.use(({store}) => {
    store.router = markRaw(router)
})

createApp(App)
    .use(pinia)
    .use(store)
    .use(router)
    .mount('#app')

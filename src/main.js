import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import createStore from '../src/store/index.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min'

const app = createApp(App)
app.use(createStore)
app.use(router)
app.mount('#app')

import { createApp } from 'vue'
import Wujie from 'wujie-vue3'
import './style.css'
import App from './App.vue'

import { b } from 'common'

const app = createApp(App)
app.use(Wujie)
app.mount('#app')

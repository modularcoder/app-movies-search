import { createApp } from 'vue'

import 'normalize.css/normalize.css'
import api from '@/_api'
import App from './App.vue'
;(async () => {
  await api.init()
  createApp(App).mount('#app')
})()

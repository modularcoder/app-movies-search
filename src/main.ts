import { createApp } from 'vue'

import 'normalize.css/normalize.css'
import api from '@/_api'
import App from './App.vue'

// Init the api and mocks server before mounting the application
;(async () => {
  await api.init()
  createApp(App).mount('#app')
})()

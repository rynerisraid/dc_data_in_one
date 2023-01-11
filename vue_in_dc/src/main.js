import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import naive from 'naive-ui'

import { createDiscreteApi } from 'naive-ui'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080"

// 独立API
const { message, notification, dialog } = createDiscreteApi(["message", "dialog", "notification"])

const app = createApp(App)

// 全局提供属性
app.provide("axios", axios)
app.provide("message", message)
app.provide("notification", notification)
app.provide("dialog", dialog)
app.provide("server_url", axios.defaults.baseURL )

app.use(createPinia())
app.use(router)
app.use(naive)
app.mount('#app')

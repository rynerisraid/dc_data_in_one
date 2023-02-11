import App from './App.vue'
import { createApp } from 'vue'
import router from  './router'
import 'uno.css'

const app = createApp(App)

Object.values(import.meta.glob("./modules/*.ts", {eager:true})).forEach((item:any)=>{
    item.install?.({app})
});

app.use(router)
app.mount('#app')
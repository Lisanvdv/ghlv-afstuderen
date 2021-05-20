import { Vue, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BotUI from 'botui'
// import './components/botui'
import './build/botui-theme-default'
import './build/botui.min'
import './build/botui.mis'
const botui = BotUI('my-botui-app', {
    vue: Vue // pass the dependency.
  })

  // Just to 
  console.log(botui)

createApp(App).use(router).mount('#app')

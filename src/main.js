import { createApp } from 'vue'
import { FocusTrap } from 'focus-trap-vue'
import App from './App.vue'

createApp(App)
    .component('FocusTrap', FocusTrap)
    .mount('#app')


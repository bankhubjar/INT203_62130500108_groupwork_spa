import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import itemcart from './components/UI/Itemcart-component.vue'
import Basecard from './components/UI/Basecard.vue'

const app = createApp(App)
app.component('item-cart',itemcart)
app.component('Base-Card',Basecard)
app.use(router)
app.mount('#app')

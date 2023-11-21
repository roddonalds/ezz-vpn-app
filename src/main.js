import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createStore } from 'vuex'

import Store from './stores/index.js'

const app = createApp(App)
const store = createStore(Store)

registerPlugins(app)

app.use(store)
app.mount('#app')

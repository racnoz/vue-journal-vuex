// El main es el punto más alto de mi aplicación, aquí es donde se indica los servicios de Vue con los que va a trabajar y también se monta
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import '@/styles/styles.scss'

createApp(App)
    .use(store) // Aquí uso el store global (que anida los stores de cada módulo), así los componentes tienen acceso a el.
    .use(router) // Aquí dejo indicado que voy a trabajar con el router vue
    .mount('#app') // Aquí monto la app con todos los servicios que voy a usar. 

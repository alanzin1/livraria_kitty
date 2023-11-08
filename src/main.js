import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; // Importe o Vue Router
import router from './rotas/router'; // Importe o arquivo de configuração do Vue Router

createApp(App).use(VueRouter).use(router).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';

// Font Awesome Setup for Vue 3
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons' 

library.add(faWpexplorer)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // Register FontAwesomeIcon globally
app.use(router);
app.use(BackToTop);
app.mount('#app');

const feather = require('feather-icons');
feather.replace();

const appTheme = localStorage.getItem('theme');

// Check and apply theme
if (appTheme === 'dark' && document.querySelector('body').classList.contains('app-theme')) {
    document.querySelector('body').classList.add('bg-primary-dark');
} else {
    document.querySelector('body').classList.add('bg-secondary-light');
}

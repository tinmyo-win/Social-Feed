import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App).use(vuetify)

router.beforeEach((to, from, next) => {
    const requiresAuth = to.meta.requiresAuth;
    const isLoggedIn = !!localStorage.getItem('token');

    if (requiresAuth && !isLoggedIn) {
        next('/login'); // Redirect to the login page if the user is not authenticated
    } else {
        next(); // Continue to the requested route
    }
});

app.use(router)

app.mount('#app')

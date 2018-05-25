import Vue from 'vue'
import VueRouter from 'vue-router'

import components from './globalComponents'

Vue.use(VueRouter)

import App from './components/app'

import routes from './routes'
const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

let vm = new Vue({
    el: '#main',
    router,
    components: { App }
})

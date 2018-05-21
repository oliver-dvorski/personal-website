import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/app'

import routes from './routes'
const router = new VueRouter({ routes })

let vm = new Vue({
    el: '#main',
    router,
    components: { App }
})


require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/Myfooter.vue');


// 1. Define route components.
let Home = require('./components/Home.vue');
let About = require('./components/About.vue');



// 2. Define some routes
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
]

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
	//mode: 'history',
  routes // short for `routes: routes`
})



const app = new Vue({
    el: '#app',
    router,
    components:{Myheader, Myfooter}
});

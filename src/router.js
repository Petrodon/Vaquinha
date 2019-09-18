import Vue from 'vue'
import Router from 'vue-router'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'

import Home from './views/Home.vue'
import ProjectSearch from './views/ProjectSearch.vue'
import Project from './views/Project.vue'
import Card from './views/Card.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignIn
        },
        {
            path: '/project',
            name: 'project',
            component: ProjectSearch
        },
        {
            path: '/project/:id',
            component: Project,
            props: true
        },
        {
            path: '/card',
            name: 'card',
            component: Card
        }
    ]
})
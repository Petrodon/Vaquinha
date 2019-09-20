import Vue from 'vue'
import Router from 'vue-router'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'

import Home from './views/Home.vue'
import ProjectSearch from './views/ProjectSearch.vue'
import Project from './views/Project.vue'
import NewProject from "./views/NewProject.vue"
import Perfil from "./views/Perfil.vue"


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
            path: "/perfil",
            name: "perfil",
            component: Perfil
        },
        {
            path: "/new",
            name: "new",
            component: NewProject
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
        }
    ]
})
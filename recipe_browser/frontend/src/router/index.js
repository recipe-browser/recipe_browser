import { createRouter, createWebHistory } from "vue-router"
import Login from '../views/Login.vue'
import Recipes from '../views/Recipes.vue'
import RequestPassword from "../views/RequestPassword.vue"
import ResetPassword from "../views/ResetPassword.vue"
import SignUp from '../views/SignUp.vue'


const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: SignUp
    },
    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword,
        
    },
    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword,
        meta: {
          requiresGuest: true
        }
    },
    {
        path: '/recipes',
        name: 'recipes',
        component: Recipes
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
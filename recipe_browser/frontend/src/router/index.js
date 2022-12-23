import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Recipes from '../views/Recipes.vue'
import ForgotPassword from "../views/ForgotPassword.vue"
import ResetPassword from "../views/ResetPassword.vue"
import Register from '../views/Register.vue'
import MyAccount from '../views/MyAccount.vue'
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/forgot-password',
        name: 'forgotPassword',
        component: ForgotPassword,
        
    },
    {
        path: '/password-reset/:token',
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
    {
        path: '/my_account',
        name: 'myAccount',
        component: MyAccount
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
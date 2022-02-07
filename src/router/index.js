import {createRouter,createWebHistory} from 'vue-router'
import DepartmentsPage from '@/views/DepartmentsPage.vue'
import EmployeesPage from "@/views/EmployeesPage.vue";
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
    ,
    {
        path: '/departments',
        name: 'DepartmentsPage',
        component: DepartmentsPage
    },
    {
        path: '/employees',
        name: 'EmployeesPage',
        component: EmployeesPage
    },

    {
        path: '/about',
        name: 'About',
        component: About
    },

    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import FreeImage from '../views/FreeImage.vue'
import PremiumImage from '../views/PremiumImage.vue'
import MovieDetail from '../views/MovieDetail.vue'
import createStore from '../store/index.js'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/free-image',
        name: 'FreeImage',
        component: FreeImage
    },
    {
        path: '/premium-image',
        name: 'PremiumImage',
        component: PremiumImage,
        meta: {
            authPage: true
        }
    },
    {
        path: '/movie-detail',
        name: 'MovieDetail',
        component: MovieDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // if (to.meta.authPage && this.$store.state.isLogin == false) {
    if (to.meta.authPage && localStorage.getItem('isLogin') !== "true") {
        next("/login")
    } else {
        next()
    }
})

export default router
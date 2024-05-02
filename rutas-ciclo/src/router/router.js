import { createRouter, createWebHashHistory } from "vue-router"
//import AboutPage from "@/modules/pokemon/pages/AboutPage.vue"
// import ListPage from "@/modules/pokemon/pages/ListPage.vue"
// import PokemonPage from "@/modules/pokemon/pages/PokemonPage.vue"
// import NoPageFound from "@/modules/shared/pages/NoPageFound.vue"


//Definición de rutas
const routes = [
    {path: '/', component: () => import(/*webpackChunkName: "ListPage"*/ '@/modules/pokemon/pages/ListPage')},
    {path: '/about', component: () => import(/*webpackChunkName: "AboutPage"*/ '@/modules/pokemon/pages/AboutPage')},
    {path: '/id', component: () => import(/*webpackChunkName: "PokemonPage"*/ '@/modules/pokemon/pages/PokemonPage')},
    {path: '/:pathMatch(.*)*', component: () => import(/*webpackChunkName: "NotFoundPage"*/ '@/modules/shared/pages/NoPageFound')}
]

//Configurar modo historia
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
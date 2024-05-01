import { createRouter, createWebHashHistory } from "vue-router"
import AboutPage from "@/modules/pokemon/pages/AboutPage.vue"
import ListPage from "@/modules/pokemon/pages/ListPage.vue"
import PokemonPage from "@/modules/pokemon/pages/PokemonPage.vue"
import NoPageFound from "@/modules/shared/pages/NoPageFound.vue"


//Definición de rutas
const routes = [
    {path: '/', component: ListPage},
    {path: '/about', component: AboutPage},
    {path: '/id', component: PokemonPage},
    {path: '/:pathMatch(.*)*', component: NoPageFound}
]

//Configurar modo historia
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
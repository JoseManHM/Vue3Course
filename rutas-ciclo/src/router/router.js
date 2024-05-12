import { createRouter, createWebHashHistory } from "vue-router"
import isAuthenticatedGuard from "./auth-guard"
//import AboutPage from "@/modules/pokemon/pages/AboutPage.vue"
// import ListPage from "@/modules/pokemon/pages/ListPage.vue"
// import PokemonPage from "@/modules/pokemon/pages/PokemonPage.vue"
// import NoPageFound from "@/modules/shared/pages/NoPageFound.vue"


//Definición de rutas
const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/*webpackChunkName: "PokemonLayout"*/ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/*webpackChunkName: "ListPage"*/ '@/modules/pokemon/pages/ListPage')
            },
            {
                path: 'about', 
                name: 'pokemon-about',
                component: () => import(/*webpackChunkName: "AboutPage"*/ '@/modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemonid/:id', 
                name: 'pokemon-id', 
                component: () => import(/*webpackChunkName: "PokemonPage"*/ '@/modules/pokemon/pages/PokemonPage'), 
                props: (route) => {
                    const id = Number(route.params.id)
                    return isNaN(id) ? {id:1} : {id}
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-about' }
            }
        ]
    },
    {
        path: '/dragon',
        name: 'dbz',
        beforeEnter: [isAuthenticatedGuard],
        component: () => import(/*webpackChunkName: "DBZ"*/ '@/modules/dbz/layouts/DragonBollLayout'),
        children: [
           {
                path: 'dbz',
                name: 'dbz-characteres',
                beforeEnter: [isAuthenticatedGuard],
                component: () => import(/*webpackchunkName: "characteresDBZ"*/ '@/modules/dbz/pages/Characters')
           },
           {
                path: 'about',
                name: 'dbz-about',
                beforeEnter: [isAuthenticatedGuard],
                component: () => import(/*webpackChunkName: "aboutDBZ"*/ '@/modules/dbz/pages/About')
           },
           {
                path: '',
                redirect: { name: 'dbz-characteres' }
           }
        ]
    },
    {
        path: '/:pathMatch(.*)*', 
        component: () => import(/*webpackChunkName: "NotFoundPage"*/ '@/modules/shared/pages/NoPageFound')
    }
]

//Configurar modo historia
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// // Guard Global - Sincrono
// router.beforeEach((to, from, next) => {
//     console.log(to, from, next)
//     const random = Math.random() * 100
//     if(random > 50){
//         console.log("Autenticado")
//         next()
//     }else{
//         console.log(random, " Bloqueado por el beforeEach Guard")
//         next({name: 'pokemon-home'})
//     }
// })

// const canAccess = () => {
//     return new Promise(resolve => {
//         const random = Math.random() * 100
//         if(random > 50){
//             console.log("Autenticado - canAccess")
//             resolve(true)
//         }else{
//             console.log(random, " Bloqueado por el beforeEach Guard - canAccess")
//             resolve(false)
//         }
//     })
// }

// router.beforeEach(async(to, from, next) => {
//     const authorized = await canAccess()
//     authorized ? next() : next({name: 'pokemon-home'})
// })

export default router
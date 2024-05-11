<template>
    <div>
        <!-- <router-link :to="{name: 'home'}">Pokemon List</router-link>
        <router-link :to="{name: 'pokemon-id', params: {id: 85}}">Pokemon Id</router-link>
        <router-link :to="{name: 'about'}">About</router-link> -->
        <CustomLink
            v-for="link in links" :key="link.to" :link="link"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default{
    data(){
        return {
            links: [
                {to: 'pokemon-home', name: 'Pokemons'},
                {to: 'pokemon-id', name: 'Por ID', id: 10},
                {to: 'pokemon-about', name: 'Pokemon About'},
                {to: 'dbz-characteres', name: 'Personajes'},
                {to: 'dbz-about', name: 'DBZ About'},
                {to: 'https://google.com', name: 'Google'}
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('@/modules/shared/components/CustomLink'))
    }
}
</script>

<style scoped>
div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2C3E50;
    margin: 0 10px;
}

/* div .router-link-exact-active {
    color: #42B983
} */
</style>
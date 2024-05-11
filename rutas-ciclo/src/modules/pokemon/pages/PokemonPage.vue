<template>
    <h1>Pokemon Page <span># {{ id }}</span></h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <p>{{ pokemon.name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            pokemon: null
        }
    },
    created() {
        this.getPokemon()
    },
    methods: {
        async getPokemon(){
            try{
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( r => r.json() )
                console.log(pokemon)
                this.pokemon = pokemon
            }catch(error){
                console.log('No hay nada que hacer aquí: ', error);
                this.$router.push('/')
            }
        }
    },
    watch: {
        id(){
            console.log(this.id)
            this.getPokemon()
        }
    }
}
</script>
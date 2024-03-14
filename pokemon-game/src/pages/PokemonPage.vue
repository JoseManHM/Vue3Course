<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>¿Quien es este pokemon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOptions :pokemons="pokemonArr" @selection-pokemon="checkAnswer($event)"/>

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame()">Nuevo Juego</button>
        </template>
    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonsOptions from '@/helpers/getPokemonOptions';

export default {
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data(){
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods:{
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonsOptions()
            const randomNum = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[randomNum]
        },
        checkAnswer(selectedId){
            this.showPokemon = true
            this.showAnswer = true
            if(selectedId == this.pokemon.id){
                this.message = `Correcto, ${this.pokemon.name} es la respuesta correcta`
            }else{
                this.message = `Ups, era ${this.pokemon.name}`
            }
        },
        newGame(){
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    mounted(){
        this.mixPokemonArray()
    }
}
</script>
<template>
    <div class="pokemon-container">
        <img :src="imgSrc" alt="pokemon" class="hidden-pokemon">
        <img :src="imgSrc" alt="pokemon" class="fade-in" v-if="showPokemon">
    </div>
</template>

<script>
export default {
    name: 'PokemonPicture',
    computed: {
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    },
    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    }
}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
}
img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon{
    filter: brightness(0);
}
</style>
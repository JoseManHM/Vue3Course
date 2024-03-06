<template>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPicture></PokemonPicture>
    <PokemonOptions></PokemonOptions>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
export default {
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions
    }
}
</script>
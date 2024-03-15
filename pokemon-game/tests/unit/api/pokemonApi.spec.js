import pokemonApi from "@/api/pokemonApi"

describe('pokemonAPi', () => {
    test('Axios debe de estar configurado con el API de pokemon', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})
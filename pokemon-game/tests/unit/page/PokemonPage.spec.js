import { shallowMount, Mount, mount } from "@vue/test-utils"
import PokemonPage from "@/pages/PokemonPage.vue"
import { pokemonsMock } from "../mocks/pokemons.mock"
import PokemonOptions from "@/components/PokemonOptions.vue"
import PokemonPicture from "@/components/PokemonPicture.vue"

describe("Pokemon Page component" , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de llamar mixPokemonArray al momtar', () => {
        const mixPokemonArrSpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        //Se vuelve a llamar el wrapper para que reincie la recarga y escuche los eventos del mount del componente
        const wrapper = shallowMount(PokemonPage)
        expect( mixPokemonArrSpy ).toHaveBeenCalled()
    })

    test('Debe de hacer match con el snapshot cuando cargan los pokemons', () => {
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
        //PokemonPicture y PokemonOption debe de existir
        //PokemonPicture tenga el atributo pokemonid == 5
        //PokemonOptions atributo pokemons debe de ser true (existir)
        const wrapperPicture = mount(PokemonPicture, {
            props:{
                pokemonId: 5,
                showPokemon: true
            }
        })
        const wrapperOption = mount(PokemonOptions, {
            props:{
                pokemons:pokemonsMock
            }
        })
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        expect(wrapperPicture).toBeTruthy()
        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')
        expect(options.exists()).toBeTruthy()
        expect(wrapperOption).toBeTruthy()
        expect(picture.exists()).toBeTruthy()
        expect(wrapperPicture.props().pokemonId).toBe(5)
        expect(picture.attributes().pokemonid).toBe('5')
        expect(wrapperOption.props().pokemons).toBeTruthy()
        expect(options.attributes().pokemons).toBeTruthy()
    })

    test('Pruebas con checkanswer', async () => {
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        await wrapper.vm.checkAnswer(5)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Correcto, ${pokemonsMock[0].name} es la respuesta correcta`)
        await wrapper.vm.checkAnswer(10)
        expect(wrapper.vm.message).toBe(`Ups, era ${pokemonsMock[0].name}`)
    })
})
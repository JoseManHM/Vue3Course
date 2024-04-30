import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { pokemonsMock } from "../mocks/pokemons.mock";

describe("PokemonOptions Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemonsMock,
      },
    });
  });

  test("Debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('Debe de mostrar las 4 opciones automaticamente', () => {
    let item = wrapper.findAll('li');
    expect(item.length).toBe(4)
    expect(item[0].text()).toBe('pikachu')
    expect(item[1].text()).toBe('charmander')
    expect(item[2].text()).toBe('venusaur')
    expect(item[3].text()).toBe('mew')
  });

  test('Deben de emitir "selection" con sus respectivos parámetros al hacer click', () => {
    const [ li1, li2, li3, li4 ] = wrapper.findAll('li')
    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')
    expect(wrapper.emitted('selectionPokemon').length).toBe(4)
    expect(wrapper.emitted('selectionPokemon')[0]).toEqual([5])
    expect(wrapper.emitted('selectionPokemon')[1]).toEqual([10])
    expect(wrapper.emitted('selectionPokemon')[2]).toEqual([15])
    expect(wrapper.emitted('selectionPokemon')[3]).toEqual([20])
  });
});

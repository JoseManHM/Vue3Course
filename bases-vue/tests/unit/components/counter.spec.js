import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe("Counter component", () => {
    let wrapper;
    //Antes de cada prueba monta el componente
    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    // test("Debe de hacer match con el snapshot", () => {
    //     //Montamos el componente
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
    test('h2 debe de tener el valor por defecto "Counter"', () => {
        //Verificar que la etiqueta exista
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2Value = wrapper.find('h2').text()
        //Verificar que el valor coincida
        expect(h2Value).toBe('Counter')
    })

    test('El valor por defecto debe de ser 100 en el p', () =>{
        //Obtener el valor de la manera común
        // const pValue = wrapper.findAll('p')
        // expect(pValue[1].text()).toBe("100")
        //Obtener el valor usando data atributes
        const pValue = wrapper.find('[data-testid="counter"]').text()
        expect(pValue).toBe("100")
    })

    test('Debe de incrementar y decrementar el valor del contador', async() => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        //Reducir 2 veces
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        const pValue = wrapper.find('[data-testid="counter"').text()
        expect(pValue).toBe('101')
    })

    test('Debe de establecer el valor por defecto', () => {
        const {start} = wrapper.props()
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(Number(value)).toBe(start)
    })

    test('Debe de mostrar la prop title', () => {
        const wrapper = shallowMount(Counter,{
            props: {
                title: 'Hola Mundo!'
            }
        })

        const title = "Hola Mundo!"

        expect(wrapper.find('h2').text()).toBe(title)
    })
})
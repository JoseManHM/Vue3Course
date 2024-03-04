import { shallowMount } from "@vue/test-utils";
import Indecision from '@/components/Indecision.vue';

describe('Indecision component', () => {
    let wrapper;
    let clgSpy
    //Crear Mock de fetchAPI
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: "yes",
            forced: false,
            image: "https://yesno.wtf/assets/yes/2.gif"
        })
    }))
    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        //Definición del spy
        clgSpy = jest.spyOn( console, 'log' )
        jest.clearAllMocks()
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Escribir en el input no debe de hacer nada', async() => {
        const getAnswerSpy = jest.spyOn( Indecision.methods, 'getAnswer' )
        //Le pasamos un valor al input
        const input = wrapper.find('input')
        await input.setValue('Hola mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)
    })

    test('Escribir el simbolo "?" debe de disparar el getAnswer', async() => {
        const getAnswerSpy = jest.spyOn(Indecision.methods, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Esta es una pregunta de prueba?')
        expect(getAnswerSpy).toHaveBeenCalledTimes(1)
    })

    test('Pruebas en getAnswer', async() => {
        //Llamar método
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe("https://yesno.wtf/assets/yes/2.gif")
        expect(wrapper.vm.answer).toBe('Si!')
    })

    test('Pruebas en getAnswer - Fallo en el API', async() => {
        //Forzar el error en la API
        fetch.mockImplementationOnce( ()=> Promise.reject('API is down') )
        await wrapper.vm.getAnswer()
        
        const img = wrapper.find('img')
        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar el API')
    })
})
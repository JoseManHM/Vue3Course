import state from "./state";
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
const counterStore = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
    // state: () => ({
    //     count: 1,
    //     lastMutation: 'none',
    //     lastRandomInt: 0,
    //     isLoading: false
    // }),
    // mutations: {
    //     increment(state){
    //         state.count++
    //         state.lastMutation = 'increment'
    //     },
    //     incrementBy(state, value){
    //         state.count += value
    //         state.lastMutation = 'incrementBy',
    //         state.lastRandomInt = value
    //     },
    //     setLoading(state){
    //         state.isLoading = !state.isLoading
    //     }
    // },
    // actions: {
    //     async incrementRandomInt(context){
    //         context.commit('setLoading')
    //         const rndInt = await getRandomInt()
    //         context.commit('incrementBy', rndInt)
    //         context.commit('setLoading')
    //     }
    // },
    // getters: {
    //     squareCount(state){
    //         return state.count * state.count
    //     }
    // }
}

export default counterStore
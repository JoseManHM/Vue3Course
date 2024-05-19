<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">Increment +1</button>
    <button @click="incrementBy(5)">Increment +5</button>
    <!-- <button @click="incrementRandomInt">Increment random</button> -->
    <button @click="randomInt" :disabled="isLoading">Increment random</button>
    <h1>MapState</h1>
    <h2>{{ count }}</h2>
    <h2>Last Mutation: {{ lastMutation }}</h2>

    <h2>Direct Getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default{
    name: 'CounterComponent',
        computed: {
            countComputed(){
                return this.$store.state.counter.count
            },
            ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
            // ...mapState({
            //     count: state => state.count,
            //     lastMutation: state => state.lastMutation
            // })
        },
    // computed: mapState(['count'])S
    methods: {
        increment(){
            this.$store.commit('counter/increment')
        },
        incrementBy(value){
            this.$store.commit('counter/incrementBy', value)
        },
        // incrementRandom(){
        //     // let random = Math.round(Math.random() * 100)
        //     // this.$store.commit('incrementBy', random)
        //     this.$store.dispatch('incrementRandomInt')
        // }
        // ...mapActions(['incrementRandomInt'])
        ...mapActions('counter', {
            randomInt: 'incrementRandomInt'
        })
    }
}
</script>
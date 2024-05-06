<template>
    <h1>About Page</h1>
    <h2>{{ name }}</h2>
    <button @click="cambiarNombre()">Cambiar nombre</button>
</template>

<script>
export default{

    data() {
        return {
            name: 'Manuel'
        }
    },

    methods: {
        cambiarNombre(){
            console.log("Se cambia el nombre");
            this.name = 'Jose'
        }
    },

    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    activated() {
        console.log("activated");
    },
    deactivated() {
        console.log("deactivated");
    },
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    unmounted() {
        console.log("unmounted");
    },
    errorCaptured() {
        console.log("errorCaptured");
    },
    renderTracked() {
        console.log("renderTracker");
    },
    renderTriggered() {
        console.log("renderTriggered");
    }
}
</script>
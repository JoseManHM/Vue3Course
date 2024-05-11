<template>
    <a v-if="isExternalLink" :href="link.to" target="_blank" :class="isActive ? 'is-active' : 'normal-link'">Link</a>
    <router-link v-else :to="{name: link.to, params: {id: 10}}" v-slot="{isActive}" style="text-decoration: none;">
        <a :class="isActive ? 'is-active' : 'normal-link'">{{ link.name }}</a>
    </router-link>
</template>

<script>
export default{
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        isExternalLink(){
            return this.link.to.startsWith('http')
        },
        route(){
            return this.link.id === undefined ? {name: this.link.to} : {naem: this.link.to, params: {id: this.link.id}}
        }
    }
}
</script>

<style scoped>
.is-active{
    color: #42B983;
    text-decoration: none;
}
.normal-link{
    color: #C6C5C5;
    text-decoration: none;
}
</style>
<template>
    <header>
        <h1 v-on:click="changeTitle" >{{headerTitle}}</h1>
    </header>
</template>

<script>
import {bus} from '../main';

export default {
    props:{
        headerTitle:{
            type:String
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        changeTitle:function(){
            //this.$emit('newTitle','Best Movies')
            let nt = 'Best Movies'
            this.headerTitle = nt
            bus.$emit('newTitle',nt)
        }
    }
}
</script>

<style scoped>
header{
    background: lightcoral;
    margin: 0;
    
}
h1{
    text-align: center;
    padding: 10px;
}
</style>
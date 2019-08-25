<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    data(){
        return {
            title:'Movies'
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
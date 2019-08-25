<template>
    <footer>
        <p>{{title}}</p>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            title:'Copyrights reserves @2019'
        }
    }
}
</script>
<style scoped>
footer{
    background: #222;
}
p{
    color: lightcoral;
    text-align: center;
    padding: 10px;
}
</style>
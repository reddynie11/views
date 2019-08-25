<template>
    <footer>
        <p>{{title}} {{footerTitle}}</p>
    </footer>
</template>
<script>
export default {
    props:{
        footerTitle:{
            type:String
        }
    },
    data(){
        return{
            title:'Copyrights reserved @2019.'
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
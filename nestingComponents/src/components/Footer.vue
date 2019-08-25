<template>
    <footer>
        <p>{{title}} {{footerTitle}}</p>
    </footer>
</template>
<script>
import {bus} from '../main';
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
    },
    created(){
        bus.$on('newTitle',(data)=>{
            this.footerTitle = data
        })
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
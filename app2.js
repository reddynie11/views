new Vue({
    el:'#vue-app2',
    data:{
        available: false,
        nearby :false

    },

    methods:{
        
    },
    computed:{
        cssClass:function(){
            return{
                available : this.available,
                nearby: this.nearby
            }
        }
    }
});
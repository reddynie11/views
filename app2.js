new Vue({
    el:'#vue-app2',
    data:{
        available: false,
        nearby :false,
        error:false,
        success:false,
        error2:false,
        success2:false

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
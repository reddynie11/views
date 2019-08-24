new Vue({
    el:'#vue-app2',
    data:{
        available: false,
        nearby :false,
        error:false,
        success:false,
        error2:false,
        success2:false,
        characters : ['Hero', 'Heroine', 'Villian', 'Comedian'],
        movies:[
            {title:'Mission Impossible', hero : 'Tom Cruise' },
            {title:'Saaho', hero : 'Prabhas' },
            {title:'Ra-One', hero : 'Sharukh Khan' },
            {title:'PK', hero : 'Aamir Khan' },
        ]

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
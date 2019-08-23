new Vue({
    el:'#vue-app',
    data:{
        name:'John',
        job:'ninja'
    },
    methods:{
        greet:function(){
            return 'Welcome ' + this.name
        }
    }
});
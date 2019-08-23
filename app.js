new Vue({
    el:'#vue-app',
    data:{
        name:'John',
        job:'ninja',
        web:'http://www.inarsi.com',
        websiteTag:'<a href="www.google.com">Google</a>',
        cart: 5
    },
    methods:{
        greet:function(){
            return 'Welcome ' + this.name
        },
        add:function(){
            this.cart++;
        },
        remove:function(){
            this.cart--;
        }
    }
});
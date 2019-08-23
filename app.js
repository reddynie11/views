new Vue({
    el:'#vue-app',
    data:{
        name:'John',
        job:'ninja',
        web:'http://www.inarsi.com',
        websiteTag:'<a href="www.google.com">Google</a>',
        cart: 5,
        x:0,
        y:0
    },
    methods:{
        greet:function(){
            return 'Welcome ' + this.name
        },
        add:function(item){
            this.cart+=item;
        },
        remove:function(item){
            this.cart-=item;
        },
        updateXY:function(e){
            console.log(e);
            this.x= e.offsetX;
            this.y=e.offsetY;
        }
    }
});
new Vue({
    el:'#vue-app',
    data:{
        name:'John',
        job:'ninja',
        web:'http://www.inarsi.com',
        websiteTag:'<a href="www.google.com">Google</a>',
        cart: 5,
        x:0,
        y:0,
        name2:'',
        age2:'',
        pnum: 20,
        a : 0,
        b: 0
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
            this.x= e.offsetX;
            this.y=e.offsetY;
        },
        logName:function(){
            console.log('Name')
        },
        logAge:function(){
            console.log('Age')
        }
    },
    computed:{
        sumA:function(){
            return this.pnum+this.a
        },
        sumB:function(){
            return this.pnum+this.b
        }
    }
});
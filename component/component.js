Vue.component('component',{
    template:'<h3>This is a reuseable component.<br/>{{title}} <br/><button v-on:click="changeCom">change component</button></h3>',
    data:function(){
        return {
            title : 'this will change on click'
        }
    },
    methods:{
        changeCom:function(){
            this.title='component has only changed on this instance'
        }
    }
})


var one = new Vue({
    el:'#app1',
    data:{
        title:'This is Vue instance 1'
    },
    methods:{

    },
    computed:{

    }
})

var two=new Vue({
    el:'#app2',
    data:{
        title:'This is Vue instance 2'

    },
    methods:{
        changeTitle:function(){
            one.title='Title changed from Vue Instance 2'
        }
    },
    computed:{
       
        
    }
})
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
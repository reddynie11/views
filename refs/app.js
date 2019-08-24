new Vue({
    el:'#root',
    data:{
        heading:'Refs',
        name:''
    },
    methods:{
        readRef:function(){
            console.log(this.$refs.inputText.value)
            this.name = this.$refs.inputText.value;
            this.heading='Welcome '+this.name;
        }
    }
})
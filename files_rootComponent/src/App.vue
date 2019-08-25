<template>
  <div> 
    <h1>{{title}}</h1>
    <p>Please enter your name below</p>
    <input type="text" ref="name">
    <button v-on:click="changeName" >Submit</button>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      title : 'Root Component',
      name:''
    }
  },
  methods:{
    changeName(){
      this.name = this.$refs.name.value;
      this.title = 'Welcome '+ this.name+' !!!';
    }
  }
}
</script>

<style>

</style>

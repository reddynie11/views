<template>
  <div>
    <h1>{{title}}</h1>
    <New></New>
  </div>
 
</template>

<script>
import newComponent from './newComponent.vue'
export default {
  components:{
    'New': newComponent
  },
  data () {
    return {
     title:'Root Component'
    }
  }
}
</script>

<style scoped>
h1{
  text-align: end;
  
}

</style>

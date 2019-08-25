<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
        <li v-for="ninja in ninjas" >{{ninja}}</li>
    </ul>
  </div>
 
</template>

<script>
export default {
  data () {
    return {
     title:'Nested Component',
     ninjas:['Contra','Mario','tekken','bloody Roar']
    }
  }
}
</script>

<style>

</style>
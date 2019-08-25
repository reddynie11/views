<template>
  <div>
    <app-header />
    <app-movies />
    <app-footer />
    
  </div>
 
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Movies from './components/Movies.vue'
export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-movies': Movies
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

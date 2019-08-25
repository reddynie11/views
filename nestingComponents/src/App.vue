<template>
  <div>
    <app-header />
    <app-movies v-bind:moviesList="movies" />
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
     title:'Root Component',
     movies:[
                {name:'Saaho',hero:'Prabhas',heroine:'Shraddha Kapoor',show:false},
                {name:'Jalsa',hero:'Pawan Kalyan',heroine:'Ileana Dcruz',show:false},
                {name:'Robo',hero:'Rajini Kant',heroine:'Aishwarya Rai',show:false},
                {name:'Dear Comred',hero:'Vijay Devarakonda',heroine:'Rashmika',show:false},
                {name:'Yevadu',hero:'Ram Charan',heroine:'Amy Jackson',show:false},
                {name:'Bahubali',hero:'Prabhas',heroine:'Tamanna',show:false},
            ]
    }
  }
}
</script>

<style scoped>
h1{
  text-align: end;

}

</style>

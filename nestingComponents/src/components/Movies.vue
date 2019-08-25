<template>
    <div id="movies">
        <ul>
            <li v-for="movie in moviesList" v-on:click="movie.show=!movie.show">
                <h2>{{movie.name}}</h2>
                <h3 v-show="movie.show">Hero : {{movie.hero}}</h3>
                <h3 v-show="movie.show">Heroine : {{movie.heroine}}</h3>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    props:['moviesList'],
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
#movies{
    width: 100%;
    height: 70vh;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid black;
    margin: 10px;
}
</style>
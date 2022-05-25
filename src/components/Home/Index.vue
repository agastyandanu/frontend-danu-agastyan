<template>
  <div class="home">    
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-3">
        <div class="col">
          <h2><strong>Movies</strong> Update</h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-3 p-2" v-for="datamovie in setMovie" :key="datamovie.imdbID">
          <div class="card p-2">
              <img class="card-img-top" :src="datamovie.Poster" alt="Card image cap" @click="showImage(datamovie)">
              <div class="card-body">
                  <h5 class="card-title text-center"> {{datamovie.Title}} ({{ datamovie.Year}}) </h5>
                  <router-link :to="{name: 'MovieDetail', params: {id: datamovie.imdbID} }">
                      <button variant="outline-primary" class="btn btn-outline-primary btn-block mt-2">Detail</button>                
                  </router-link> 
              </div>
          </div>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Navbar from '@/components/Template/Navbar.vue'
import Hero from '@/components/Template/Hero.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero
  },

  data() {
    return {
      setMovie : [],
      imageData : {
        poster: ''
      }
    }
  },

  methods: {
    showImage(datamovie) {
        this.imageData.poster = datamovie.Poster;
    }
  },

  mounted() {
    let key = "6b010a5a";
    let search = "harry";
    axios.get("http://www.omdbapi.com/?apikey="+ key +"&s=" + search)
    .then((result) => {
      if (result.data.Response == "True") {
        this.setMovie = result.data.Search;
      } else {
          alert("Something Went Wrong");
      }      
    }) 
    .catch((error) => console.log("Failed to load data: ", error));
  }
  
}

</script>

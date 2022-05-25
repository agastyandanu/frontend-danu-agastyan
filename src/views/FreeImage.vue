<template>
  <div class="home">    
    <Navbar />
    <div class="container">

      <div class="row mt-3">
        <div class="col">
          <h2><strong>Free</strong> Image</h2>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-3 p-2" v-for="dataImage in setMovie" :key="dataImage.imdbID">
          <div class="card p-2">
              <img class="card-img-top img-fluid" style="height: 300px;" :src="dataImage.url" alt="Card image cap" @click="showImage(dataImage)">
              <div class="card-body">
                  <h5 class="card-title text-center"> {{dataImage.name}} </h5>
                  <span class="p-2 text-center">
                    {{dataImage.desc}}
                  </span>
              </div>
          </div>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import Navbar from '@/components/Template/Navbar.vue'

  export default {
    name: 'Home',
    components: {
      Navbar
    },

    data() {
      return {
        setMovie : []
      }
    },

    methods: {
      
    },

    mounted() {
      axios.get("http://127.0.0.1:3600/api/public")
      .then((result) => {
        if (result.data.data.status == 200) {
          this.setMovie = result.data.data.data;
        } else {
            alert("Something Went Wrong");
        }      
      }) 
      .catch((error) => console.log("Failed to load data: ", error));
    }
    
  }

</script>

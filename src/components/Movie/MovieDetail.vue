<template>

  <div>
      <Navbar />
      <div class="container">

        <div class="row mt-4">
            <h2 class="mb-5">Movie Detail</h2>
            <div class="col-md-5 text-center">
                <img :src="setMovie.Poster" @click="imageModal()" alt="" class="img-fluid">
            </div>
            <div class="col-md-7">
                <h2>{{ setMovie.Title }}</h2>
                <table class="table table-borderless mt-3">
                    <tr>
                        <th class="py-2">Genre</th>
                        <td class="px-2">:</td>
                        <td>{{ setMovie.Genre }}</td>
                    </tr>
                    <tr>
                        <th class="py-2">Director</th>
                        <td class="px-2">:</td>
                        <td>{{ setMovie.Director }}</td>
                    </tr>
                    <tr>
                        <th class="py-2">Actors</th>
                        <td class="px-2">:</td>
                        <td>{{ setMovie.Actors }}</td>
                    </tr>
                    <tr>
                        <th class="py-2">Country</th>
                        <td class="px-2">:</td>
                        <td>{{ setMovie.Country }}</td>
                    </tr>                    
                    <tr>
                        <th class="py-2">Released</th>
                        <td class="px-2">:</td>
                        <td>{{ setMovie.Released }}</td>
                    </tr>
                    <tr>
                        <th class="py-2">Duration</th>
                        <td class="px-2">:</td>
                        <td>{{ setMovie.Runtime }}</td>
                    </tr>
                    <tr>
                        <th class="py-2">Writer</th>
                        <td class="px-2">:</td>
                        <td>{{ setMovie.Writer }}</td>
                    </tr>
                    <tr>
                        <th class="py-2">Awards</th>
                        <td class="px-2">:</td>
                        <td>{{ setMovie.Awards }}</td>
                    </tr>
                    <tr>
                        <th class="py-2">IMDB Ratings</th>
                        <td class="px-2">:</td>
                        <td>{{ setMovie.imdbRating }}</td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="row my-4">
            <h5>Synopsis</h5>
            <p class="text-left">{{ setMovie.Plot }}</p>
        </div>

      </div>
  </div>

</template>

<script>
    import axios from 'axios';
    import Navbar from '@/components/Template/Navbar.vue';

    export default {
        name : 'Movie-Detail',
        components : {
            Navbar
        },

        data() {
            return {
                setMovie : []
            }
        },

        methods: {
            imageModal() {
                alert("Show Modal Image");
            }
        },

        mounted() {
            let id = this.$route.params.id;
            let key = "6b010a5a";
            axios.get("http://www.omdbapi.com/?apikey="+ key +"&i=" + id)
            .then((response) => {
                this.setMovie = response.data;
                console.log(this.setMovie);
            } )
            .catch((error) => console.log("Gagal: ", error));
        }
    }
</script>

<style>

</style>
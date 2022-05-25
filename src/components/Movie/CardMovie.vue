<template>

    <div class="card p-2">
        <img class="card-img-top" v-b-modal="'modalDetail'" :src="sendMovie.Poster" alt="Card image cap" @click="showImage(sendMovie)">
        <div class="card-body">
            <h5 class="card-title text-center"> {{sendMovie.Title}} ({{ sendMovie.Year}}) </h5>
            <router-link :to="{name: 'MovieDetail', params: {id: sendMovie.imdbID} }">
                <button variant="outline-primary" class="btn btn-outline-primary btn-block mt-2">Detail</button>                
            </router-link> 
        </div>
    </div>
    
</template>

<script>
    export default {
        name : "CardMovie",
        props: ['sendMovie'],

        methods: {
            showImage(sendMovie) {
                var poster = sendMovie.Poster;
                console.log(poster);
            }
        },
    }
</script>
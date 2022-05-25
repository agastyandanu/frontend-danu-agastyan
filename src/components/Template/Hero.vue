<template>

  <div class="hero">

    <!-- Desktop -->
    <div class="d-sm-none d-md-block">
        <div class="row mt-4">
            <div class="col-md-7">
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">
                        <h2><strong>Unlimited Images and Movies</strong> <br> from Your Gadget</h2>
                        <p>Wherever and whenever You Are</p>
                        <router-link to="/free-image" class="btn btn-primary">Get Started <b-icon-arrow-right></b-icon-arrow-right> </router-link>
                        <br><br>
                    </div>
                </div>            
            </div>
            <div class="col-md-5">
                <img src="../../assets/img/hero.png" class="img-fluid" alt="">
            </div>
        </div>
    </div>      

  </div>    

</template>

<script>
    export default {
        name : 'Hero',

        methods: {

        }
    }

</script>

<style>

</style>
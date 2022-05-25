<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand font-weight-bold" href="#">Image & Movies Library</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'FreeImage' }">Free Image</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'PremiumImage' }">Premium Image</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <!-- <input class="form-control form-custom me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-primary me-2">Search</button> -->

            <div v-if="this.$store.state.isLogin === true">
              <router-link :to="{name: 'Login' }">
                <button variant="outline-primary" class="btn btn-outline-primary" @click="this.$store.commit('setLogout')">Logout</button>                
              </router-link> 
            </div>

            <div v-else>
              <router-link :to="{name: 'Login' }">
                <button variant="outline-primary" class="btn btn-outline-primary">Login</button>                
              </router-link> 
            </div>
            
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

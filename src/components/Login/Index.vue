<template>

    <Navbar />

    <div class="container">
        <div class="row mt-5">
            <div class="col-md-6 offset-md-3 border shadow py-4 px-5">

                <div class="text-center">
                    <img src="../../assets/img/login.png" style="width: 250px" class="img-fluid" alt="">
                </div>
                <h2 class="text-center"><strong>Login</strong> User</h2>
                <form class="text-left mt-5" @submit.prevent="loginProcess">
                    <div class="mb-3">
                        <input type="email" class="form-control form-custom" placeholder="Email" v-model="dataList.email">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control form-custom" placeholder="Password" v-model="dataList.password">
                    </div>
                    <div class="text-center mt-4 mb-5">
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </div>
                </form>
            
            </div>
        </div>
    </div>

</template>

<script>
    import axios from "axios";
    import Navbar from '@/components/Template/Navbar.vue'

    export default {
        name: 'Login',
        components: {
            Navbar
        },

        data() {
            return {
            dataList: {},
            };
        },

        beforeCreate() {
            // console.log(this.$session)
            // if (this.$session.get("isLogin") === true) {
                // this.$router.push({ name: "Home" });
            // }
        },

        methods: {
            loginProcess() {
            axios
                .post("http://127.0.0.1:3600/api/login", this.dataList)
                .then((response) => {
                    if (response.data.data.status === 200) {
                        var obj = response.data.data  
                        var data = {
                            id : obj.id,
                            email : obj.email,
                            token : obj.token
                        }
                        this.$store.commit('setToken', data)
                        alert("Login Success")
                        this.$router.push({ name: "Home" })
                    } else {
                        alert(response.data.data.message)
                    }
                })
                .catch((err) => {
                    alert(err)
                })
            }
        }
    }
</script>

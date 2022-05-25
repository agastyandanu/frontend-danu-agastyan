import { createStore } from "vuex"

export default createStore({
    state: {
        token: "",
        id: "",
        email: "",
        isLogin: false
    },
    mutations: {
        setToken(state, data) {
            state.token = data.token
            state.id = data.id
            state.email = data.email
            state.isLogin = true,
                localStorage.setItem('isLogin', true)
        },

        setLogout(state) {
            state.token = ""
            state.id = ""
            state.email = ""
            state.isLogin = false,
                localStorage.setItem('isLogin', false)
        }
    },
    actions: {

    },
    modules: {

    },
    getters: {
        getIsLogin(state) {
            return state.isLogin
        }
    }
})
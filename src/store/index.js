/* eslint-disable */
import { createStore } from 'vuex'

import axios from 'axios';
let Base_URL;
if (process.env.NODE_ENV === 'production'){
  Base_URL = 'http://www.alegralabs.com:3000';
} else{
  Base_URL = 'http://localhost:3000';
}

export default createStore({
  state: {
    user: '',
    isLoggedIn: false,
    users: ''
  },
  actions: {
    async signup({commit}, payload){
      try {
        const data = await axios.post(Base_URL + '/signup', payload);
        console.log(data)
        console.log(data.status)
      } catch (error) {
        // console.log(error)
        console.log("status",error.response.status)
        console.log("message",error.response.data.message)

        return error.response

      }
     
    },
    async login({commit}, payload) {
      try {
        const data = await axios.post(Base_URL+'/login', payload)
        // console.log(data.data)
        localStorage.setItem("accessToken", data.data.accessToken)
        localStorage.setItem("refreshToken", data.data.refreshToken)
        localStorage.setItem("userName", data.data.name)
        commit("SET_USER", data.data)
        commit("SET_LOGIN")
        return data.data
      } catch (error) {
        console.log(error)

        // console.log("status:",error.response.status)
        // console.log("message:",error.response.data.message)

        return error.response
      }
    },
    async users({commit},
      //  {payload}
      ){
      try {
        const data = await axios.get(Base_URL+'/users', {
          headers:{Authorization: "Bearer "+localStorage.getItem("accessToken")}
        })
        commit("SET_USERS", data.data.user)
      } catch (error) {
        console.log("status:",error.response.status)
        console.log("message:",error.response.data.message)
      }
    }  
  },
  mutations: {
    SET_USER(state, user){
      state.user = user;
    },
    SET_LOGIN(state){
      state.isLoggedIn = true;
    },
    SET_USERS(state, users){
      state.users = users;
    }
  },
  getters: {
  },
})

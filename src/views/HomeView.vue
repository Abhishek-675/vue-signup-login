<template>
  <div class="container">
    <div class="child">
      <h1>Welcome to the Home Page, {{ name }}</h1>
      <button type="button" @click="getUsers">Get Users</button>
      <div>
        <h3>User List</h3>
        <div id="user">
          <li v-for="(value, key) in this.$store.state.users" :key="key">{{ value.name }}</li>
        </div>
      </div>
      <button id="logout-btn" @click="logout">Logout</button>
    </div>

  </div>
</template>

<script>
export default{
  name: 'home-view',
  data(){
    return {
      name: localStorage.getItem('userName')
    }
  },
  methods:{
    getUsers(){
      this.$store.dispatch('users')
    },
    logout(){
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  // mounted(){
  //   this.$store.dispatch('users')
  // }
}
</script>

<style scoped>
/* .container {
  
}

.child {
 
} */

#logout-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: red;
            color: white;
            font-size: 20px;
            font-weight: 700;
            border-radius: 5px;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
        }

</style>
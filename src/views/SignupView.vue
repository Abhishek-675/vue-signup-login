<template>
  <div class="form-container">
    <h1>Sign Up</h1>
    <form id="form" v-on:submit.prevent="signup">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-input" id="name" v-model="name"/><br />
      <label for="email" class="form-label">E-Mail</label>
      <input type="email" class="form-input" id="email" v-model="email"/><br />
      <label for="phone-number" class="form-label">Phone Number</label>
      <input type="tel" class="form-input" id="tel" v-model="phone"/><br />
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-input" id="pass" v-model="password"/><br />
      <button type="submit" class="form-btn" id="btn" >Sign Up</button>
    </form>
    <p>Already a member? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>

export default{
    name: 'signup-view',
    data(){
        return {
            name: '',
            email: '',
            phone: '',
            password: ''
        }
    },
    methods:{
      signup(){
        console.warn(this.name)
        this.$store.dispatch('signup', {
          name: this.name,
          email: this.email,
          phoneno: this.phone,
          password: this.password
        })
        .then((res)=>{
          console.log(res)
          if (res.status === 409) {
            alert(res.data.message);
            this.$router.push('/login')
          }
        })
      }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0%;
    padding: 0%;
}

body{
    background: #9999ff;
}

a{
    color: red;
}

.form-container{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
    background: white;
    margin: 50px auto;
    border-radius: 15px;
    padding: 20px;
    align-items: center;
    height: 400px;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

form div{
    margin: 0 auto;
}

.form-input {
    padding: 2px 5px;
    outline: none;
    border-radius: 5px;
    border: solid 1px #b3cce6;
}

.form-btn {
    width: 100px; 
    margin: 0 auto;
    padding: 3px 0;
    box-sizing: initial;
    background: #9999ff;
    color: white;
    font-weight: bold;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
}

#btn-forgot{
    width: 150px;
    padding: 5px;
}

</style>

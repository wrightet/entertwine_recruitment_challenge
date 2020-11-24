<template>
  <div class="home">
    <Header/>
    <Login v-on:login="login"/>
    <SignUp/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '../components/layout/Header.vue';
import Login from '../components/LoginForm.vue';
import SignUp from '../components/Signup.vue';
export default {
  name: 'Home',
  components: {
    Header, LoginForm, SignUp
  },
  methods: {
    login(email, password){
      
    }
  }
}
</script>

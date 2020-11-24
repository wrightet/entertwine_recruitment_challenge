<template>
  <div class="home">
    <Header/>
    <LoginForm v-on:login="loginAction"/>
    <SignUp/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '../components/layout/Header.vue';
import LoginForm from '../components/LoginForm.vue';
import SignUp from '../components/Signup.vue';
export default {
  name: 'Home',
  components: {
    Header, LoginForm, SignUp
  },
  methods: {
  
  }
}
</script>

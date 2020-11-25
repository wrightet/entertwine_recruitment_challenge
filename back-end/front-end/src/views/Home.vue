<template>
  <div class="home">
    <Header/>
    <LoginForm v-on:login="loginAction"/>
    <SignUp/>
    <Instruction/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '../components/layout/Header.vue';
import LoginForm from '../components/LoginForm.vue';
import SignUp from '../components/Signup.vue';
import Instruction from '../components/Instuction.vue'

export default {
  name: 'Home',
  components: {
    Header, LoginForm, SignUp, Instruction
    
  },
  methods: {
  
  }
}
</script>

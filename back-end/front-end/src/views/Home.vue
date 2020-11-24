<template>
  <div class="home">
    <Header/>
    <Login/>
    <SignUp/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '../components/layout/Header.vue';
import Login from '../components/Login.vue';
import SignUp from '../components/Signup.vue';
export default {
  name: 'Home',
  components: {
    Header, Login, SignUp
  }
}
</script>

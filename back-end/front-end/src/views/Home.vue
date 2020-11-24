<template>
  <div class="home">
    <Header/>
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '../components/layout/Header.vue';
import Login from '../components/Login.vue';
export default {
  name: 'Home',
  components: {
    Header, Login
  }
}
</script>

<template>
  <div>
    <h1>This is a Vue app</h1>
    <Helloworld/>
  </div>
</template>
<script>
import Helloworld from './components/helloworld';
import helloworld from './components/helloworld.vue';
export default {
  components: { helloworld },
  name: "app",
  template: '<App/>',
  components:['<Helloworld/>']
  
};
</script>
<style lang="scss" scoped>
  h1{
    color:red;
  }
</style>
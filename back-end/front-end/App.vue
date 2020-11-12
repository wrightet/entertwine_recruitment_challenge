<template>
  <div>
    <h1>This is a Vue app</h1>
  </div>
</template>
<script>
import helloworld from './components/helloworld';
export default {
  name: "app",
  template: '<App/>'
};
</script>
<style lang="scss" scoped>
  h1{
    color:red;
  }
</style>
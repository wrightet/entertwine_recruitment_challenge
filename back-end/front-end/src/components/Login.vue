<template>
    <div class='login'>
        <h3>Log In</h3>
        <form>
            <input type="text" name='email' placeholder="Email">
            <input type="text" name='password' placeholder="Password">
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login'
};
</script>

<style scoped>
    .login{
        background: #EEE;
        padding: 2%;
    }
    input{
        height: 3vh;
        margin-right: 1vw;
    }
</style>
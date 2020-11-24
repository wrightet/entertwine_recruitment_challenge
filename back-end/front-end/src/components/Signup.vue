<template>
    <div class='SignUp'>
        <h2>Don't have an account?</h2>
        <h3>Sign Up</h3>
        <form class='sign-form' action="">
            <input type="text" name='first_name' placeholder="First Name">
            <input type="text" name='last_name' placeholder="Last Name">
            <input type="text" name='email' placeholder="Email">
            <input type="text" name='phone_number' placeholder="Phone Number">
            <input type="text" name='password' placeholder="Password">
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style scoped>
    .SignUp{
        background: #fff;
        padding: 2%;
    }

    .sign-form{
         display: flex;
        flex-direction: column;
        justify-content: center;
        margin:auto;
        max-width: 40%;
    }
    input{
        margin-bottom: 2%;
        height: 3vh;
    }
</style>
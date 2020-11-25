<template>
    <div class='login'>
        <h3>Log In</h3>
        <form @submit="loginAction">
            <input type="text" v-model='email' placeholder="Email">
            <input type="text" v-model='password' placeholder="Password">
            <input type="submit" value='Sumbit' class='button'>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        loginAction(e){
            e.preventDefault();
            const payLoad = {email: this.email, password: this.password};
            this.$emit('login', payLoad);
            this.email = '';
            this.passowrd = '';
        }
    }
}
</script>

<style scoped>
    .login{
        background: #EEE;
        padding: 2%;
        display: flex;
        flex-direction: column;
    }
    input{
        height: 3vh;
        margin-right: 1vw;
    }

    button{

    }
</style>
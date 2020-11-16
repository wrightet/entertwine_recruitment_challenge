import VueRouter from 'vue-router';
const Home = { template: '<div>Home</div>'}
const router = new VueRouter({
    routes: [
        {path: '/', component: Home}
    ]
})
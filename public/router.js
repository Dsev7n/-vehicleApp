import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../src/components/HelloWorld.vue';
import Login from '../src/components/login.vue';

Vue.use(VueRouter);


var router = new VueRouter({
    routes: [{
            path: '/login',
            name: 'Login',
            component: Login,
        },

        {
            path: '/hello',
            name: 'hello',
            component: HelloWorld
        }
    ]
})

export default router;
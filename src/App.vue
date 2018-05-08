<template>
  <div id="app">
    <Login></Login>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./components/login.vue";
import HelloWorld from "./components/HelloWorld.vue";
import VueRouter from "vue-router";

export default {
  name: "app",
  components: { 
    Login,
    HelloWorld
   },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

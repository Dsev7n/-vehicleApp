<template>
  <div class="hello">
    <h1>222</h1>
     <router-link to="/login">我要去登录</router-link>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import Vue from 'vue';
import router from "../../public/router.js";
import HelloWorld from "./HelloWorld.js";
export default HelloWorld;
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/HelloWorld.css";
</style>

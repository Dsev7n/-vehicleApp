<template>
  <div class="hello">
    <h1>我要注册登录</h1>
    <input type="text" v-model="name" placeholder="你的名字"/>
     <div v-show="!name">名字不能为空</div>
    <div>
      <input type="text" v-model="phone" placeholder="你的手机号"/>
       <div v-show="!phone">手机号不能为空</div>
      </div>
      <div>
    <input type="text" v-model="age" placeholder="你的年龄"/> 
    </div>
    <button v-on:click="onSubmitTap()">提交</button>
  </div>
</template>

<script>
import Login from "./login";
export default Login;
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/login.css";
</style>

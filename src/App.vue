<template>

  <div class="loginWarp">
      <router-view  name="Main"></router-view>
      <router-view  name="Login"></router-view>
  </div>
</template>

<!-- <script>
import router from './router';
// import Login from './login/Login.vue'
Vue.config.productionTip = false;

new Vue({
  router, //Vue 인스턴스에 연결
  render: (h) => h(App),
}).$mount('#app');

export default {
  name: 'App',
  components: {
    Login
  }
}
</script> -->


<style lang="scss">
@import '~@/assets/scss/common';
</style>


<!-- <template> 
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

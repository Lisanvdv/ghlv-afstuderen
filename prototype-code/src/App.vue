<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
  overflow: hidden;
  color: #1e1e1e;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100vw;
  height: 100vh;
  display: flex;
  background-color: #161616;
}
</style>

<template>
  <Header/>
  <Bigcam/>
  <Conversation/>
</template>

<script>
import Header from './components/Header.vue'
import Conversation from './components/Conversation.vue'
import Bigcam from './components/Bigcam.vue'

export default {
  name: 'App',
  components: {
    Header,
    Conversation,
    Bigcam
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
}
</style>

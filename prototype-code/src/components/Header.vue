<template>
  <div class="header">
    <button class="btn-leave"><i class="fas fa-phone"></i> Leave call</button>
  </div>
</template>

<script>

export default {
    name: 'Header',
    components: {
    }
}
</script>

<style scoped>
.header{
  height: 10vh;
  width:70vw;
  position: absolute;
  background-color: #1e1e1e;
  text-align: right;
  line-height: 10vh;
}

.btn-leave{
  background-color: #E30B5D;
  color: white;
  border: none;
  padding: 1% 2%;
  margin-right:1.25%;
  
}

.fa-phone{
  transform: rotate(225deg);
}
</style>
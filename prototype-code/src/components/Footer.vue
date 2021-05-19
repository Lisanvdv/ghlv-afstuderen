<template>
  <div class="footer">
    <a href="https://forms.gle/UQMF9Qw7LWtArGQZA" class="btn-leave">Fill in survey</a>
    <a href="https://www.instagram.com/novagreenn/?hl=en" class="btn-leave">Check out my Instagram</a>
    <a href="https://greenhousegroup.com/nl" class="btn-leave">Connect to Greenhouse</a>
  </div>
</template>

<script>

export default {
    name: 'Footer',
    components: {
    }
}
</script>

<style scoped>
.header{
  height: 10vh;
  width:70vw;
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
<template>
    <div class="sidebar">
      <h3>Conversation with Nova Green</h3>
      <!--the botui interface-->
        <div id="my-botui-app">
          <bot-ui></bot-ui>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Conversation',
}

</script>

<style scoped>
.sidebar{
  width:30vw;
  position: absolute;
  right:0;
  height: 100vh;
  background-color: #FDFAFF;
}
</style>
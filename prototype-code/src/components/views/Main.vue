<template>
<Header/>
  <Bigcam/>
  <Conversation/>
</template>

<script>
import Header from '../Header.vue'
import Conversation from '../Conversation.vue'
import Bigcam from '../Bigcam.vue'

export default {
  name: 'main',
  components: {
    Header,
    Conversation,
    Bigcam
  }
}
</script>
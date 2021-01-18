<template>
  <v-app>
    <img :src="srcData" alt="" >
  </v-app>
</template>

<script>

export default {
  data : ()=>{
    return {
      srcData : require('~/assets/41931979.png'),
    }
  },
  components: {
  },
  computed:{
  },
}
</script>

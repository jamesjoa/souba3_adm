<template>
  <v-app>
    test
    {{test}}
  </v-app>
</template>

<script>

export default {
  components: {
  
  },
  computed:{
    test : function(){
      return this.$store.state.test
    }
  },
  created:function(){
    this.$store.dispatch('TESTING');
  }
}
</script>

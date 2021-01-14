<template>
  <div class="home">
    사용자홈
    {{test}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  computed:{
    test : function(){
      return this.$store.state.test
    }
  },
  created:function(){
    //this.$store.dispatch('TESTING');
  },
}
</script>

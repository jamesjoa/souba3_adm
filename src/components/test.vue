<template>
    <div style="padding:300px;background:pink">
        <button @click="test">테스트</button>
        {{$store.state}}
    </div>
</template>

<script>
export default {
  name: 'test',
  methods:{
      test : function(){
          alert('쿠키테스트');
          this.$store.dispatch("CHECK_LODDING");
      }
  }
}
</script>

<style>

</style>
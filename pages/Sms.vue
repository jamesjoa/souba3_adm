<template>
  <div>
    <button type="button" @click="openModal('Test')">Test 모달열기</button>
      
  </div>
</template>

<script>
export default {
  methods:{
    openModal : function(setModal){
      this.$store.commit('addModalList',{
        type:setModal,
        width:600,
        height:300
      })
    }
  }
}
</script>

<style>

</style>
<template>
  <div>
    나는 테스트에용      
    <v-list>
      <v-btn type="button" @click="openModal('Test')">Test 모달열기</v-btn>
      <v-btn type="button" @click="openModal('엑셀')">엑셀 모달열기</v-btn>
      <v-btn type="button" @click="openModal('SMS')">SMS 모달열기</v-btn>
    </v-list>
    
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
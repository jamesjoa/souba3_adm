<template>
  <div>
    <v-list>
      <v-btn type="button" @click="openModal('Test')">Test 모달열기</v-btn>
      <v-btn type="button" @click="openModal('엑셀')">엑셀 모달열기</v-btn>
      <v-btn type="button" @click="openModal('SMS')">SMS 모달열기</v-btn>
    </v-list>

    <div>
      {{$store.state.sms.test_sms}}
    </div>

    <button type="button" @click="text_cnt()">cnt</button>


  </div>
</template>

<script>

export default {
  methods:{
    text_cnt : function(){
      this.$store.dispatch('sms/test_sms_add_action')
    },  
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
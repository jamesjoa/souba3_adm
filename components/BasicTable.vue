<template>
  <v-app ref="testing" :class="item.opstion.class"> 
    <v-data-table
        v-model="selected"
        :headers="item.headers" 
        :items="item.list" 
        :single-select="singleSelect"
        :sort-by="['ask', 'select', 'point']"
        item-key="name" 
        show-select class="basictable"
    >
    </v-data-table>
  </v-app>
</template>

<script>
export default {
  props:{
      item   : Object,
  },
  data:()=>{
    return{
      singleSelect: false,
      selected: [],
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
.basictable .v-data-table-header{
  background: $bg_color02;
  .text-start{
      font-weight: bold;color: #000 !important;
  }
  .v-input{
    padding: 0;
    .v-label{display: none;}
  }
  th:first-child .v-icon  {
    font-size:24px !important;
    @media screen and (max-width:1080px){
        font-size:24px !important;
    }
    @media screen and (max-width:768px){
        font-size:23px !important;
    }
    @media screen and (max-width:480px){
        font-size:23px !important;
    }
    @media screen and (max-width:400px){
        font-size:22px !important;
    }
    @media screen and (max-width:350px){
        font-size:22px !important;
    }
  }
}
.basictable{
  .v-data-table__mobile-row{
    min-height: 35px !important;
  }
}
</style>
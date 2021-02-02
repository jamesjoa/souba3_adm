<template>
  <v-app> 
    <v-select 
        v-model="item.select" :hint="`${item.select.keywords}`"
        :items="item.items" item-text="keywords" dense outlined
        class="member_select"
    ></v-select>
  </v-app> 
</template>

<script>
export default {
  props:{
      item   : Object,
  },
  data:()=>{
    return{

    }
  }
}
</script>

<style lang="scss">
.member_select{
  .v-input__control .v-input__slot{
    margin: 0px;
  }
  .v-input__control  .v-text-field__details{display: none;}
  fieldset{color: $color08 !important;border-radius: $border_radius01;}
  
  .v-select__slot .v-input__append-inner .primary--text{
    color:$color08 !important;caret-color: $color08 !important;
  }
}
</style>
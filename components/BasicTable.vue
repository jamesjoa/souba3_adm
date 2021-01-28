<template>
  <v-app ref="testing">
    <v-data-table
        v-model="selected" :headers="item.headers" :items="item.list" :single-select="singleSelect"
        item-key="name" show-select class="basictable"
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
  }
}
</script>

<style lang="scss">
.basictable .v-data-table-header{
  background: #C4C4C4;
  .text-start{
      font-size: 13px;font-weight: bold;color: #000 !important;
  }
}
</style> 

<style lang="scss" scoped>

</style>
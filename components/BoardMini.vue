<template>
  <v-app ref="testing">
    <v-card class="pa-2">
      <span class="con_tit font-size-lg">{{title}}</span>
      <span :style="items.total ?'' : 'display:none'">({{items.total}})</span>
      <a :href="link" class="the_btn" v-if="link">더보기 ></a>
      <v-tabs 
        class="main_btab" v-model="tab" centered icons-and-text
        :style="items.board_info.length < 2 ?'display:none' : ''">
          <v-tab
              v-for="(value , index) in items.board_info"
              :href="`#tab-${index+1}`"
              :key="index+1"
          >{{`${value.title}(${value.total})`}} </v-tab>
      </v-tabs>
      <v-tabs-items  v-model="tab" class="main_btable">
        <v-tab-item 
          v-for="(list , index) in items.board_list" :key="index+1"  :value="`tab-${index+1}`">
          <v-data-table
            :class="typeClass"
            :headers="items.board_headers"
            :items="list"
            hide-default-header
            hide-default-footer
          ></v-data-table>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-app>
</template>

<script>
export default {
    props:{
        title   : String,
        link    : String,
        tabUse  : Boolean,
        cols    : Number,
        items   : Object,
        typeClass   : String
    },
    data:()=>{
      return{
          tab:null,
      }
    }
}
</script>

<style lang="scss">
.main_btab{
  border-top:$border01;
  .v-item-group{height: 49px;}
}
.main_btable{
  border-top:$border01;
  table{
    display: inline-block;
  }
  tbody{
    display: inline-block;width: 100%;margin: 13px 0;
    tr{
      display: inline-block;width: 100%;border-bottom: $border01;
      td{
        padding:0px !important;padding-right:10px !important;display: inline-block;
        border-bottom: 0 !important;
        text-overflow: ellipsis; overflow: hidden; white-space: nowrap;
        text-align: center;
        font-size:14px !important;
        line-height: 49px;height: 45px;
        @media screen and (max-width:1080px){
          font-size:14px !important;
        }
        @media screen and (max-width:768px){
          font-size:13px !important;
        }
        @media screen and (max-width:480px){
          font-size:13px !important;
        }
        @media screen and (max-width:400px){
          font-size:12px !important;
        }
        @media screen and (max-width:350px){
          font-size:12px !important;
        }
      }
      td:first-child{
        line-height: 39px;padding:5px 5px !important;
        text-overflow: ellipsis; overflow: hidden; white-space: nowrap;text-align: left;
      }
    }
    tr:last-child{border-bottom: 0px;}
  }
  .col-type1{
    td{width:25%}
    td:first-child{width:50%}
  }
  .col-type2{
      td{width:15%}
      td:first-child{width:40%}
  }
}
</style> 

<style lang="scss" scoped>
.con_tit{line-height: 40px;font-weight: bold;}
</style> 


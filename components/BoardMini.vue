<template>
  <v-app ref="testing">
    <v-card class="pa-2">
      <span class="con_tit">{{title}}</span>
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
.v-application--wrap{
  min-height: auto !important;
}
.main_btab{
    .v-item-group{height: 49px;}
}
.main_btable{
  table{
    display: inline-block;
  }
  tbody{
    display: inline-block;width: 100%;margin: 13px 0;
    tr{
      display: inline-block;width: 100%;border-bottom: thin solid rgba(0, 0, 0, 0.12);
      td{
        padding:0px !important;padding-right:10px !important;display: inline-block;font-size: 12px;
        line-height: 49px;border-bottom: 0 !important;height: 45px;text-align: center;
        text-overflow: ellipsis; overflow: hidden; white-space: nowrap;
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
.con_tit{font-size: 16px; font-weight: bold;line-height: 40px;}
.the_btn{
  text-decoration: none;font-size: 13px;color: #666666;float: right;line-height: 40px; 
  font-weight: bold;
}
.main_btab{
  border-top:1px solid #ddd;
}
.main_btable{
  border-top:1px solid #ddd;
  }
</style>


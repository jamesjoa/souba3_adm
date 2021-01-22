<template>
  <div>
      <v-card class="pa-2">
        <span class="con_tit">{{title}}</span>
        <a :href="link" class="the_btn" v-if="link">더보기 ></a>

        <v-tabs v-model="tab" centered icons-and-text :style="items.board_info.length < 2 ?'display:none' : ''">
            <v-tab 
                v-for="(value , index) in items.board_info"
                :href="`#tab-${index+1}`"
                :key="index+1" 
            >{{`${value.title}(${value.total})`}} </v-tab>
        </v-tabs>
        <v-tabs-items  v-model="tab">
            <v-tab-item v-for="(list , index) in items.board_list" :key="index+1"  :value="`tab-${index+1}`" >
                        <v-data-table
                          :headers="items.board_headers"
                          :items="list"
                          hide-default-header
                          hide-default-footer
                          class="elevation-1"
                        ></v-data-table>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
/*
   <v-card flat>
                    <v-card-text>
                    </v-card-text>
                </v-card>

                    <v-simple-table>
                        <template v-slot:default>
                            <tbody class="issue_community">
                                <tr v-for="item in list" :key="item.name">
                                    <td><div>{{ item.name }}</div></td>
                                    <td>{{ item.number }}</td>
                                    <td>{{ item.date }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                    
                     */

export default {
    props:{
        title: String,
        link :String,
        tabUse  : Boolean,
        cols : Number,
        items : Object,
    },
    data:()=>{
        return{
            tab:null,
            
          
        }
    }
}
</script>

<style lang="scss" scoped>

/* 이슈트레킹&공기/커뮤니티 목록 */
.con_tit{font-size: 14px; font-weight: bold;line-height: 40px;}
.v-application a{text-decoration: none;font-size: 13px;color: #666666;float: right;line-height: 40px;font-weight: bold;}
.v-tabs{border-top:1px solid #ddd;border-bottom:1px solid #ddd;}
.v-tabs--icons-and-text > .v-tabs-bar{height: 44px;}
.v-card__subtitle, .v-card__text, .v-card__title{padding:0;}
.v-data-table > .v-data-table__wrapper > table{display: inline-block;}
.v-data-table > .v-data-table__wrapper > table > tbody.issue_community{display: inline-block;width: 100%;}
.v-data-table > .v-data-table__wrapper > table > tbody.issue_community > tr{display: inline-block;width: 100%;border-bottom: thin solid rgba(0, 0, 0, 0.12);}
.v-data-table > .v-data-table__wrapper > table > tbody.issue_community > tr > td{
  display: inline-block;padding-left:0px;padding-right:2%;font-size: 12px;
  line-height: 49px;border-bottom: 0 !important;height: 45px;
}
.v-data-table > .v-data-table__wrapper > table > tbody.issue_community > tr > td:first-child{
  width: 50%;padding: 5px 0; margin-right: 8%;line-height: 39px;
}
.v-data-table > .v-data-table__wrapper > table > tbody.issue_community > tr > td:last-child{float: right;padding-right:10px;}
.v-data-table > .v-data-table__wrapper > table > tbody.issue_community > tr > td > div{
  text-overflow: ellipsis; overflow: hidden; white-space: nowrap;
}


/* 일정 */
.v-data-table > .v-data-table__wrapper > table > thead.calendars{
  width:100%;display: inline-block;border-top: 4px solid #868686;
}
.v-data-table > .v-data-table__wrapper > table > thead.calendars > tr{
  width:100%;display: inline-block;border-bottom: thin solid rgb(130 130 130 / 20%);background-color: rgb(103 103 103 / 10%);
}
.v-data-table > .v-data-table__wrapper > table > thead.calendars > tr > th{
  width: 14.21%;display: inline-block;border-bottom: 0px !important;margin:0px !important;
  text-align: center !important; line-height: 47px;border-right:1px solid #d7d7d7;
  font-size: 14px;font-weight: bold;float: left;
}
.v-data-table > .v-data-table__wrapper > table > thead.calendars > tr > th:last-child{border-right:0px}
.v-data-table > .v-data-table__wrapper > table > tbody.calendars{width:100%;display: inline-block;}
.v-data-table > .v-data-table__wrapper > table > tbody.calendars > tr{width:100%;display: inline-block;background: none !important;}
.v-data-table > .v-data-table__wrapper > table > tbody.calendars > tr > td{
  width:14.28%;display: inline-table;padding:15px 0 15px 10px;border-right:1px solid #d7d7d7;float: left;
}
.v-data-table > .v-data-table__wrapper > table > tbody.calendars > tr > td:last-child{border-right:0px}



</style>
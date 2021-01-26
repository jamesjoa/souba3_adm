<template>
  <v-app>
    <v-card class="pa-2">
      <span class="con_tit">일정 ({{ calendars.week }})</span>
      <a :href="link" target="_blank" class="the_btn" v-if="link">더보기 ></a>
      <table style="border-top:1px solid #ddd">
        <thead class="calendars">
          <tr>
            <th v-for="(th ,index) in calendars.header" :key="index">{{th}}</th>
          </tr>
        </thead>
        <tbody class="calendars">
          <tr>
            <td v-for="item in calendars.list" :key="item.name">
              <div class="c_date">{{ item.date }}</div>
              <div class="c_text"><div class="circle"></div>
                <a href="/campaign" target="_blank">오픈 : {{ item.open }}</a>
              </div>
              <div class="c_text"><div class="circle"></div>
                <a href="/campaign" target="_blank">선정 : {{ item.selection }}</a>
              </div>
              <div class="c_text"><div class="circle"></div>
                <a href="/campaign" target="_blank">마감 : {{ item.end }}</a>
              </div>
              <div class="c_text"><div class="circle"></div>
                <a href="/campaign" target="_blank">완료 : {{ item.completion }}</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </v-card>
  </v-app>
</template>

<script>
export default {
  props:{
    link     : String,
    calendars: Object
  }
}
</script>

<style lang="scss" scoped>
.con_tit{font-size: 16px; font-weight: bold;line-height: 40px;}
.the_btn{
  text-decoration: none;font-size: 13px;color: #666666;float: right;line-height: 40px; 
  font-weight: bold;
}
table{
  width:100%;display: inline-block;border-top: 4px solid #868686 !important;
  thead{
    width:100%;display: inline-block;border-bottom: 1px solid #868686 !important;
    tr{
      width:100%;display: inline-block;background-color: rgb(103 103 103 / 10%);
      th{
        width: 14.28%;display: inline-block;border-bottom: 0px !important;margin:0px !important;
        text-align: center !important; line-height: 47px;border-right:1px solid #d7d7d7;
        font-size: 14px;font-weight: bold;
      }
      th:last-child{border-right:0px}
    }
  }
}
tbody{
  width:100%;display: inline-block;
  tr{
    width:100%;display: inline-block;background: none !important;
    td{
      padding:15px 0 15px 10px;border-right:1px solid #d7d7d7;
      width: 14.28%;display: inline-block;border-bottom: 0px !important;margin:0px !important;
      .c_date{
        font-size: 14px;font-weight: bold;width: 28px;height: 20px;
        border-radius: 50%;text-align: center;line-height: 20px;margin-bottom: 10px;
      }
      .c_text{
        margin-bottom: 5px;
        .circle{
          background-color: #3872F4;width: 8px;height: 8px;border-radius: 50%;display: inline-block;
          margin-right: 5px;
        }
        a{text-decoration: none;color: #000;}
      }
    }
    td:first-child{
      .c_date{font-weight: 400;background-color: #1976d2 ;color: #fff;}
    }
    td:last-child{border-right:0px}
  }
}
</style>
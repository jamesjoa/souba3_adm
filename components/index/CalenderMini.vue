<template>
  <v-app>
    <v-card class="pa-2">
      <span class="con_tit font-size-lg">일정 ({{ calendars.week }})</span>
      <NuxtLink :to="link" class="the_btn" >더보기</NuxtLink>

      <table style="border-top:1px solid #ddd" class="M_ds_none U_table01">
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

      <table class="PT_ds_none">
        <tbody class="calendars">
          <tr v-for="(item,index) in calendars.list" :key="index">
            <th style="width:80px">{{calendars.header[index]}}</th>
            <td>
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
.U_table01{
  width:100%;border-top: 4px solid #868686 !important;
  thead{
    width:100%;border-bottom: 1px solid #868686 !important;
    tr{
      width:100%;background-color: rgb(103 103 103 / 10%);
      th{
        width: 14.28%;border-bottom: 0px !important;margin:0px !important;
        text-align: center !important; line-height: 47px;border-right:1px solid #d7d7d7;
        font-size: 14px;font-weight: bold;
      }
      th:last-child{border-right:0px}
    }
  }

  tbody{
      width:100%;
      tr{
        width:100%;background: none !important;
        td{
          padding:15px 0 15px 10px;border-right:1px solid #d7d7d7;
          width: 14.28%;border-bottom: 0px !important;margin:0px !important;
          .c_date{
            font-size: 14px;font-weight: bold;width: 28px;height: 20px;
            border-radius: 50%;text-align: center;line-height: 20px;margin-bottom: 10px;
          }
          .c_text{
            margin-bottom: 5px;
            .circle{
              background-color: $color04;width: 8px;height: 8px;border-radius: 50%;
              margin-right: 5px;
            }
            a{text-decoration: none;color: #000;}
          }
        }
        td:first-child .c_date{font-weight: bold;background-color: $color07 ;}
        td:last-child{border-right:0px}
    }
  }

}

.U_table02{}



</style>
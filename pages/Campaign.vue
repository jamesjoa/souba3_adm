<template>
  <v-app>
    <div class="campaign_tit">
      캠페인리스트
      <v-btn outlined raised small>엑셀변환</v-btn>
    </div>
    <table class="c_basic_search">
      <!--<caption>기본검색</caption>//-->
      <tbody>
        <tr>
          <th>현재상태</th>
          <td colspan="3">
            <v-btn 
              elevation="0" plain raised small
              v-for="(value , index) in basic_search.state"
              :key="index+1">
              {{`${value.name} (${value.total})`}}
            </v-btn>
          </td>
        </tr>
        <tr>
          <th width="10%">타입</th>
          <td width="40%">
            <v-radio-group v-model="radioGroup">
              <v-radio
                v-for="(value ,index) in basic_search.type_name" 
                :key="index"
                :label="value"
                :value="value"
              ></v-radio>
            </v-radio-group>
          </td>
          <th width="10%">카테고리</th>
          <td width="40%">
              
          </td>
        </tr>
        <tr>
          <th>캠페인옵션</th>
          <td>
              
          </td>
          <th>지역</th>
          <td>
                
          </td>
        </tr>
        <tr>
          <th>오늘</th>
          <td>
              
          </td>
          <th>크롤링 기준(VIEW)</th>
          <td>
              
          </td>
        </tr>
        <tr>
          <th>검색어</th>
          <td>
            
          </td>
          <th>기타구분</th>
          <td>
            
          </td>
        </tr>
      </tbody>
    </table>
  </v-app>
</template>

<script>
export default {
  data:()=>({
    basic_search : {
      state : [
        {
          name : '전체',
          total : '129,689',
        },
        {
          name : '대기',
          total : '7,994',
        },
        {
          name : '오픈검수대기',
          total : '0',
        },
        {
          name : '오픈대기',
          total : '0',
        },
        {
          name : '작업대기',
          total : '700',
        },
        {
          name : '리뷰어신청(오픈)',
          total : '542',
        },
        {
          name : '선정대기',
          total : '154',
        },
        {
          name : '리뷰어발표',
          total : '0',
        },
        {
          name : '리뷰등록',
          total : '924',
        },
        {
          name : '베스트발표대기',
          total : '79,632',
        },
        {
          name : '베스트발표',
          total : '10,421',
        },
      ],
      type_name:[
        '전체',
        '방문형',
        '배송형',
        '기자단',
        '포토에디터',
        '찬스'
      ]
    }
  })
}
</script>

<style lang="scss">
.v-input__slot{margin: 0;}
.v-input--radio-group__input{
  display: inline-block;
  .v-radio{display: inline-block;margin:0 !important;}
}
</style>

<style lang="scss" scoped>
.campaign_tit{
  font-size: 23px; border-bottom: 3px solid #111; padding: 7px 5px; margin-bottom: 20px;
  margin-top: 15px;font-weight: bold;
  .v-btn{float: right;border: 1px solid #676767;font-size: 14px;}
}
table{
  border-top:1px solid #8c8c8c;
  th{
    background-color: #f6f6f6;color: #555;border-bottom:1px solid #d8d8d8;
    border-right:1px solid #d8d8d8;text-align: left;padding: 6px 5px;padding-left: 7px;
  }
  td{
    border-bottom:1px solid #d8d8d8;border-right:1px solid #d8d8d8;padding: 6px 5px;
    .v-btn{
      font-size: 13px;padding:0 5px !important;border: 1px solid #dadada;
      margin:5px 0;margin-right: 10px;
    }
  }
}
</style>

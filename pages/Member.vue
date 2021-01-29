<template>
  <v-app>
    <v-row class="ma-0 mb-5">
      <v-col class="pa-0 mr-3" cols="1">
        <v-select 
          v-model="search_key.select" :hint="`${search_key.select.keywords}`"
          :items="search_key.items" item-text="keywords" dense outlined
          class="member_select"
        ></v-select>
      </v-col>
      <v-col class="pa-0 pl-2 member_search" cols="2" style="border-right:0px">
        <v-text-field 
          v-model="search"
          append-icon="mdi-magnify"
          label="검색어"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
      <v-btn 
        class="btn mr-3" type="button" :height="40" :width="40">
        상세<v-icon>mdi-menu-down</v-icon>
      </v-btn>
      <v-col class="pa-0 mr-3 stats" cols="1">
        <div class="tit">전체</div>
        <div>{{total}}</div>
      </v-col>
      <v-col class="pa-0 mr-3 stats" cols="1">
        <div class="tit">어제가입</div>
        <div>{{join}}</div>
      </v-col>
      <v-col class="pa-0 mr-3 stats" cols="1">
        <div class="tit">어제탈퇴</div>
        <div>{{drop_out}}</div>
      </v-col>
    </v-row>

    <v-row class="ma-0 pa-5 member_data">
      <div class="check_tit">가입기간</div>
      <v-col class="pa-0 px-2" cols="1" sm="1" md="1">
        <v-menu
          ref="start_dt" v-model="start_dt" :close-on-content-click="false" :return-value.sync="date"
          transition="scale-transition" offset-y min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date" readonly v-bind="attrs" v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="start_dt = false"> Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.start_dt.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <div>~</div>
      <v-col class="pa-0 px-2" cols="1" sm="1" md="1">
        <v-menu
          ref="end_dt" v-model="end_dt" :close-on-content-click="false" :return-value.sync="date"
          transition="scale-transition" offset-y min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date" readonly v-bind="attrs" v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="end_dt = false"> Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.end_dt.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <v-row class="ma-0 mb-5 pt-3 pb-3" 
      style="border-top:1px solid #ddd; border-bottom:1px solid #ddd;">
      <v-btn style="border-right:0px"
        class="btn" type="button" :height="40" :width="40">
        <v-icon>mdi-trash-can-outline</v-icon>삭제
      </v-btn>
      <v-btn 
        class="btn mr-3" type="button" :height="40" :width="40">
        수정
      </v-btn>
      <v-btn 
        class="btn mr-3" type="button" :height="40" :width="40">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
      <v-btn style="position: absolute; right: 0;"
        class="btn" type="button" :height="40">
        엑셀다운
      </v-btn>
    </v-row>
    
    <!-- 회원리스트 -->
    <div>
      <BasicTable 
        :item="memver_list"
      />
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    start_dt: false,
    end_dt: false,
    search: '',
    total : '34,567',
    join : 67,
    drop_out : 7,

    //검색키워드
    search_key:{
      select: { keywords: '이름'},
      items: [
        { keywords: '이름'},
        { keywords: '닉네임'},
        { keywords: '아이디'},
        { keywords: '이메일'},
        { keywords: '블로그주소'},
        { keywords: '휴대폰'},
        { keywords: '추천인아니디'},
        { keywords: '제휴아이디'},
        { keywords: '페이스북URL'},
        { keywords: '인스타그램URL'},
        { keywords: '추가채널URL'},
        { keywords: '카페URL'},
      ]
    },

    //회원목록
    memver_list : {
      opstion:{
        class : 'test999999999'
      },
      headers: [
          {
            text: '이름',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '아이디', value: 'id' },
          { text: '닉네임', value: 'nick' },
          { text: '연락처', value: 'addr' },
          { text: '대표채널', value: 'chammel' },
          { text: '활동지역', value: 'area' },
          { text: '신청', value: 'ask' },
          { text: '선정', value: 'select' },
          { text: '이슈율', value: 'percent' },
          { text: '가입일', value: 'in_date' },
          { text: '최근접속', value: 'recent_access' },
          { text: '로그인', value: 'login' },
          { text: '포인트', value: 'point' },
          { text: '상태', value: 'state' },
          { text: '보기', value: 'view' ,class: 'wow'}
      ],
      list : [
        {
          name: '홍길동',
          id: 'test123',
          nick: '테스트123',
          addr: '01012345678',
          chammel: '블로그(1년)',
          area: '부산/동래구',
          ask: 5,
          select: 0,
          percent: '1',
          in_date: '21.01.27 15:00',
          recent_access: '21.01.28 15:01',
          login: 2,
          point: 100,
          state: '우수(0)',
          view: '보기',
        },
        {
          name: '강감찬',
          id: 'test123',
          nick: '테스트123',
          addr: '01012345678',
          chammel: '블로그(1년)',
          area: '부산/동래구',
          ask: 0,
          select: 7,
          percent: '1',
          in_date: '21.01.27 15:00',
          recent_access: '21.01.28 15:01',
          login: 2,
          point: 200,
          state: '우수(0)',
          view: '보기',
        },
        {
          name: '송감찬',
          id: 'test123',
          nick: '테스트123',
          addr: '01012345678',
          chammel: '블로그(1년)',
          area: '부산/동래구',
          ask: 0,
          select: 0,
          percent: '1',
          in_date: '21.01.27 15:00',
          recent_access: '21.01.28 15:01',
          login: 2,
          point: 100,
          state: '우수(0)',
          view: '보기',
        }
      ]
    },
  }),
}
</script>

<style lang="scss">
.member_select{
  .v-input__control .v-input__slot{
    margin: 0px;
  }
  .v-input__control  .v-text-field__details{display: none;}
  fieldset{color: rgba(0, 0, 0, 0.2) !important; border-radius: 0;}
  
}
.v-application .primary--text{
  color:rgba(0, 0, 0, 0.54) !important;caret-color: rgba(0, 0, 0, 0.54) !important;
}
.member_search{
  border: 1px solid rgba(0, 0, 0, 0.2);
  .v-input__slot{
    input{color: rgba(0, 0, 0, 1);}
  }
  .v-input__slot:before{display: none;}
  .v-input__slot:after{display: none;}
  .v-input__append-inner{
    height: 100%;margin: 0px;padding: 7px !important;border-left: 1px solid #ddd;
  }
}
.member_data{
  .v-text-field__details{display: none;}
  .v-input__slot{margin: 0;}
  .v-input__slot:before{display: none;}
}

</style>

<style lang="scss" scoped>
.v-input{padding:0px;margin:0px;}
.btn{
  background-color: #fff !important;box-shadow:none;border:1px solid rgba(0, 0, 0, 0.2);border-radius: 0;
  .v-icon{color: rgba(0, 0, 0, 0.54);}
  .btn{transform: rotate(180deg);}
}
.stats{
  div{display: inline-block;margin-top:11px;font-weight: bold;color:#00ba2e;}
  .tit{
    color: #000; padding-right: 5px;border-right: 1px solid rgba(0, 0, 0, 0.2);
    line-height: 18px;
  }
}
.tit{
    color: #000; padding-right: 5px;line-height: 18px;
  }
</style>
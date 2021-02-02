<template>
  <v-app>
    <v-row class="ma-0 mb-5">
      <v-col class="pa-0 mr-3" cols="4" lg="1" md="2" sm="4">
        <SelectMini 
          :item="search_key"
        />
      </v-col>
      <v-col class="pa-0 pl-2 member_search" cols="4" lg="2" md="3" sm="6" style="border-right:0px">
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
      <v-col class="pa-0 stats" cols="4" lg="1" md="2" sm="4" >
        <div class="tit">전체</div>
        <div>{{total}}</div>
      </v-col>
      <v-col class="pa-0 stats" cols="4" lg="1" md="2" sm="4" >
        <div class="tit">어제가입</div>
        <div>{{join}}</div>
      </v-col>
      <v-col class="pa-0 stats" cols="4" lg="1" md="2" sm="4" >
        <div class="tit">어제탈퇴</div>
        <div>{{drop_out}}</div>
      </v-col>
    </v-row>

    <!-- 상세설정항목 -->
    <v-row class="ma-0 px-3 py-3">
      <v-col class="px-3 py-3" cols="12" lg="6" md="6" sm="12">
        <v-row>
          <v-col cols="12" lg="2" md="2" sm="12" class="pa-0 detail_select_tit">가입기간</v-col>
          <v-col class="pa-0 mr-1" cols="4" lg="2" md="3" sm="3">
            <SelectMini 
              :item="join_key"
            />
          </v-col>
          <v-col class="pa-0 mr-1 select_date" cols="3" lg="3" md="3" sm="3">
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
          <div class="detail_select_tit">-</div>
          <v-col class="pa-0 px-2 ml-1 select_date" cols="3" lg="3" md="3" sm="3">
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
      </v-col>
      <v-col class="px-3 py-3" cols="12" lg="6" md="6" sm="12">
        <v-row>
          <v-col cols="12" lg="2" md="2" sm="12" class="pa-0 detail_select_tit">포인트</v-col>
          <v-col class="pa-0 mr-1" cols="4" lg="2" md="3" sm="3">
            <SelectMini 
              :item="point_key"
            />
          </v-col>
          <v-col class="pa-0 mr-1" cols="3" lg="3" md="3" sm="3">
            <v-text-field
              label="최소포인트"
              single-line
              outlined
              class="text_info"
            ></v-text-field>
          </v-col>
          <div class="detail_select_tit">-</div>
          <v-col class="pa-0 ml-1" cols="3" lg="3" md="3" sm="3">
            <v-text-field
              label="최대포인트"
              single-line
              outlined
              class="text_info"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="ma-0 px-3 py-3">
      <v-col class="px-3 py-3" cols="12" lg="6" md="6" sm="12">
        <v-row>
          <v-col cols="12" lg="2" md="2" sm="12" class="pa-0 detail_select_tit">성별</v-col>
          <v-col class="pa-0 mr-1" cols="12" lg="9" md="9" sm="12">
            <RadioMini 
              :items="gender"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col class="px-3 py-3" cols="12" lg="6" md="6" sm="12">
        <v-row>
          <v-col cols="12" lg="2" md="2" sm="12" class="pa-0 detail_select_tit">보유채널</v-col>
          <v-col class="pa-0 mr-1" cols="12" lg="9" md="9" sm="12">
            
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- 삭제&수정 -->
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

    //가입기간
    join_key:{
      select: { keywords: '어제'},
      items: [
        { keywords: '어제'},
        { keywords: '지난주'},
        { keywords: '최근 10일'},
        { keywords: '최근 한 달'},
        { keywords: '지난달'},
      ]
    },

    //포인트
    point_key:{
      select: { keywords: '500만이상'},
      items: [
        { keywords: '500만이상'},
        { keywords: '100~500만'},
        { keywords: '50~100만'},
        { keywords: '10~50만'},
        { keywords: '5~10만'},
        { keywords: '1~5만'},
        { keywords: '1만이하'},
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

    //성별
    gender : {
      radio_list : [
        {
          label: '전체',
          value: 'all',
        },
        {
          label: '남',
          value: 'man',
        },
        {
          label: '여',
          value: 'woman',
        }
      ]
    },
  }), 
}
</script>

<style lang="scss">

.member_search{
  border: 1px solid rgba(0, 0, 0, 0.2);
  .v-input__slot{
    input{color: rgba(0, 0, 0, 1);}
  }
  .v-input__slot:before{display: none;}
  .v-input__slot:after{display: none;}
  .v-input__append-inner{
    height: 100%;margin: 0px;padding: 7px !important;border-left: 1px solid $color08;
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
  background-color: #fff !important;box-shadow:none;border:1px solid $color08;border-radius: 0;
  .v-icon{
    color: rgba(0, 0, 0, 0.54);
    @extend .th-chkbtn;
  }
}
.stats{
  div{display: inline-block;margin-top:11px;font-weight: bold;color:#00ba2e;}
  .tit{
    color: #000; padding-right: 5px;border-right: 1px solid $color08;
    line-height: 18px;
  }
}
</style>
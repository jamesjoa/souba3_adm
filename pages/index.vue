<template>
  <v-app id="index">
    <v-row>
      <v-col cols="12" lg="6" md="12" sm="12">
          <v-row>
            <!-- 가입/탈퇴한회원수 -->
            <v-col classSet="pa-2" cols="12" md="6" sm="6">
              <StateMini 
                setClass="pa-2"
                :item="items[0]"
              />
            </v-col>
            <!-- 대기/완료계약건수 -->
            <v-col class="pa-2" cols="12" md="6" sm="6">
              <StateMini 
                setClass="pa-2"
                :item="items[1]"
              />
            </v-col>
            <!-- 일정 -->
            <v-col class="pa-2" cols="12" md="12">
              <CalendarsMini 
                :calendars="calendars"
              />
            </v-col>
          </v-row>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
          <v-row>
            <!-- 이슈 -->
            <v-col class="pa-2" cols="12" md="6" sm="6">
              <BoardMini 
                :tabUse="true"  
                link="https://naver.com" 
                title="이슈트레킹"
                :items="issue"
              />
            </v-col>
            <!-- 공지/커뮤니티 -->
            <v-col class="pa-2" cols="12" md="6" sm="6">
              <BoardMini 
                :tabUse="false"  
                link="https://naver.com" 
                title="공지/커뮤니티"
                :items="community"
              />
            </v-col>
          </v-row>
      </v-col>
      <!-- 영업 그룹 선택 -->
      <v-col cols="12">
        <v-card class="pa-2">
          <v-container fluid>
            <v-row align="center">
              <v-col cols="1">
                <v-subheader>영업그룹</v-subheader>
              </v-col>
              <v-col cols="1">
                <v-select v-model="select" :hint="`${select.state}, ${select.abbr}`" :items="sitems"
                  item-text="state" item-value="abbr" label="Select" persistent-hint
                  return-object single-line
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-row>
            <!-- 진행 중 캠페인 상세 관리 -->
            <v-col class="pa-2" cols="12" md="6" sm="6">
              <v-card class="pa-2">
                ㅁㄴㄷㅇㄹ
              </v-card>
            </v-col>
            <!-- 최근 3일 진행 완료 -->
            <v-col class="pa-2" cols="12" md="6" sm="6">
              <v-card class="pa-2">
                ㅁㄴㅇㄻ
              </v-card>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<style lang="scss" scoped>

/*


     <BoardMini 
                :tabUse="false"  
                link="https://naver.com" 
                title="공지/커뮤니티"
                :Items="community"
              />


*/



/* 영업그룹/mkt/md */
.container--fluid{padding: 0px;}
.v-text-field__details{display: none;}
</style>

<script>
import CalendarsMini from "~/components/CalenderMini.vue";
import BoardMini from "~/components/BoardMini.vue";
import StateMini from "~/components/StateMini.vue";

  export default {
    components:{
      CalendarsMini,
      BoardMini,
      StateMini
    },
    data:()=>({
      //가입/탈퇴한회원수 & 대기/완료계약건수
      items: [
        {
          avatar: require('~/assets/business_icon1.png'),
          title: '어제가입한회원 &mdash; <span class="icon_umb">7</span>명',
          subtitle: `어제탈퇴한회원 &mdash; <span class="icon_umb">0</span>명`,
        },
        {
          avatar: require('~/assets/business_icon2.png'),
          title: '계약승인대기 &mdash; <span class="icon_umb contract">20</span>건',
          subtitle: `계약승인완료 &mdash; <span class="icon_umb contract">18,807</span>건`
        }

      ],

      //일정
      week: '2021-01-20 ~ 2021-01-26',
      calendars: [
        {
          date: '20',
          open: '159',
          selection: '103',
          end: '16',
          completion: '390',
        },
      ],

      //이슈트레킹 탭
      standby_cnt:'50',
      checking_cnt:'23',
      completion_cnt:'45,929',
      tab: null,

      //이슈트레킹 목록
      issue : {
        board_info : [
          {
            title : '대기',
            total : 50,
            link  : '/Board?board=issue&cate=대기'
          },
          {
            title : '확인 중',
            total : 23,
            link  : '/Board?board=issue&cate=확인중'
          },
          {
            title : '완료',
            total : 45929,
            link  : '/Board?board=issue&cate=완료'
          },
        ],
        board_list : [
          [
            {
              name: '[송파] 대기 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            },
            {
              name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            },
            {
              name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            }
          ],
          [
            {
              name: '[송파] 확인 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            },
            {
              name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            },
            {
              name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            }
          ],
          [
            {
              name: '[송파] 완료 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            },
            {
              name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            },
            {
              name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            }
          ],
        ]
      },

      // 공지/커뮤니티 목록
      community : {
        board_info : [
          {
            title : '대기',
            total : 50,
            link  : '/Board?board=issue&cate=대기'
          }
        ],
        board_list : [
          [
            {
              name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            },
            {
              name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            },
            {
              name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            },
            {
              name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
              number: '8회차',
              date: '21.01.18',
            },
            {
              name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
              number: '6-3회차',
              date: '21.01.18',
            }
          ],
        ]
      },

      //영업그룹/mkt/md
      select: { state: '--', abbr: '--' },
      sitems: [
        { state: '--', abbr: '--' },
        { state: '전체', abbr: '전체' },
        { state: '1팀', abbr: '1팀' },
        { state: '2팀', abbr: '2팀' },
        { state: '3팀', abbr: '3팀' },
        { state: 'B2B 1팀', abbr: 'B2B 1팀' },
        { state: 'B2B 2팀', abbr: 'B2B 2팀' },
        { state: 'NCT', abbr: 'NCT' },
        { state: 'NCT에이블', abbr: 'NCT에이블' },
        { state: '에이전시', abbr: '에이전시' }
      ],
    })
  }
</script>
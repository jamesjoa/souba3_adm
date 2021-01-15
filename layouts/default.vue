<template>
  <v-app dark>
    <!--모달-->
    {{$store.state.loading
    /*
    <Loading :Loading="$store.state.loading && false" :text="$store.state.loadingTxt" />
    
    */
    }}
    <!--로딩-->


    <!--왼쪽 네비 -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
        v-if="false"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
        v-if="false"

      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="/*right = !right*/">
          <v-list-item-title v-if="false">Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      style="position:fixed"
      :absolute="!fixed"
      app
    >
      <span> {{ /*new Date().getFullYear()*/ }}
        COPYRIGHT&copy; 서울오빠 - 블로그체험단 All Rights Reserved.
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
  components: {
    Loading
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '메인페이지',
          to: '/'
        },
        {
          icon: 'mdi-home',
          title: '사용자홈',
          to: '/Home'
        },
        {
          icon: 'mdi-domain',
          title: '업체관리',
          to: '/Company'
        },
        {
          icon: 'mdi-text-box-search-outline',
          title: '캠페인관리',
          to: '/Campaign'
        },
        {
          icon: 'mdi-account-multiple',
          title: '영업그룹관리',
          to: '/Group'
        },
        {
          icon: 'mdi-card-account-details',
          title: '영업자관리',
          to: '/Marketer'
        },
        {
          icon: 'mdi-account-search',
          title: '서울오빠 회원관리',
          to: '/Member'
        },
        {
          icon: 'mdi-cash-usd',
          title: '환급신청관리',
          to: '/Refunds'
        },
        {
          icon: 'mdi-table-large',
          title: '통계관리',
          to: '/BusinessOwner'
        },
        {
          icon: 'mdi-alert-circle-outline',
          title: '이슈관리',
          to: '/Issue'
        },
        {
          icon: 'mdi-calendar-range',
          title: '일정관리',
          to: '/Calendar'
        },
        {
          icon: 'mdi-message-processing',
          title: 'SMS관리',
          to: '/Sms'
        },
        {
          icon: 'mdi-bulletin-board',
          title: '게시판',
          to: '/Board'
        }
      ],
      miniVariant: false,
      right: true,  
      rightDrawer: false,
      title: '서울오빠'
    }
  },
  mounted(){
    //alert('?');
  },
  middleware({app, store, redirect, route,query,req,res}) {
    
    //console.dir(req)
    //console.dir(req.get('User-Agent'))
    //console.dir(req.headers)
    //console.log(query);
    //console.log(store.state.login);
    //console.log(app.$nuxt);
    //console.log(app.$auth.strategies.local.options.JSHToken);
    //console.log(app.$auth)

    let basePage;  
    if(route.name !== "Login")
      basePage = route.name    

    if(!app.$auth.strategies.local.options.JSHToken && route.name !== "Login")
      return redirect(`/Login${basePage ? '?basePage='+basePage : ''}`)


  }
}
</script>

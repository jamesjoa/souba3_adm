<template>
  <v-app dark>
    <!--모달-->
    <template v-for="(data, index) in $store.state.modalList">
      <ModalList :type="data" :key="index" :index="index" />
    </template>
    

    <!--로딩-->
    <Loading :Loading="$store.state.loading" :text="$store.state.loadingTxt" />

    <!--왼쪽 네비 -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-if="$store.state.login"
      class="U_gnb"
      fixed
      app
    >
      <v-list>
          <div
              v-for="(item, i) in $store.state.$menu"
              :key="i"
              class="U-dep1"
              :class="item.active ? 'U-dep1-on':'' "
          >
            <v-list-item
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
            <div 
              v-if="item.dep2" 
              class="U-dep2"
            >
              <v-btn 
                class="btn" 
                type="button" 
                :height="48" 
                :width="48" 
                :fab="true"
                :depressed="false"
                :plain="false"
                :outlined="false"
                exact-active-class="on"
                @click="()=>{item.active = item.active ? false : true }">
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
              <v-list>
                <v-list-item
                  v-for="(item2,j) in item.dep2"
                  :key="j"
                  :to="item2.to"
                >
                <v-list-item-content>
                  <v-list-item-title v-text="item2.title" style="font-size:0.9em" />
                </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      v-if="$store.state.login"
      :clipped-left="clipped"
      fixed
      app
      class="U_hd"
      height="45"
    >
      <v-app-bar-nav-icon 
        @click.stop="drawer = !drawer"
       />
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
      <v-toolbar-title v-text="title" class="logo_tit"/>
      
      <v-spacer />

      <NuxtLink to="/">
        <v-btn
          icon
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </NuxtLink>
     
      <v-btn
        icon
        @click="$store.dispatch('LOGOUTOUT')"
      >
        <v-icon>mdi-account-arrow-right-outline</v-icon>
      </v-btn>

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
        <p>
          {{$store.router}}
        </p>
        <nuxt />
      </v-container>
    </v-main>
   
  </v-app>
</template>

<script>
/*
    <v-footer
      style="position:fixed"
      :absolute="!fixed"
      app
    >
      <span>
        COPYRIGHT&copy; 서울오빠 - 블로그체험단 All Rights Reserved.
        {{$store.state.query.basePage}}
      </span>
    </v-footer>
*/

import Loading  from "@/components/Loading.vue";
import ModalList from "@/components/ModalList.vue";

export default {
  components: {
    Loading,
    ModalList
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,  
      rightDrawer: false,
      title: '서울오빠'
    }
  },
  middleware: 'authCheck',
  mounted(){
    this.$store.dispatch('CHECK_LODDING')
    console.log('check new loding update test')
  },
}
</script>


<style lang="scss">
.container{max-width:100% !important;min-width: 310px !important;}
.v-navigation-drawer{
  border-right: 1px solid #ddd;
  .v-list{padding: 0;}
}
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){box-shadow: none;border-bottom: 1px solid #ddd;}

/* gnb setting */
.U-dep1{position:relative;width:100%}
.U-dep2{
  .btn{position:absolute;left:185px;top:0;z-index:99;}
  .v-list{display:none}
  .theme--light.v-btn.v-btn--has-bg{background: none!important;box-shadow:0 0 0}

}
.v-list-item--active+.U-dep2 , .U-dep1-on .U-dep2{
  .v-list{display:block}
  .btn{transform: rotate(180deg);}
}
.U-dep2 .v-list-item__content{padding-left:70px}

/* hd titile */
.logo_tit{
  @extend .U_ft_sz04;
  font-weight: 500;
}

/* hd gb */
.U_hd {
  @extend .U_gd_bg01;
  * {color:#fff}
}

/* nav */
.U_gnb{
  //@extend .U_gd_bg02;
  border: 0!important;
  background: $color-frame!important;
  * {color:#fff!important}
}

</style>

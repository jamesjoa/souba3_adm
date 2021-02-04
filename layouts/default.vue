<template>
  <v-app dark>
    <!--모달-->
    <template v-for="(data, index) in $store.state.modalList">
      <ModalList :type="data" :key="index" :index="index" />
    </template>
    

    <!--로딩-->
    <Loading :Loading="$store.state.loading" :text="$store.state.loadingTxt" />
  
    <!--왼쪽 네비 -->
    <Gnb :drawer="drawer" height="100px"/>
    
    <v-app-bar
      v-if="$store.state.login"
      :clipped-left="clipped"
      fixed
      app
      class="U_hd"
      height="45"
    >
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer"/>

      <v-btn icon @click.stop="clipped = !clipped" v-if="false">
        <v-icon>mdi-application</v-icon>
      </v-btn>

      <v-btn icon @click.stop="fixed = !fixed" v-if="false">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      
      <v-toolbar-title v-text="title" class="logo_tit"/>
      
      <v-spacer />

      <NuxtLink to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </NuxtLink>

      <v-btn icon @click="bell=true">
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon @click="$store.dispatch('LOGOUTOUT')">
        <v-icon>mdi-account-arrow-right-outline</v-icon>
      </v-btn>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <Bell :bell="bell"  @close="bell=false" />
    
    <Snb :rightDrawer="rightDrawer"  />

    <v-main>
      <Banner />
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
   
  </v-app>
</template>

<script>
import Bell from "@/components/default/Bell.vue";
import Loading  from "@/components/default/Loading.vue";
import ModalList from "@/components/default/ModalList.vue";
import Gnb from "@/components/default/Gnb.vue";
import Banner from "@/components/default/Banner.vue";
import Snb from "@/components/default/Snb.vue";

export default {
  components: {
    Loading,
    ModalList,
    Bell,
    Gnb,
    Banner,
    Snb
  },
  data () {
    return {
      drawer: false,
      fixed: false,
      bell: false,
      right: true,  
      rightDrawer: false,
      clipped: false,
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
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){box-shadow: none;}

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

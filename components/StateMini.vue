<template>
  <v-card :class="classSet">
    <v-list two-line>
      <v-list-item :key="item.title">
        <v-list-item-avatar>
          <img :src="item.avatar">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="item.title" class="icon_text"></v-list-item-title>
          <v-list-item-title v-html="item.subtitle" class="icon_text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props:{
    classSet : String,
    item : Object
  }
}
</script>

<style lang="scss">
.icon_text{
  .icon_umb{
    font-weight: bold;font-size: 22px;
    @media screen and (max-width:1080px){
        font-size: 22px;
    }
    @media screen and (max-width:768px){
        font-size: 20px;
    }
    @media screen and (max-width:480px){
        font-size: 20px;
    }
    @media screen and (max-width:400px){
        font-size: 18px;
    }
    @media screen and (max-width:350px){
        font-size: 18px;
    }
  }
  .icon_umb.contract{color: $color05;}
}
</style>

<style lang="scss" scoped>
.v-list{
  padding: 0;
  hr{display:none}
  .v-avatar{
    width: 50px !important;height: 50px !important;min-width: 50px !important;
    margin-top: 0 !important;margin-bottom: 0 !important;border-radius: unset;
    img{border-radius: unset}
  }
}
</style>
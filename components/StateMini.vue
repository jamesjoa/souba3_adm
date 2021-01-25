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
  .icon_umb{font-weight: bold;font-size: 20px;}
  .icon_umb.contract{color: #FE8464;}
}
</style>

<style lang="scss" scoped>
.icon_text{color:#000;line-height: 25px;font-size: 14px;}
.v-list{
  padding: 0;
  hr{display:none}
  .v-avatar{
    width: 50px !important;height: 50px !important;min-width: 50px !important;
    margin-top: 0 !important;margin-bottom: 0 !important;
    img{border-radius: unset}
  }
}
</style>
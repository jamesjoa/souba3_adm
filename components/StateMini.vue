<template>
  <v-card :class="classSet">
    <v-list two-line>
        <v-list-item :key="item.title">
            <v-list-item-avatar>
            <img :src="item.avatar">
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title v-html="item.title" class="icon_text"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle" class="icon_text"></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-card>
</template>

<script>

/*
    <template v-for="(item, index) in items.slice(0, 6)">
        <v-divider :key="index" :inset="item.inset"></v-divider>
       
        </template>

*/
export default {
    props:{
        classSet : String,
        item : Object
    }
}
</script>

<style lang="scss" scoped>

  .icon_text{color:#000;line-height: 25px;font-size: 12px;}
  .icon_text .icon_umb{font-weight: bold;font-size: 18px;}
  .icon_text .icon_umb.contract{color: #FE8464;}

  .v-list{padding: 0;
  hr{display:none}
  .v-avatar{
    width: 50px !important;height: 50px !important;min-width: 50px !important;
    margin-top: 0 !important;margin-bottom: 0 !important;
    
    img{border-radius: unset}
  }
}

</style>
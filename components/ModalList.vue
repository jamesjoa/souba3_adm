<template>
  <v-wrap id="U-modal">
    <button class="close" @click="()=>{$store.commit('deleteModalList',type.type)}" ></button>
    <div class="wrap">
        <div class="content" :style="{width:`${type.width}px`,height:`${type.height}px`}">
          <h3 style="color:#pink;font-size:30px">
            {{type}}
          </h3>
        </div>
     </div>   
  </v-wrap>
</template>

<script>
export default {
  props: {
    type: Object,
    index: Number,
  },
}
</script>

<style lang="scss">
#U-modal{
  width:100%;height:100%;position: fixed;top:0;left:0;z-index:999;background: rgba(0,0,0,0.8);display:table;
  .close{position:absolute;width:100%;height:100%;left:0;top:0;}
  .wrap{width:100%;height:100%;display: table-cell;vertical-align: middle;}
  .content{max-width:100%;max-height: 100%;margin: auto;background: #fff;position: relative;}
}

</style>
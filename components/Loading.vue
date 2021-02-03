<template>
  <div class="loading-page" v-if="loading" >
    <div class="loading-content">
      <div class="loading"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'loading',
    props:{
      text:String,
      loading:Boolean
    }
  }
</script>
<style scoped lang="scss">
  .loading-page {
    background:$color-mask;
    @extend .U_modal;
  }
  .loading-content{
    @extend .U_modal_wrap;
  }
  .loading {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border: 4px solid $color-base;
    border-radius: 50%;
    border-top-color: $color-theme01;
    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>

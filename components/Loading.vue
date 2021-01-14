<template>
  <div v-if="loading" class="loading-page">
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
<style scoped>
  .loading-page {
    width: 100%;
    height: 100%;
    position: fixed;
    background:rgba(0,0,0,0.8);
    z-index: 999;
    vertical-align: middle;
    display: table;
  }
  .loading-content{
    display: table-cell;
    width:100%;
    height:100%;
    vertical-align: middle;
    text-align: center;
  }
  .loading {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border: 4px solid rgb(255, 255, 255);
    border-radius: 50%;
    border-top-color: rgba(98,146,255,1);
    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>

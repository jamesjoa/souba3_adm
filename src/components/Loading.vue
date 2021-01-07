<template>
  <div class="U_loding U_maskbox T_ps_fx">
    <div class="U_ct_box01 T_wd_full">
      <div class="T_ft_ct U_ft_cfff T_ft_rem9">
        <div>
          <v-progress-circular indeterminate></v-progress-circular>
        </div>
        <br/>
        {{$store.state.loadingTxt}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'loding',

}
</script>

<style>
    .U_loding{z-index: 99999;}
    .U_loding{}
</style>
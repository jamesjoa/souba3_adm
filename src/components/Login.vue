<template>
  <div class="U_login U_maskbox T_ps_fx">
    <div class="U_ct_box01 T_wd_full">
      <div>
        <div class="U_login_content U_mg_ct" >
          <v-text-field
            label="ID"
            :rules="rules"
            hide-details="auto"
            v-model="id"
          ></v-text-field>
          <v-text-field 
            :rules="rules"
            label="PASSWORD"
            type="password"
            v-model="pw"
          ></v-text-field>
          <v-btn
            block
            color="primary"
          >
            <button  class="T_wd_full" @click="loginFN">로그인</button>
          </v-btn>
          <div class="T_ft_ct T_ft_rem8" style="margin-top:15px">{{info_text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"login",
  data:function(){
    return{
      id : 'admin',
      pw : '1111',
      login_try : false,
      info_text : '로그인 후 사용할수 있습니다.',
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 4) || 'Required',
      ],
    }
  },
  computed:{
  },
  methods:{
    loginFN : function () {
      const data = {
        id : this.id,
        pw : this.pw,
      }
      this.$store.dispatch("LOGIN",data);
    },
  }
}
</script>

<style>
    .U_login{z-index: 9999;}
    .U_login_content{background:#fff;max-width:300px;padding:20px}
</style>
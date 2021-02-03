<template>
    <div class="U_login" >
        <div class="wrap">
            <v-card class="content U_clear">
                <div class="left_con  PT_fl_lt">
                    <div class="">
                            ??
                    </div>
                </div>
                <div class="right_con PT_fl_rt">
                    <div class="title">
                        <v-icon>mdi-account</v-icon>
                    </div>

                    <v-card-text>
                        <v-text-field
                            label="ID"
                            v-model="id"
                            outlined
                            solo
                            dense
                            background-color="#fff"
                        ></v-text-field>
                        <v-text-field
                            item-text="name"
                            label="Password"
                            type="password"
                            v-model="pw"
                            solo
                            dense
                            background-color="#fff"
                        ></v-text-field>
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-card-text>
                        <v-alert
                            dense
                            outlined
                            type="error"
                            v-if="err"
                        >
                            <strong>정보가 맞지 않습니다.</strong> ID 와 Password를 <strong>다시 확인하여</strong> 접속해주세요
                        </v-alert>

                        <button
                            @click="loginFN"
                            class="btn01"
                        >
                            Login
                        </button>
                    </v-card-text>
                    </v-card-actions>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name:"login",
    data:function(){
    return{
        id : 'super',
        pw : 'super@2016',
        err : false
    }
    },
    computed:{
    },
    created() {
    },
    methods:{
         loginFN : async function () {
            const data = {
                id : this.id,
                pw : this.pw,
            }
            await this.$store.dispatch("LOGIN",data)
            if(this.$store.state.login){ 
                if(this.$store.state.query.basePage)
                    this.$store.$router.go(`/${this.$store.state.query.basePage}`)
                else
                    this.$store.$router.go('/')
            }else 
                this.err = true
        }
    },
}
</script>

<style lang="scss">

.U_login{

    background:$color-out;
    @extend .U_modal;

    .wrap{ 
        @extend .U_modal_wrap;
    }

    .content{
        background:  $color09;
        @extend .U_modal_content;
        @extend .U_wrap2;
    }



    .U_login_content{
        //@extend .bg_gd01;
        background: $color09;
        padding:30px;
        max-width:400px;
        margin: 0 auto
    }
    .title{
        padding:30px;text-align: center;
        .v-icon{width:80px;height:80px;border-radius: 50%;background:rgba(255,255,255,0.8);font-size:3.5rem}
    }
    .btn01{
        @extend .U_btn01;
        @extend .U_ft_sz01;
    }

    .right_con{
        width:50%;
        background:$color-base;
        @include mb{
            width:100%
        }
    } 
    .left_con {
        background: $color09;
        width:50%;
    }


}
</style>
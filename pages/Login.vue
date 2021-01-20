<template>
    <v-app>
        <v-card
            class="overflow-hidden"
        >
            <v-toolbar
            flat
            >
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-light">
                로그인
            </v-toolbar-title>
            <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
            <v-text-field
                label="ID"
                v-model="id"
            ></v-text-field>
            <v-text-field
                item-text="name"
                label="Password"
                type="password"
                v-model="pw"
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

                <v-btn
                    @click="loginFN"
                >
                    Login
                </v-btn>
            </v-card-text>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>
export default {
    name:"login",
    data:function(){
    return{
        id : 'admin',
        pw : '1111',
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

<style>
</style>
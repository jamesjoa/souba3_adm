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
            <v-btn
                @click="loginFN"
            >
                Login
            </v-btn>
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
            this.$store.dispatch("LOGIN",data).then(() =>{
                if(this.$store.state.login){
                    alert('로그인이 성공하였으니 메인페이지로 이동합니다')
                    //this.$store.$router.go('/')
                }else    
                    alert('다시입력해!')
            })
        }
    },
}
</script>

<style>
</style>
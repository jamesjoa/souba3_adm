<template>
    <v-app>
        <v-card
            class="overflow-hidden"
            color="wirte lighten-1"
            dark
        >
            <v-toolbar
            flat
            color="wirte"
            >
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-light">
                로그인
            </v-toolbar-title>
            <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
            <v-text-field
                color="white"
                label="ID"
                v-model="id"
            ></v-text-field>
            <v-text-field
                color="white"
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
                color="success"
                @click="loginFN"
            >
                Login
            </v-btn>
            <v-btn @click="loadingTest">
                test-loding2
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
            this.$store.dispatch("LOGIN",data)
        },
        loadingTest : function(){
            this.$store.dispatch("CHECK_LODDING")
        }
    },
}
</script>

<style>
</style>
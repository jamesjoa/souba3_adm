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
                color="blue lighten-1"
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
                //this.$store.$router.go('/')
            })
        }
    },
    created(){
        console.log('?')
        this.$store.dispatch('CHECK_LODDING').then(() =>{
            console.log(this.$store.state.login)
            if(this.$store.state.login){
                if(this.$store.state.query.basePage){
                    //this.$store.$router.go('/')
                }else{
                    //this.$store.$router.go('/')
                }
                    //this.$store.$router.go(`/${this.$store.state.query.basePage}`);
            }
        //console.dir(this.$store.$router.go(-1))   

        
        })
  },

}
</script>

<style>
</style>
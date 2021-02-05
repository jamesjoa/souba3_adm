<template>
    <div style="position:relative">
        <div v-if="!hide">
            <v-carousel v-model="model" :height="height ? height : '100px'" hide-delimiters>
                <v-carousel-item
                    v-for="(color, i) in colors"
                    :key="color"
                >
                    <v-sheet
                        :color="color"
                        height="100%"
                        tile
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <v-col class="display-1" height="100%">
                            알림배너 {{ i + 1 }}
                        </v-col>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>        
        </div>

        <button
            @click="hide = !hide"
            style="position:absolute;right:10px;top:0;width:30px;height:30px;background:#273c4d !important;color:#fff"
        >
            <v-icon v-if="hide" small style="color:#fff">
                mdi-bulletin-board
            </v-icon>

             <v-icon v-if="!hide"  small style="color:#fff">
                mdi-close
            </v-icon>
        </button>

        <v-btn 
            x-small
            @click="ckHide()"
            style="position:absolute;bottom:10px;right:10px;background:rgba(255,255,255,0.3);color:#fff">
            24시간 숨기기
            <v-icon
                x-small
                style="color:#fff"
            >   
                mdi-close
            </v-icon>
        </v-btn> 

    </div>
</template>

<script>
export default {
    props:{
        height: String,
    },
    created(){
        this.$store.dispatch('GET_COOKIE',{name:'banner'}).then(data=>{
            if(data)
                this.hide = data
        })
    },
    data(){
        return{
            hide : false,
            model: 0,
            colors: [
            'black',
            'orange',
            ],          
        }
    },
    methods:{
        ckHide:function() {
            this.hide = true
            this.$store.dispatch('SET_COOKIE',{name:'banner',value:true})
        }
    }
}
</script>

<style>

</style>
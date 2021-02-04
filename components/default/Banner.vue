<template>
    <div>
        <v-carousel v-model="model" :height="height ? height : '150px' ">
            <v-carousel-item
                v-for="(color, i) in colors"
                :key="color"
            >
                <v-sheet
                :color="color"
                height="100%"
                tile
                >
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                    <div class="display-3">
                    알림배너 {{ i + 1 }}
                    </div>
                </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    props:{
        height: String
    },
    data(){
        return{
            model: 0,
            colors: [
            'black',
            'orange',
            ],          
        }
        
    }
}
</script>

<style>

</style>
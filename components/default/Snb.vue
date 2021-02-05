<template>
    <v-navigation-drawer
        v-model="show"
        temporary
        fixed
        :right="right"
    >
        <v-list>
            <v-list-item @click.native="/*right = !right*/">
                <v-list-item-title v-if="false">Switch drawer (click me)</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props:{
        rightDrawer : Boolean
    },
    data(){
        return{
            right: true,  
            show : null
        }
    },
    watch:{
        rightDrawer : function(){
            this.show = this.rightDrawer
        },
        show : function(){
            if(!this.show)
                this.$emit('close',false)
        }
    }

}
</script>

<style>

</style>
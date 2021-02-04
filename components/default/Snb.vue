<template>
    <v-navigation-drawer
        v-model="rightDrawer"
        temporary
        fixed
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
        }
    },

}
</script>

<style>

</style>
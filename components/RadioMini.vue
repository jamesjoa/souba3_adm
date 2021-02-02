<template>
    <v-app> 
        <v-radio-group v-model="radioGroup">
            <v-radio
            v-for="(item, index) in items.radio_list"
            :key="index"
            :label="item.label"
            :value="item.value"
            ></v-radio>
      </v-radio-group>
    </v-app> 
</template>

<script>
export default {
    props:{
        items   : Object,
    },
    data:()=>{
      return{

      }
    }
}
</script>
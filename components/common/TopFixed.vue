<template>
    <v-container>
        <v-row>
            <v-col  md="6" sm="6" cols="12">
                <v-row>
                    <v-col cols="2" >
                        <v-select
                            label="Outlined style"
                            dense
                            outlined
                        ></v-select>
                    </v-col>
                    <v-col cols="8">
                        <v-text-field
                        label="Outlined"
                        placeholder="Placeholder"
                        outlined
                        dense
                        ></v-text-field>
                    </v-col>
                    <v-col cols="1" >
                        <v-btn>
                            <v-icon>
                                mdi-magnify
                            </v-icon>
                        </v-btn>
                    </v-col>
                    
                    <v-col cols="1" >
                        <v-btn>
                            상세
                            <v-icon>
                                mdi-chevron-down
                            </v-icon>
                            <v-icon>
                                mdi-chevron-up
                            </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col text-right md="6" sm="6" cols="12">
                <a href="">전체 | 123</a>
                <a href="">전체 | 123</a>
                <a href="">전체 | 123</a>
            </v-col>
        </v-row>
        <v-row>
            <v-col  md="1" sm="1" cols="1">
            </v-col>
            <v-col  md="5" sm="5" cols="12">
                <v-checkbox
                    label="John"
                    value="John"
                 ></v-checkbox>
                 <v-btn>삭제</v-btn>
                 <v-btn>수정</v-btn>
            </v-col>
            <v-col  md="6" sm="6" cols="12">
                 <v-btn>삭제</v-btn>
                 <v-btn>수정</v-btn>       
                 <v-btn>수정</v-btn>
            </v-col>
        </v-row>



    </v-container>
</template>

<script>
export default {
    props:{
        leftBtn : Array,
        rightBtn : Array,
        search : Object,
        cate : Array,
    },
    methods:{
        
    }
}
</script>

<style>

</style>
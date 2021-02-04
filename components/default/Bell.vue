<template>
    <v-bottom-sheet
        inset
        v-model="show"
    >
        <v-sheet height="3000px">
            <v-toolbar
                color="white"
                flat
            >
            <v-btn
              icon
              light
              @click="close()"
            >
              <v-icon color="grey darken-2">
                mdi-arrow-left
              </v-icon>
            </v-btn>
  
            <v-toolbar-title class="grey--text text--darken-4 U_ft_fm01">
              알림창
            </v-toolbar-title>
  
            <v-spacer></v-spacer>
  
            <v-btn
              light
              small
            >
                모두 삭제
            </v-btn>
          </v-toolbar>

            <v-list two-line>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index">
                        <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar>
                            <v-btn icon>
                                <v-icon>
                                    mdi-close-circle-outline
                                </v-icon>
                            </v-btn>
                        </v-list-item-avatar>
                        
                    </v-list-item>
                </template>
            </v-list>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>

export default {
    props:{
        bell : Boolean
    },
    data(){
        return{
            show : null,
            items: [
                {
                    title: 'Brunch this weekend?',
                    subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                },
                {
                    title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                    subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                },
                {
                    title: 'Oui oui',
                    subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
                },
                {
                    title: 'Birthday gift',
                    subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
                },
                {
                    title: 'Recipe to try',
                    subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                },]
        }
    },
    watch:{
        bell : function(){
            this.show = this.bell
        },
        show : function(){
            if(!this.show)
                this.close()
        }
    },
    methods:{
        close: function(){
            this.$emit("close")
        }
    }
}
</script>

<style>

</style>
<template>
    <v-app id="inspire">
        <v-row class="fill-height">
            <v-col>
                <v-sheet height="64">
                    <v-toolbar flat>
                        <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
                            Today
                        </v-btn>
                        <v-btn fab text small color="grey darken-2" @click="prev">
                            <v-icon small>
                                mdi-chevron-left
                            </v-icon>
                        </v-btn>
                        <v-toolbar-title v-if="$refs.calendar">
                            {{ $refs.calendar.title }}
                        </v-toolbar-title>
                        <v-btn fab text small color="grey darken-2" @click="next">
                            <v-icon small>
                                mdi-chevron-right
                            </v-icon>
                        </v-btn>
                        <v-col cols="1" class="calendar_select_box">
                            <v-select v-model="md.select" :hint="`${md.select.md_id}`"
                            :items="md.items"
                            item-text="md_id" item-value="abbr" label="Select" persistent-hint
                            return-object single-line class="calendar_select_field"
                            ></v-select>
                        </v-col>
                        <v-col cols="1" class="calendar_select_box">
                            <v-select v-model="grp.select" :hint="`${grp.select.grp_cd}`"
                            :items="grp.items"
                            item-text="grp_cd" item-value="abbr" label="Select" persistent-hint
                            return-object single-line class="calendar_select_field"
                            ></v-select>
                        </v-col>
                    </v-toolbar>
                </v-sheet>
                <v-sheet height="600">
                    <v-calendar
                        ref="calendar"
                        v-model="focus"
                        color="primary"
                        :events="events"
                        :event-color="getEventColor"
                        :type="type"
                        @click:event="showEvent"
                        @click:more="viewDay"
                        @click:date="viewDay"
                        @change="updateRange"
                        class="calendar_box"
                    ></v-calendar>
                    <v-menu
                        v-model="selectedOpen"
                        :close-on-content-click="false"
                        :activator="selectedElement"
                        offset-x
                    >
                        <v-card
                            color="grey lighten-4"
                            min-width="350px"
                            flat
                        >
                            <v-toolbar :color="selectedEvent.color">
                                <v-btn icon>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-card-text>
                                <span v-html="selectedEvent.details"></span>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    text
                                    color="secondary"
                                    @click="selectedOpen = false"
                                >
                                    Cancel
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu>
                </v-sheet>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
export default {
    data: () => ({
    focus: '',
    type: 'month',
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['purple', 'green'],
    names: ['오픈', '선정', '마감', '완료'],

    //md
    md:{
      select: { md_id: '전체'},
      items: [
        { md_id: '전체'},
        { md_id: '김종현'},
        { md_id: '김중희'},
        { md_id: '박가영'},
        { md_id: '양양'},
        { md_id: '이한나'},
        { md_id: '제임스'},
        { md_id: '주빛나'}
      ]
    },

    //grp
    grp:{
      select: { grp_cd: '전체'},
      items: [
        { grp_cd: '--'},
        { grp_cd: '전체'},
        { grp_cd: '1팀'},
        { grp_cd: '2팀'},
        { grp_cd: '3팀'},
        { grp_cd: 'B2B 1팀'},
        { grp_cd: 'B2B 2팀'},
        { grp_cd: 'NCT'},
        { grp_cd: 'NCT에이블'},
        { grp_cd: '에이전시'}
      ]
    },
  }),
  mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    //viewDay ({ date }) {
    //  this.focus = date
    //  this.type = 'day'
    //},
    //getEventColor (event) {
    //  return event.color
    //},
    setToday () {
      this.focus = ''
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        })
      }

      this.events = events
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>

<style lang="scss">
.calendar_select_field{
  .v-text-field__details{display: none;}
}
.calendar_select_box{
  .v-input__slot:before{display: none;}
  .v-input__slot:after{display: none;}
  .v-input__slot{
    margin: 0;
    .v-select__selections{line-height: 23px;}
    .v-input__append-inner{
      margin: 0;margin-top: 7px;
      .primary--text {color: rgba(0, 0, 0, 0.54) !important;}
    }
  }
}
.calendar_box{
    .v-calendar-weekly__head{
        height: 50px;background-color: #f0f0f0;border-top: 4px solid #868686 !important;
        border-bottom: 1px solid #868686 !important;
        .v-calendar-weekly__head-weekday{font-size: 16px;line-height: 40px;font-weight: bold;}
        .v-outside{background-color: #f0f0f0 !important;}
    }
    
}
</style>

<style lang="scss" scoped>
.calendar_select_box{
  padding-left: 0;padding-right: 0;margin-right:40px;
  .v-input{padding: 5px;margin: 0;border: 1px solid #dcdcdc;}
}
.v-subheader{
  font-size: 14px;font-weight: bold;height: 72px;color:unset;
  display: inline-block; line-height: 72px;
}  
</style>
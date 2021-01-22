<template>
    <v-card class="pa-2">
        <span class="con_tit">{{ week }}</span>
        <a href="" class="the_btn">더보기 ></a>
        <v-simple-table style="border-top:1px solid #ddd">
        <template v-slot:default>
            <thead class="calendars">
            <tr>
                <th class="text-left">수</th>
                <th class="text-left">목</th>
                <th class="text-left">금</th>
                <th class="text-left">토</th>
                <th class="text-left">일</th>
                <th class="text-left">월</th>
                <th class="text-left">화</th>
            </tr>
            </thead>
            <tbody class="calendars">
            <tr v-for="item in calendars" :key="item.name">
                <td>
                <div class="c_date on">{{ item.date }}</div>
                <div class="c_text"><div class="circle"></div>오픈 : {{ item.open }}</div>
                <div class="c_text"><div class="circle"></div>선정 : {{ item.selection }}</div>
                <div class="c_text"><div class="circle"></div>마감 : {{ item.end }}</div>
                <div class="c_text"><div class="circle"></div>완료 : {{ item.completion }}</div>
                </td>
                <td>
                <div class="c_date">{{ item.date }}</div>
                <div class="c_text"><div class="circle"></div>오픈 : {{ item.open }}</div>
                <div class="c_text"><div class="circle"></div>선정 : {{ item.selection }}</div>
                <div class="c_text"><div class="circle"></div>마감 : {{ item.end }}</div>
                <div class="c_text"><div class="circle"></div>완료 : {{ item.completion }}</div>
                </td>
                <td>
                <div class="c_date">{{ item.date }}</div>
                <div class="c_text"><div class="circle"></div>오픈 : {{ item.open }}</div>
                <div class="c_text"><div class="circle"></div>선정 : {{ item.selection }}</div>
                <div class="c_text"><div class="circle"></div>마감 : {{ item.end }}</div>
                <div class="c_text"><div class="circle"></div>완료 : {{ item.completion }}</div>
                </td>
                <td>
                <div class="c_date">{{ item.date }}</div>
                <div class="c_text"><div class="circle"></div>오픈 : {{ item.open }}</div>
                <div class="c_text"><div class="circle"></div>선정 : {{ item.selection }}</div>
                <div class="c_text"><div class="circle"></div>마감 : {{ item.end }}</div>
                <div class="c_text"><div class="circle"></div>완료 : {{ item.completion }}</div>
                </td>
                <td>
                <div class="c_date">{{ item.date }}</div>
                <div class="c_text"><div class="circle"></div>오픈 : {{ item.open }}</div>
                <div class="c_text"><div class="circle"></div>선정 : {{ item.selection }}</div>
                <div class="c_text"><div class="circle"></div>마감 : {{ item.end }}</div>
                <div class="c_text"><div class="circle"></div>완료 : {{ item.completion }}</div>
                </td>
                <td>
                <div class="c_date">{{ item.date }}</div>
                <div class="c_text"><div class="circle"></div>오픈 : {{ item.open }}</div>
                <div class="c_text"><div class="circle"></div>선정 : {{ item.selection }}</div>
                <div class="c_text"><div class="circle"></div>마감 : {{ item.end }}</div>
                <div class="c_text"><div class="circle"></div>완료 : {{ item.completion }}</div>
                </td>
                <td>
                <div class="c_date">{{ item.date }}</div>
                <div class="c_text"><div class="circle"></div>오픈 : {{ item.open }}</div>
                <div class="c_text"><div class="circle"></div>선정 : {{ item.selection }}</div>
                <div class="c_text"><div class="circle"></div>마감 : {{ item.end }}</div>
                <div class="c_text"><div class="circle"></div>완료 : {{ item.completion }}</div>
                </td>
            </tr>
            </tbody>
        </template>
        </v-simple-table>
    </v-card>
</template>

<script>
export default {
    props:{
        calendars: Object
    }

}
</script>

<style scoped>
.c_date{
  font-size: 12px;font-weight: bold;width: 22px;height: 18px;
  border-radius: 50%;text-align: center;line-height: 19px;margin-bottom: 10px;
}
.c_date.on{background-color: #FEBA2A;color: #000;}
.c_text{margin-bottom: 5px;}
.c_text .circle{
  background-color: #3872F4;width: 8px;height: 8px;border-radius: 50%;display: inline-block;
  margin-right: 5px;
}
</style>
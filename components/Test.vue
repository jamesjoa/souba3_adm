<template>
  <div style="padding:50px 0">
      <strong style="display:block;padding-bottom:20px;font-size:16px">게시판예시</strong>
      <ul>
          <li style="border-bottom:1px solid #d9d9d9" class="U_clear" v-for=" (item,index) in list" :key="index"> 
            <img src="" alt="" style="width:100px;height:100px;background:pink;float:left" :style="{backgroundColor:item.img_link}">
            <a :href="item.link" style="float:left;height:100px;box-sizing:border-box;padding:5px">{{item.tit}}</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                tit:'A',
                link:'naver.com',
                img_link:'red'
                },
                
                {
                tit:'B',
                link:'daum.net',
                img_link:'blue'
                },
                
                {
                tit:'C',
                link:'kakao.com',
                img_link:'green'
                },
                               
            ]
        }
    }
}

</script>


<style>




</style>

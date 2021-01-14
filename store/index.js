//import Vuex from 'vuex'
//import Vue from 'vue'
import axios from 'axios';

//Vue.use(Vuex)
const BASEURL = 'http://test2.seoulouba.kr/';
export default {
    state: {
        $g5 :{},
        $config :{},
        $menu : {},
        $view :[],
        $list : [],
        $wirte : [],
        $baseURL : {
          loding :BASEURL+'plugin/seoba3/ajax_loding.php',
          login :BASEURL+'plugin/seoba3/ajax_login.php',
        },
        $url : {},
        modalList : [],
        loadingTxt : '페이지를 로딩중입니다.',
        loading : true,
        login : false,
        test : 0,
      },
      getters:{
     
      },
      mutations: {
        testConsole(state){
            state.test++;
        },
        addModalList(state, data) {
          state.modalList.push(data)
        },
        deleteModalList(state, data) {
          state.modalList.splice(data, 1)
        },
        loginTry(state,data){
            state.$url = data.base_url
            if(data.state)
              state.login = true
            else
              state.login = false

            state.loading = false
        },
        loding(state,text){
          if(text)
            state.loadingTxt = text
          else 
            state.loadingTxt = '페이지를 로딩중입니다.'
    
          state.loding = true
        },
        lodingEnd(state){
          state.loding = false
        },
        login(state,TOKEN){
          sessionStorage.setItem("accessToken", TOKEN);
          state.login = true
        }
      },
      actions: {
        async TESTING(sto){
            await sto.commit('testConsole');
            console.log(sto.state.test)
        },
        async LOGIN(sto,data){
          axios({
            method: 'POST',
            url: sto.state.$baseURL.login,
            data: data,
            headers: { 'Content-Type': 'multipart/form-data' },
          }).then(res=>{
            if(res.data.state){
              sto.commit('login',res.data.TOKEN)
              sto.dispatch('CHECK_LODDING')
            }
          }).catch(err=>{
            console.log(err)
          })
        },
        async CHECK_LODDING(sto){
          await sto.commit("loding",'초기데이터를 불러오는 중입니다.')
          await axios({
            method: 'POST',
            url: sto.state.$baseURL.loding,
            headers: { 
                'Authorization': window.sessionStorage.getItem("accessToken"),
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
          }).then(res=>{
            console.log('aixos-data:'+res.data)
            sto.commit("loginTry",res.data)
          }).catch(err=>{
            console.log(err)
          })
        },
      },
      modules: {
      }
}
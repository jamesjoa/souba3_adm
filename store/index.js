//const cookieparser = process.server ? require('cookieparser') : undefined
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
          loading :BASEURL+'plugin/seoba3/ajax_loading.php',
          login :BASEURL+'plugin/seoba3/ajax_login.php',
        },
        $url : {},
        modalList : [],
        loadingTxt : '페이지를 로딩중입니다.',
        loading : true,
        login : false,
        query : {}
      },
      getters:{
     
      },
      mutations: {
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
        },
        loadingStart(state,text){
          if(text)
            state.loadingTxt = text
          else 
            state.loadingTxt = '페이지를 로딩중입니다.'
    
          state.loading = true
        },
        loadingEnd(state){
          state.loading = false
        },
        login(state,TOKEN){
          sessionStorage.setItem("accessToken", TOKEN);
          state.login = true
        },
        querySet(state){
          const url = document.location.href;
          let qs = url.substring(url.indexOf('?') + 1).split('&')
          const result = []
          for(let i = 0;i < qs.length; i++){
              qs[i] = qs[i].split('=')
              result[qs[i][0]] = decodeURIComponent(qs[i][1])
          }
          state.query = result
        }
      },
      actions: {
        async TESTING(sto){
            await sto.commit('testConsole');
            console.log(sto.state.test)
        },
        async LOGIN(sto,data){
          this.$axios({
            method: 'POST',
            url: sto.state.$baseURL.login,
            data: data,
            headers: { 'Content-Type': 'multipart/form-data' },
          }).then(res=>{
            if(res.data.state){
              this.$auth.strategies.local.options.JSHToken = res.data.TOKEN
              sto.commit('login',res.data.TOKEN)
              sto.dispatch('CHECK_LODDING')
            }
          }).catch(err=>{
            console.log(err)
          })
        },
        async CHECK_LODDING(sto){
          if(typeof window == 'undefined')
            console.log('server'/*cookieparser*/)
          else{
            await this.$axios({
              method: 'POST',
              url: sto.state.$baseURL.loading,
              headers: { 
                  'Authorization': window.sessionStorage.getItem("accessToken"),
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json"
              },
            }).then(res=>{
              sto.commit("querySet")
              sto.commit("loginTry",res.data)
              sto.commit("loadingEnd")
            }).catch(err=>{
              console.log(err)
            })
          }
        }
      },
      modules: {
      }
}
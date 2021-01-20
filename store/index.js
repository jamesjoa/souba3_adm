//const cookieparser = process.server ? require('cookieparser') : undefined
const BASEURL = 'http://test2.seoulouba.kr/';


export default {
    state: { // 01.전역으로 변수를 저장하고 부를때
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
        loading : false,
        login : false,
        loginToken : '',
        query : {},
        sayhello : 0
      },
      getters:{ //에도 coputed와 같은 친구 감지하고 바꿔줘요!
     
      },
      mutations: { // state값을 변경하고 저장해줘요! //불러올때는 commit !
        test(state){
          state.sayhello++
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
        },
        loadingStart(state,text){
          if(text)
            state.loadingTxt = text
          else 
            state.loadingTxt = '페이지를 로딩중입니다.'
    
          alert(state.loading)
          state.loading = true
        },
        loadingEnd(state){
          state.loading = false
        },
        login(state,TOKEN){
          document.cookie = "accessToken="+TOKEN
          state.loginToken = TOKEN
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
      actions: { //전역함수! 불러올떈 dispatch
        async TESTING(sto){
            await sto.commit('testConsole');
        },
        async LOGIN(sto,data){
          await this.$axios({
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
        async SERVER_LODING(sto){
          console.dir(this);
        },
        async CHECK_LODDING(sto){
          if(typeof window == 'undefined'){
          }
          else{
            await this.$axios({
              method: 'POST',
              url: sto.state.$baseURL.loading,
              headers: { 
                  'Authorization': sto.state.loginToken,
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json"
              },
            }).then(res=>{
              sto.commit("querySet")
              sto.commit("loginTry",res.data)
              sto.commit("loadingEnd")
              console.log(res);
            }).catch(err=>{
              console.log(err)
            })
          }
        }
      },
      modules: {
      }
}
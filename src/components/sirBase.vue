<template>
  <header id="hd">
    <h1>서울오빠</h1>
    <div id="hd_top">
      <button
        type="button"
        id="btn_gnb"
        class="btn_gnb_close "
      >
        메뉴
      </button>
      <div id="logo">
        <a href="#">
          <img
            src="http://sob2.com/adm/img/logo.png"
            alt="서울오빠 관리자"
          >
        </a>
      </div>

      <div id="tnb">
        <ul>
          <li class="tnb_li">
            <a
              href="#"
              class="tnb_service"
            >몌뉴</a>
          </li>
        </ul>
      </div>
    </div>
    <nav
      id="gnb"
      class="gnb_large "
    >
      <h2>관리자 주메뉴</h2>
      <ul class="gnb_ul">
        <li class="gnb_li">
          <button
            type="button"
            class="btn_op menu-100 menu-order-1"
            title="환경설정"
          >
            
          </button>
          <div class="gnb_oparea_wr">
            <div class="gnb_oparea">
              <h3>환경설정</h3>
              <ul>
                <li data-menu="100100">
                  <a
                    href="http://sob2.com/adm/config_form.php"
                    class="gnb_2da  "
                  >기본환경설정</a>
                </li>
                <li data-menu="100200">
                  <a
                    href="http://sob2.com/adm/auth_list.php"
                    class="gnb_2da  "
                  >관리권한설정</a>
                </li>
                <li data-menu="100280">
                  <a
                    href="http://sob2.com/adm/theme.php"
                    class="gnb_2da gnb_grp_style gnb_grp_div"
                  >테마설정</a>
                </li>
                <li data-menu="100290">
                  <a
                    href="http://sob2.com/adm/menu_list.php"
                    class="gnb_2da gnb_grp_style "
                  >메뉴설정</a>
                </li>
                <li data-menu="100300">
                  <a
                    href="http://sob2.com/adm/sendmail_test.php"
                    class="gnb_2da  gnb_grp_div"
                  >메일 테스트</a>
                </li>
                <li data-menu="100310">
                  <a
                    href="http://sob2.com/adm/newwinlist.php"
                    class="gnb_2da  "
                  >팝업레이어관리</a>
                </li>
                <li data-menu="100800">
                  <a
                    href="http://sob2.com/adm/session_file_delete.php"
                    class="gnb_2da gnb_grp_style gnb_grp_div"
                  >세션파일 일괄삭제</a>
                </li>
                <li data-menu="100900">
                  <a
                    href="http://sob2.com/adm/cache_file_delete.php"
                    class="gnb_2da gnb_grp_style "
                  >캐시파일 일괄삭제</a>
                </li>
                <li data-menu="100910">
                  <a
                    href="http://sob2.com/adm/captcha_file_delete.php"
                    class="gnb_2da gnb_grp_style "
                  >캡챠파일 일괄삭제</a>
                </li><li data-menu="100920">
                  <a
                    href="http://sob2.com/adm/thumbnail_file_delete.php"
                    class="gnb_2da gnb_grp_style "
                  >썸네일파일 일괄삭제</a>
                </li><li data-menu="100500">
                  <a
                    href="http://sob2.com/adm/phpinfo.php"
                    class="gnb_2da  gnb_grp_div"
                  >phpinfo()</a>
                </li><li data-menu="100510">
                  <a
                    href="http://sob2.com/adm/browscap.php"
                    class="gnb_2da  "
                  >Browscap 업데이트</a>
                </li><li data-menu="100520">
                  <a
                    href="http://sob2.com/adm/browscap_convert.php"
                    class="gnb_2da  "
                  >접속로그 변환</a>
                </li><li data-menu="100410">
                  <a
                    href="http://sob2.com/adm/dbupgrade.php"
                    class="gnb_2da  "
                  >DB업그레이드</a>
                </li>
                <li data-menu="100400">
                  <a
                    href="http://sob2.com/adm/service.php"
                    class="gnb_2da  "
                  >부가서비스</a>
                </li>
              </ul>
            </div>
          </div>
        </li>   
      </ul>
    </nav>
  </header>
</template>

<script >
export default {

}
</script>

<style scoped lang="scss">
  @import url("../scss/sirAdmin.scss");
</style>
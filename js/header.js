/* headerの表示 */
$(function() {
  var nav = $('.main-header');
  //表示位置
  var navTop = 640;
  //ナビゲーションの高さ（シャドウの分だけ足してます）
  var navHeight = nav.height();
  var showFlug = false;
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    if (winTop >= navTop) {
      if (showFlug == false) {
        showFlug = true;
        nav.removeClass('bg-none');
      }
    } else if (winTop <= navTop) {
      if (showFlug) {
        showFlug = false;
        nav.addClass('bg-none');
      }
    }
  });
});

/*********************************************************
 # Code
 *********************************************************/
(function () {
  //modal
  var card = document.querySelectorAll('.card');
  var contents = document.querySelectorAll('.contents');
  var modal = document.querySelector('.modal');
  var modal_btn = document.querySelector('.modal_btn');
  var modal_btn_close = document.querySelector('.modal_btn_close');
  var modal_btn_next = document.querySelector('.modal_btn_next');
  var modal_btn_prev = document.querySelector('.modal_btn_prev');
  var story_hero = document.querySelector('.story_hero');
  var card_number = 0;
  var modal_number = 0;
  var position = 0;
  var timer;
  var count = 0;
  Array.prototype.forEach.call(card, function (el) {
    el.addEventListener('click', function (e) {
      card_number = Array.prototype.indexOf.call(card, el) + 1;
      modal.classList.add('view');
      modal.classList.remove('hide'); //top_animation_stop

      story_hero.classList.add('stop'); //背景スクロール禁止

      document.body.classList.add('story_fix');
      position = Math.round(e.pageY - e.clientY);
      document.body.style.top = -position + 'px';
      Array.prototype.forEach.call(contents, function (z) {
        timer = window.setTimeout(a, 10);

        function a() {
          z.parentElement.classList.add('viewUl');
        }

        z.classList.add('hideInner');
        modal_number = Array.prototype.indexOf.call(contents, z) + 1;

        if (z.classList.contains('current')) {
          z.classList.remove('current');
        }

        if (modal_number === card_number) {
          var b = function b() {
            z.classList.add('current');
            z.classList.remove('hideInner');
          };

          timer = window.setTimeout(b, 30);
        }
      });
    });
  }); //閉じるボタンクリック

  modal_btn_close.addEventListener('click', function (el) {
    modal.classList.add('hide'); //top_animation_restart

    story_hero.classList.remove('stop'); //背景スクロール禁止解除

    document.body.classList.remove('story_fix');
    document.body.style.top = '';
    window.scrollTo(0, position);
    timer = window.setTimeout(a, 200);

    function a() {
      modal.classList.remove('view');
      Array.prototype.forEach.call(contents, function (e) {
        e.parentElement.classList.remove('viewUl');

        if (e.classList.contains('current')) {
          e.classList.remove('current');
          e.classList.add('hideInner');
        }
      });
    }
  }); //modal背景クリックで閉じる

  modal.addEventListener('click', function (el) {
    if (count > 10) {
      if (el.target.children[0]) {
        if (el.target.children[0].classList.contains('contents')) {
          var a = function a() {
            modal.classList.remove('view');
            Array.prototype.forEach.call(contents, function (e) {
              e.parentElement.classList.remove('viewUl');

              if (e.classList.contains('current')) {
                e.classList.remove('current');
                e.classList.add('hideInner');
              }
            });
          };

          modal.classList.add('hide'); //top_animation_restart

          story_hero.classList.remove('stop'); //背景スクロール禁止解除

          document.body.classList.remove('story_fix');
          document.body.style.top = '';
          window.scrollTo(0, position);
          timer = window.setTimeout(a, 200);
        }
      }

      if (el.target.classList.contains('modal')) {
        var _a = function _a() {
          modal.classList.remove('view');
          Array.prototype.forEach.call(contents, function (e) {
            e.parentElement.classList.remove('viewUl');

            if (e.classList.contains('current')) {
              e.classList.remove('current');
              e.classList.add('hideInner');
            }
          });
        };

        modal.classList.add('hide'); //top_animation_restart

        story_hero.classList.remove('stop'); //背景スクロール禁止解除

        document.body.classList.remove('story_fix');
        document.body.style.top = '';
        window.scrollTo(0, position);
        timer = window.setTimeout(_a, 200);
      }
    }
  });

  if (modal_btn) {
    modal_btn.addEventListener('click', function (el) {
      if (el.target.classList.contains('modal_btn')) {
        var a = function a() {
          modal.classList.remove('view');
          Array.prototype.forEach.call(contents, function (e) {
            e.parentElement.classList.remove('viewUl');

            if (e.classList.contains('current')) {
              e.classList.remove('current');
              e.classList.add('hideInner');
            }
          });
        };

        modal.classList.add('hide'); //top_animation_restart

        story_hero.classList.remove('stop'); //背景スクロール禁止解除

        document.body.classList.remove('story_fix');
        document.body.style.top = '';
        window.scrollTo(0, position);
        timer = window.setTimeout(a, 200);
      }
    });
  }

  count = window.setInterval(n, 100);

  function n() {
    count += 1;
  } //nextボタンクリック


  modal_btn_next.addEventListener('click', function (el) {
    if (count >= 10) {
      clickNextBtn();
    }
  }); //prevボタンクリック

  modal_btn_prev.addEventListener('click', function (el) {
    if (count >= 10) {
      clickPrevBtn();
    }
  });

  function clickNextBtn() {
    var number;
    Array.prototype.forEach.call(contents, function (e) {
      number = Array.prototype.indexOf.call(contents, e) + 1;
    });
    Array.prototype.forEach.call(contents, function (e) {
      modal_number = Array.prototype.indexOf.call(contents, e) + 1;
      var current = document.querySelector('.current');

      if (current) {
        card_number = Array.prototype.indexOf.call(contents, current) + 1;
      }

      if (card_number < number) {
        var a = function a() {
          if (e.classList.contains('current')) {
            e.classList.remove('current');
            e.classList.add('hideInner');
            e.classList.remove('fadeOutLeft');
          }
        };

        if (e.classList.contains('current')) {
          e.classList.add('fadeOutLeft');
        }

        timer = window.setTimeout(a, 200);
        card_number += 1;
      }

      if (card_number === modal_number) {
        var b = function b() {
          if (e.classList.contains('current')) {
            var c = function c() {
              number = 1;
              modal_number = 1;
              contents[0].classList.add('current');
              contents[0].classList.remove('hideInner');
              contents[0].classList.add('fadeInRight');
              timer = window.setTimeout(f, 800);

              function f() {
                contents[0].classList.remove('fadeInRight');
              }
            };

            var g = function g() {
              e.classList.remove('fadeOutLeft');
              e.classList.remove('current');
              e.classList.add('hideInner');
            };

            e.classList.add("fadeOutLeft");
            timer = window.setTimeout(c, 500);
            timer = window.setTimeout(g, 300);
          } else {
            e.classList.add('current');
            e.classList.remove('hideInner');
            e.classList.add('fadeInRight');
          }
        };

        var d = function d() {
          e.classList.remove('fadeInRight');
        };

        timer = window.setTimeout(b, 300);
        timer = window.setTimeout(d, 800);
      }
    });
    count = 0;
  }

  function clickPrevBtn() {
    var number;
    Array.prototype.forEach.call(contents, function (e) {
      number = Array.prototype.indexOf.call(contents, e) + 1;
    });
    var current_number = 0;
    Array.prototype.forEach.call(contents, function (e) {
      modal_number = Array.prototype.indexOf.call(contents, e) + 1;

      if (e.classList.contains('current')) {
        current_number = modal_number; // 最後に移動する処理（ループ）

        if (current_number === 1) {
          var z = function z() {
            e.classList.add('fadeOutRight');
            timer = window.setTimeout(y, 300);

            function y() {
              e.classList.remove('current');
              e.classList.add('hideInner');
              e.classList.remove('fadeOutRight');
              timer = window.setTimeout(w, 200);

              function w() {
                contents[contents.length - 1].classList.add('current');
                contents[contents.length - 1].classList.remove('hideInner');
                contents[contents.length - 1].classList.add('fadeInLeft');
              }

              modal_number = contents.length;
              current_number = contents.length - 2;
            }
          };

          var x = function x() {
            contents[contents.length - 1].classList.remove('fadeInLeft');
          };

          timer = window.setTimeout(z, 200);
          timer = window.setTimeout(x, 1000);
        }

        current_number -= 1;
      }
    });
    Array.prototype.forEach.call(contents, function (e) {
      modal_number = Array.prototype.indexOf.call(contents, e) + 1;

      if (e.classList.contains('current')) {
        if (current_number !== 0) {
          var a = function a() {
            e.classList.remove('current');
            e.classList.add('hideInner');
            e.classList.remove('fadeOutRight');
          };

          e.classList.add('fadeOutRight');
          timer = window.setTimeout(a, 200);
        }
      }

      if (current_number === modal_number) {
        var b = function b() {
          e.classList.add('current');
          e.classList.remove('hideInner');
          e.classList.add('fadeInLeft');
        };

        var c = function c() {
          e.classList.remove('fadeInLeft');
        };

        timer = window.setTimeout(b, 300);
        timer = window.setTimeout(c, 800);
      }
    });
    count = 0;
  } // スワイプイベント


  var measuredValue = [0, 0]; // pc

  window.addEventListener('mousedown', function (e) {
    measuredValue[0] = e.pageX;
  }, false);
  window.addEventListener('mouseup', function (e) {
    var difference = 100;
    measuredValue[1] = e.pageX;
    modalSwipe(difference);
  }, false); // sp

  window.addEventListener('touchstart', function (e) {
    measuredValue[0] = e.touches[0].pageX;
  }, false);
  window.addEventListener('touchend', function (e) {
    var difference = 100;
    measuredValue[1] = e.changedTouches[0].pageX;
    modalSwipe(difference);
  }, false); // pc, sp共通

  function modalSwipe(n) {
    if (modal.classList.contains('view') && measuredValue[0] - measuredValue[1] < -n) {
      clickPrevBtn();
    } else if (modal.classList.contains('view') && measuredValue[0] - measuredValue[1] > n) {
      clickNextBtn();
    }

    Array.prototype.forEach.call(measuredValue, function (el, i, arr) {
      arr[i] = 0;
    });
  }
})();

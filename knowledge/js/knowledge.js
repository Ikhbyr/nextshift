/*********************************************************
 # Code
 *********************************************************/
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var scroll = new SmoothScroll('a[href*="#"]', {
      updateURL: false,
      // offset: 200,
      speedAsDuration: true // speed: 1000,
      // easing: 'Linear'

    });
  }); // Floating Elements

  var floatingElem = function floatingElem(obj) {
    var floatingY = 0;
    var floatingYEx = 0;
    var floatingFlg = 0;
    var targets = document.querySelectorAll('.' + obj.target);
    window.addEventListener('scroll', function () {
      clearTimeout(timer);
      var timer = setTimeout(function () {
        var floatingRect = document.querySelector('.' + obj.point);

        if (floatingRect) {
          var floatingRectB = floatingRect.getBoundingClientRect();
          floatingY = floatingRectB.top - 56;
        }

        var floatingRectEx = document.querySelector('.' + obj.targetLeave);

        if (floatingRectEx) {
          var floatingRectExB = floatingRectEx.getBoundingClientRect();
          floatingYEx = floatingRectExB.top - window.innerHeight + 200;
        }

        if (floatingY <= 0) {
          Array.prototype.forEach.call(targets, function (el) {
            el.classList.add(el.dataset.floatingEnter);
            el.classList.remove(el.dataset.floatingLeave);
          });

          if (floatingYEx <= 0) {
            Array.prototype.forEach.call(targets, function (el) {
              el.classList.add(el.dataset.floatingLeave);
              el.classList.remove(el.dataset.floatingEnter);
            });
          }

          floatingFlg = 1;
        } else if (floatingFlg) {
          Array.prototype.forEach.call(targets, function (el) {
            el.classList.add(el.dataset.floatingLeave);
            el.classList.remove(el.dataset.floatingEnter);
            floatingFlg = 0;
          });
        }
      }, obj.interval);
    });
  };

  floatingElem({
    point: 'floatingPoint',
    target: 'floating',
    targetLeave: 'floatingLeave',
    interval: 100
  }); // modal

  var knowledge_modal = document.querySelector('.knowledge_modal');
  var knowledge_modal_inner = document.querySelector('.knowledge_modal_inner');
  var knowledge_modal_btn = document.querySelector('.knowledge_modal_btn');
  var knowledge_modal_btn_next = document.querySelector('.knowledge_modal_btn_next');
  var knowledge_modal_btn_prev = document.querySelector('.knowledge_modal_btn_prev');
  var knowledge_card = document.querySelectorAll('.knowledge_card');
  var contents = document.querySelectorAll('.contents');
  var count = 0;
  var card_number = 0;
  var timer = 0;
  var modal_number = 0;
  var topScroll = 0;

  if (knowledge_card) {
    Array.prototype.forEach.call(knowledge_card, function (el, i) {
      el.addEventListener('click', function (e) {
        //一度modalの中身をリセット
        knowledge_modal_inner.innerHTML = ''; // clickしたcardの番号

        card_number = Array.prototype.indexOf.call(knowledge_card, el) + 1;
        knowledge_modal.classList.remove('hide');
        knowledge_modal.classList.add('view'); // modalにclickしたコンテンツを入れ込む

        Array.prototype.forEach.call(contents, function (e) {
          knowledge_modal_inner.innerHTML += '<li class="knowledge_modal_inner_contents">' + e.outerHTML + '</li>';
        }); // modalに入れ込んだコンテンツの表示

        var knowledge_modal_inner_contents = document.querySelectorAll('.knowledge_modal_inner_contents');

        if (knowledge_modal_inner_contents) {
          Array.prototype.forEach.call(knowledge_modal_inner_contents, function (b) {
            modal_number = Array.prototype.indexOf.call(knowledge_modal_inner_contents, b) + 1;
            b.classList.remove('current');
            b.classList.add('hide');

            if (card_number === modal_number) {
              b.classList.add('current');
              b.classList.remove('hide');
            }
          });
        } //背景スクロール禁止


        timer = window.setTimeout(a, 500);

        function a() {
          if (knowledge_modal.classList.contains('view')) {
            topScroll = window.pageYOffset;
            document.body.style.marginTop = "-" + topScroll + "px";
            document.body.classList.add('knowledge_fix');
          }
        }
      });
    }); // modalの閉じるボタンクリック

    knowledge_modal_btn.addEventListener('click', function (el) {
      if (knowledge_modal.classList.contains('view')) {
        var a = function a() {
          knowledge_modal.classList.remove('view');
        };

        knowledge_modal.classList.add('hide');
        knowledge_modal_inner.innerHTML = '';
        timer = window.setTimeout(a, 200);
      }

      Array.prototype.forEach.call(contents, function (e) {
        if (e.classList.contains('current')) {
          var _a = function _a() {
            knowledge_modal.style.display = 'none';
          };

          e.classList.remove('current');
          e.classList.add('hide');
          timer = window.setTimeout(_a, 200);
        }
      }); //背景スクロール禁止解除

      rockCancel();
    }); //modal背景クリックで閉じる

    knowledge_modal.addEventListener('click', function (el, i) {
      if (count >= 10) {
        if (el.target.classList.contains('knowledge_modal')) {
          if (knowledge_modal.classList.contains('view')) {
            var a = function a() {
              knowledge_modal.classList.remove('view');
            };

            knowledge_modal.classList.add('hide');
            knowledge_modal_inner.innerHTML = '';
            timer = window.setTimeout(a, 200);
          }

          Array.prototype.forEach.call(contents, function (e) {
            if (e.classList.contains('current')) {
              var _a2 = function _a2() {
                knowledge_modal.style.display = 'none';
              };

              e.classList.remove('current');
              e.classList.add('hide');
              timer = window.setTimeout(_a2, 200);
            }
          });
        }

        if (el.target.classList.contains('contents')) {
          if (knowledge_modal.classList.contains('view')) {
            var _a3 = function _a3() {
              knowledge_modal.classList.remove('view');
            };

            knowledge_modal.classList.add('hide');
            knowledge_modal_inner.innerHTML = '';
            timer = window.setTimeout(_a3, 200);
          }

          Array.prototype.forEach.call(contents, function (e) {
            if (e.classList.contains('current')) {
              var _a4 = function _a4() {
                knowledge_modal.style.display = 'none';
              };

              e.classList.remove('current');
              e.classList.add('hide');
              timer = window.setTimeout(_a4, 200);
            }
          });
        } //背景スクロール禁止解除


        if (knowledge_modal.classList.contains('hide')) {
          rockCancel();
        }
      }
    }); // modalのnextボタンクリック

    knowledge_modal_btn_next.addEventListener('click', function (e) {
      e.stopPropagation();

      if (count >= 10) {
        clickNextBtn();
      }

      return false;
    }, false); // modalのprevボタンクリック

    knowledge_modal_btn_prev.addEventListener('click', function (e) {
      e.stopPropagation();

      if (count >= 10) {
        clickPrevBtn();
      }

      return false;
    }, false);
  }

  function rockCancel() {
    document.body.classList.remove('knowledge_fix');
    document.body.style.marginTop = "";
    window.scrollTo(0, topScroll);
  }

  function clickNextBtn() {
    var knowledge_modal_inner_contents = document.querySelectorAll('.knowledge_modal_inner_contents');
    var number_log = 0;

    if (knowledge_modal_inner_contents.length === card_number) {}

    if (knowledge_modal_inner_contents) {
      Array.prototype.forEach.call(knowledge_modal_inner_contents, function (e, i) {
        number_log = Array.prototype.indexOf.call(knowledge_modal_inner_contents, e) + 1;
        e.classList.remove("moveIn_left");
      });
      Array.prototype.forEach.call(knowledge_modal_inner_contents, function (e, j) {
        card_number = Array.prototype.indexOf.call(knowledge_modal_inner_contents, e) + 1;
        var current = document.querySelector('.current');

        if (current) {
          modal_number = Array.prototype.indexOf.call(knowledge_modal_inner_contents, current) + 1;
        }

        if (number_log > modal_number) {
          var a = function a() {
            if (e.classList.contains('current')) {
              e.classList.remove('current');
              e.classList.add('hide');
              e.classList.remove('moveOut_left');
            }
          };

          if (e.classList.contains('current')) {
            e.classList.add('moveOut_left');
          }

          timer = window.setTimeout(a, 200);
          modal_number += 1;
        }

        if (card_number === modal_number) {
          var b = function b() {
            if (e.classList.contains('current')) {
              var _c = function _c() {
                number_log = 0;
                modal_number = 0;
                knowledge_modal_inner_contents[0].classList.add('current');
                knowledge_modal_inner_contents[0].classList.remove('hide');
                knowledge_modal_inner_contents[0].classList.add('moveIn_left');
                timer = window.setTimeout(f, 600);

                function f() {
                  knowledge_modal_inner_contents[0].classList.remove('moveIn_left');
                }
              };

              var g = function g() {
                e.classList.remove('moveOut_left');
                e.classList.remove('current');
                e.classList.add('hide');
              };

              e.classList.add("moveOut_left");
              timer = window.setTimeout(_c, 400);
              timer = window.setTimeout(g, 600);
            } else {
              e.classList.add('moveIn_left');
              e.classList.add('current');
              e.classList.remove('hide');
            }
          };

          var c = function c() {
            e.classList.remove('moveIn_left');
          };

          timer = window.setTimeout(b, 200);
          timer = window.setTimeout(c, 1000);
        }
      });
    }
  }

  function clickPrevBtn() {
    var knowledge_modal_inner_contents = document.querySelectorAll('.knowledge_modal_inner_contents');
    var number_log = 0;

    if (knowledge_modal_inner_contents) {
      Array.prototype.forEach.call(knowledge_modal_inner_contents, function (e) {
        number_log = Array.prototype.indexOf.call(knowledge_modal_inner_contents, e) + 1;
      });
      Array.prototype.forEach.call(knowledge_modal_inner_contents, function (e) {
        card_number = Array.prototype.indexOf.call(knowledge_modal_inner_contents, e) + 1;
        var current = document.querySelector('.current');

        if (current) {
          modal_number = Array.prototype.indexOf.call(knowledge_modal_inner_contents, current) + 1;
        }

        if (modal_number === 1) {
          var a = function a() {
            e.classList.remove('current');
            e.classList.add('hide');
            knowledge_modal_inner_contents[knowledge_modal_inner_contents.length - 1].classList.add('current');
            knowledge_modal_inner_contents[knowledge_modal_inner_contents.length - 1].classList.remove('hide');
            knowledge_modal_inner_contents[knowledge_modal_inner_contents.length - 1].classList.add('moveIn_right');
            modal_number = knowledge_modal_inner_contents.length;
            card_number = knowledge_modal_inner_contents.length - 2;
          };

          var b = function b() {
            knowledge_modal_inner_contents[knowledge_modal_inner_contents.length - 1].classList.remove('moveIn_right');
          };

          timer = window.setTimeout(a, 200);
          timer = window.setTimeout(b, 600);
        }

        if (number_log >= modal_number) {
          if (modal_number !== 1) {
            var _a5 = function _a5() {
              if (e.classList.contains('current')) {
                e.classList.remove('current');
                e.classList.add('hide');
                e.classList.remove('moveOut_right');
              }
            };

            if (e.classList.contains('current')) {
              e.classList.add('moveOut_right');
            }

            timer = window.setTimeout(_a5, 200);
          }

          modal_number -= 1;
        }

        if (card_number === modal_number) {
          var _b = function _b() {
            if (e.classList.contains('current')) {} else {
              e.classList.add('moveIn_right');
              e.classList.add('current');
              e.classList.remove('hide');
            }
          };

          var c = function c() {
            e.classList.remove('moveIn_right');
          };

          timer = window.setTimeout(_b, 200);
          timer = window.setTimeout(c, 1000);
        }
      });
    }
  } // アコーディオンのボタンクリック


  var contentsBody = document.querySelectorAll('.contents');
  var accordion_btn = document.querySelectorAll('.accordion_btn');
  var accordionClose = document.querySelectorAll('.accordionClose');
  var accordionClose_bottom = document.querySelectorAll('.accordionClose_bottom');
  Array.prototype.forEach.call(contentsBody, function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      return false;
    }, false);
    el.classList.add('hide2');
    timer = window.setTimeout(a, 1000);

    function a() {
      el.style.height = 'auto';
    }
  });
  Array.prototype.forEach.call(accordion_btn, function (el, i) {
    el.addEventListener('click', function (e) {
      e.stopPropagation(); //選択したコンテンツを表示

      if (contentsBody[i].classList.contains('hide2')) {
        if (e.target.children[0]) {
          contentsBody[i].classList.remove('hide2');
          contentsBody[i].classList.add('current2');
          contentsBody[i].classList.add('view2');
          accordionClose[i].classList.add('open2');
        }
      } else if (contentsBody[i].classList.contains('current2')) {
        if (e.target.children[0]) {
          contentsBody[i].classList.remove('current2');
          contentsBody[i].classList.remove('view2');
          accordionClose[i].classList.remove('open2');
          contentsBody[i].classList.add('hide2');
          contentsBody[i].classList.add('close2');
        }
      }

      return false;
    }, false);
  }); // アコーディオンの閉じるボタンクリック

  Array.prototype.forEach.call(accordionClose, function (el, i) {
    el.addEventListener('click', function (e) {
      //選択したコンテンツを非表示
      if (accordionClose[i].classList.contains('open2')) {
        contentsBody[i].classList.remove('current2');
        contentsBody[i].classList.remove('view2');
        accordionClose[i].classList.remove('open2');
        contentsBody[i].classList.add('hide2');
        contentsBody[i].classList.add('close2');
      } else {
        contentsBody[i].classList.remove('hide2');
        contentsBody[i].classList.add('current2');
        contentsBody[i].classList.add('view2');
        accordionClose[i].classList.add('open2');
      }
    });
  });
  Array.prototype.forEach.call(accordionClose_bottom, function (el, i) {
    el.addEventListener('click', function (e) {
      contentsBody[i].classList.remove('current2');
      contentsBody[i].classList.remove('view2');
      accordionClose[i].classList.remove('open2');
      contentsBody[i].classList.add('hide2');
      contentsBody[i].classList.add('close2');
    });
  });
  count = window.setInterval(n, 100);

  function n() {
    count += 1;
  } // スワイプイベント


  var measuredValue = [0, 0]; // pc

  window.addEventListener('mousedown', function (e) {
    measuredValue[0] = e.pageX;
  }, false);
  window.addEventListener('mouseup', function (e) {
    var difference = 100;
    measuredValue[1] = e.pageX;
    modalSwipe(difference);
  }, false);

  function modalSwipe(n) {
    if (measuredValue[0] - measuredValue[1] < -n) {
      clickPrevBtn();
    } else if (measuredValue[0] - measuredValue[1] > n) {
      clickNextBtn();
    }

    Array.prototype.forEach.call(measuredValue, function (el, i, arr) {
      arr[i] = 0;
    });
  }
})();

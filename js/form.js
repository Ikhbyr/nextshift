/* 法人選択時の項目表示調整 */
$(function(){
  $('input[name=個人・法人]').change(function() {
    if (($(this).val() == '法人')) {
      $(".only-individual").removeClass("visible");
      $(".only-corporate").addClass("visible");
      $(".only-corporate input").prop("disabled", false);
    } else {
      $(".only-individual").addClass("visible");
      $(".only-corporate").removeClass("visible");
      $(".only-corporate input").prop("disabled", true );
    }
  });
});

/* 全角チェック */
$(function(){
  $("input.checkCharType-zenkaku").blur(function(){
    if(!$(this).val() == ""){
      if(!$(this).val().match(/^[^\x01-\x7E\xA1-\xDF]+$/)){
        $(this).parent().addClass('has-error');
        $(this).parent().addClass('submit-button-controller');
        $(this).nextAll('.message-error').text('全角以外が含まれています'); // エラーメッセージのセット
      }else{
        $(this).parent().removeClass('has-error');
        $(this).parent().removeClass('submit-button-controller');
        $(this).nextAll('.message-error').text(''); // エラーメッセージのリセット
      }
    }
    if($(".submit-button-controller").hasClass('has-error')){
      $("input[type=submit]").prop("disabled", true ).removeClass('primary').addClass('inactive');
    }else{
      $("input[type=submit]").prop("disabled", false ).removeClass('inactive').addClass('primary');
    }
  });
});

/* 全角チェック - 複数確認 */
$(function(){
  $(".checkCharType-zenkakuMulti input").blur(function(){
    var val = $(this).val();
    if (val !== '') {
      var $ermArea = $('#erm\\.' + $(this).attr('id')),
          $hasErrorObj = $($(this).closest('.checkCharType-zenkakuMulti'));
      if (!val.match(/^[^\x01-\x7E\xA1-\xDF]+$/)){
        // エラー時
        $ermArea.text('全角以外が含まれています');
        $hasErrorObj.addClass('has-error');
        $hasErrorObj.addClass('submit-button-controller');
      } else {
        $ermArea.text('');
        // 他にエラーがないか確認
        var hasError = false;
        $hasErrorObj.find('.message-error').each(function(){
          if ($(this).text()){
            hasError = true;
            return false;
          }
        })
        if (!hasError){
          // 同じエリアに1つもエラーがない場合のみエラースタイルをやめる
          $hasErrorObj.removeClass('has-error');
          $hasErrorObj.removeClass('submit-button-controller');
        }
      }
    }
    if($(".submit-button-controller").hasClass('has-error')){
      $("input[type=submit]").prop("disabled", true ).removeClass('primary').addClass('inactive');
    }else{
      $("input[type=submit]").prop("disabled", false ).removeClass('inactive').addClass('primary');
    }
  });
});

$(function(){
  $("#setBankMain").click(function(){
    var bankMain = $("#modal-bank-main input[name=銀行名]:checked").val();
    $("#bank-main").val(bankMain);
  });
  $("#setBankBranch").click(function(){
    var bankBranch = $("#modal-bank-branch input[name=支店名]:checked").val();
    $("#bank-branch").val(bankBranch);
  });
});



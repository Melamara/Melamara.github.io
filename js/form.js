// Уравнивает длины блоков
function setEqualHeight(columns){
  var tallestcolumn = 0;
  columns.each(function(){
    var currentHeight = $(this).outerHeight();
    if(currentHeight > tallestcolumn){
      tallestcolumn = currentHeight;
    }
  });
  columns.outerHeight(tallestcolumn);
}



$(document).ready(function(){ // когда DOM будет готов


  $('.form-block__subtitle--hotel').css( "opacity", "1" );

  $('.form-tabs input').on('click', function(){
    if(window.matchMedia('(max-width: 767px)').matches) {
      $('.form-tabs input').each(function(){
        var formId = "#tab_"+$(this).attr('id');
        var labelFor = $(this).attr('id');
        $('[for='+labelFor+']').css( "opacity", "0.6" );
        if ($(this).is(':checked')) {
          $('[for='+labelFor+']').css( "opacity", "1" );
        }
      });
    }
    else {
      $('.form-tabs input').each(function(){
        var formId = "#tab_"+$(this).attr('id');
        var labelFor = $(this).attr('id');
        $('[for='+labelFor+']').css( "opacity", "0.6" );
        $(formId).css({display: 'none'});

        if ($(this).is(':checked')) {
          $('[for='+labelFor+']').css( "opacity", "1" );
          $(formId).fadeIn();
        }
      });
    }
  });


  $('.form-block__wrapper--locate input').on('click', function(){
    $('.form-block__wrapper--locate input').each(function(){
      var labelFor = $(this).attr('id');
      $('[for='+labelFor+']').css( "opacity", "0.6" );
      if ($(this).is(':checked')) {
        $('[for='+labelFor+']').css( "opacity", "1" );
      }
    });
  });


});


// (window).load - исправление бага в Google Chrome
$(window).load(function(){
  if(window.matchMedia('(max-width: 768px)').matches) {}
    else {
    setEqualHeight($('.pay__right, .pay__left'));
    }
});





$('.pay__input, .pers-info__input').focusout(function(){
  var formId = $(this).attr('id')
  $(this).next('.jsFormControl').removeClass('input__error');
  $(this).next('.jsFormControl').removeClass('input__success');
  if ($(this).val()=="") {
    $(this).next('.jsFormControl').addClass('input__error');
  }
  else {
    $(this).next('.jsFormControl').addClass('input__success');
  }
});







$('#btnReserv').on('click', function(e){
  e.preventDefault();
  $('.pay__warning').empty();
  if (($('#dayArrive').val()=="") || ($('#monthArrive').val()=="") || ($('#yearArrive').val()=="") || ($('#dayDepart').val()=="") || ($('#monthDepart').val()=="") || ($('#yearDepart').val()=="")) {
    $('.pay__warning').append('<p class="icon-warning">Пожалуйста, выберите дату въезда и выезда, чтобы увидеть сумму к оплате</p>');
    return;
  }

  if ($('#formFlag').is(':checked')==false) {
    if ($('#formLake').is(':checked')==false) {
      if ($('#formAlder').is(':checked')==false) {
        if ($('#formPort').is(':checked')==false) {
          $('.pay__warning').append('<p class="icon-warning">Пожалуйста, выберите тип коттеджа, чтобы увидеть сумму к оплате</p>');
          return;
        }
      }
    }
  }

  if (($('#formName').val()=="") ) {
    $('.pay__warning').append('<p class="icon-warning">Пожалуйста, введите имя, чтобы увидеть сумму к оплате</p>');
    return;
  }

  if (($('#formLastName').val()=="") ) {
    $('.pay__warning').append('<p class="icon-warning">Пожалуйста, введите фамилию, чтобы увидеть сумму к оплате</p>');
    return;
  }

  if (($('#formTel').val()=="") ) {
    $('.pay__warning').append('<p class="icon-warning">Пожалуйста, введите номер телефона, чтобы увидеть сумму к оплате</p>');
    return;
  }

  if (($('#formEmail').val()=="") ) {
    $('.pay__warning').append('<p class="icon-warning">Пожалуйста, введите e-mail, чтобы увидеть сумму к оплате</p>');
    return;
  }

    $('.pay__warning').append('<p>Стоимость отдыха составит ХХХ руб., подробности уточняйте у куратора ^_^</p>');

});














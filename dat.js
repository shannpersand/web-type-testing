$(document).ready(function() {

  $('#setText').click(function() {
    inputText = $('.input-text').val();
    leading = $('.line-height').val();
    fontName = $('.font-name').val();
    $('.paragraph').text(inputText);
    $('.paragraph').css('line-height', leading);
    $('.paragraph').css('font-family', '\"' + fontName + '\"');
  });

  $('.change').each(function() {
    $(this).click(function() {
      fontSize = $(this).prev().prev(".point-size").val();
      $(this).parent().next('.paragraph').css("font-size", fontSize + "px");
    });
  });

});

$(function () {
  $('.bauble').hover(function () {
    $(this).animate({ marginTop : '0'});
  },
  function () {
    $(this).animate({ marginTop : '-30px'});
  });

  $('.read-story').click(function () {
    $(this).hide();
    $('.story').fadeIn(2000);
  });
});

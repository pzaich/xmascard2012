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

  var images = ["IMG_0228.jpg", "IMG_0258.jpg", "IMG_0268.jpg", "IMG_0752.jpg", "IMG_0772.jpg", "IMG_0782.jpg", "IMG_0798.jpg", "IMG_0905.jpg", "IMG_0966.jpg", "IMG_5889.jpg", "IMG_5941.jpg", "IMG_5969.jpg", "IMG_5985.jpg", "IMG_6067.jpg", "IMG_6070.jpg", "IMG_6215.jpg", "IMG_6230.jpg", "IMG_6239.jpg", "IMG_6399.jpg", "IMG_6426.jpg", "IMG_6441.jpg", "IMG_6450.jpg", "IMG_6471.jpg", "IMG_6540.jpg", "IMG_6642.jpg", "IMG_6643.jpg", "IMG_6715.jpg", "IMG_6797.jpg", "IMG_6852.jpg", "IMG_6913.jpg", "SAM_0164.jpg", "SAM_0169.jpg" ]
  
  $.each(images, function (index, value){
    $('.gallery-links').append('<a rel="photos" href="img/gallery/' + value + '" >' + value + '</a>');
  });
  
  $('.gallery-links a').fancybox();

  $('.bauble').click(function () {
    $('.gallery-links a').first().trigger('click');
  });
});

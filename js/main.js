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

  var images = { 
                  "IMG_0905.jpg" : "December: Christmas 2011. We've come full circle.",
                  "IMG_5889.jpg" : "January/December: Grand Canyon en route to Fiesta Bowl.", 
                  "IMG_5941.jpg" : "January/December: Sedona en route to Fiesta Bowl.", 
                  "IMG_5969.jpg" : "January: Tailgating before Fiesta Bowl.", 
                  "IMG_5985.jpg" : "January: Before the missed field goal kicks.",
                  "IMG_0966.jpg" : "April: Covington School Auction.",
                  "IMG_6067.jpg" : "April: Spring break in Maui on the road to Hana.", 
                  "IMG_6070.jpg" : "April: I want to be back there.",
                  "IMG_0258.jpg" : "June: Erin celebrates her birthday with Cherryl & Gordon.", 
                  "IMG_0268.jpg" : "July: Paul working hard on Dev Bootcamp at Peet's.", 
                  "IMG_0752.jpg" : "July: Photobooth at Tanner's wedding.",
                  "IMG_6215.jpg" : "July: Tanner's wedding.", 
                  "IMG_6230.jpg" : "July: Goodbye party prior to leaving for Korea.", 
                  "IMG_6239.jpg" : "July: Our church small group.", 
                  "IMG_0772.jpg" : "July: The goodbye kiss as Erin begins our adventure in Korea.", 
                  "IMG_0798.jpg" : "August: New staff welcome dinner in Korea.",  
                  "IMG_6399.jpg" : "August: Paul's first weekend in Seoul. Gwangwangmun palace.", 
                  "IMG_6426.jpg" : "August: Paul's first weekend in Seoul. Gwangwangmun palace.", 
                  "IMG_6441.jpg" : "August: Erin enjoys here first & last vegetarian meal in Korea.", 
                  "IMG_6450.jpg" : "August: Paul working at one of the many cafes in Seoul.", 
                  "SAM_0169.jpg" : "October: Swan Lake at the Seoul Performing Arts Center." ,
                  "IMG_6471.jpg" : "October: Our first hostel in Ulaanbataar, capital of Mongolia.",
                  "IMG_0228.jpg" : "October: Erin and Paul explore Eagle Valley in Mongolia.", 
                  "IMG_6540.jpg" : "October: Exploring the dunes of the Gobi.", 
                  "IMG_6642.jpg" : "October: Erin with Tibetian prayer wheel.", 
                  "IMG_6643.jpg" : "October: Sunset.", 
                  "IMG_6715.jpg" : "October: Our KIS teacher travel buddies in Mongolia.", 
                  "IMG_6797.jpg" : "October: We had to climb out so that our van could get up the hill.", 
                  "IMG_6852.jpg" : "November: Hiking in Seoraksan, the most popular national park in Korea", 
                  "IMG_6913.jpg" : "November: Seoul lantern festival.", 
                  "SAM_0164.jpg" : "November: Erin's 5th grade class on field trip." ,  
                  "IMG_6975.jpg" : "December: Giraffes in Kenya.",
                  "IMG_0782.jpg" : "Decemeber: Orphaned baby elephant in Kenya.", 
                  "IMG_6997.jpg" : "December: Watching the feeding of baby elephants just outside Nairobi." }
  
  $.each(images, function (key, value){
    $('.gallery-links').append('<a rel="photos" title="' + value + '" href="img/gallery/' + key + '" >' + key + '</a>');
  });
  
  $('.gallery-links a').fancybox();

  $('.bauble').click(function () {
    $('.gallery-links a').first().trigger('click');
  });
});

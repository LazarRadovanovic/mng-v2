$(function() {
  var carousel = $("#carousel").waterwheelCarousel();
  $('#prev').bind('click', function () {
    carousel.prev();
    return false
  });
  $('#next').bind('click', function () {
    carousel.next();
    return false;
  });

  $(window).resize(function(){
  	$("#carousel").waterwheelCarousel();
	});
});
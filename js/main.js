$(function() {
   $("#menu").mmenu({
      "extensions": [
         "pagedim-black"
      ],
      "offCanvas": {
         "position": "right"
      }
   });   
});

$(window).scroll(function(){
    if($(document).scrollTop() > 107) { // if scrolled more than 50px from top
        $('.bottom').addClass('sticky-header');
    }
    else {
        $('.bottom').removeClass('sticky-header');
    }
});

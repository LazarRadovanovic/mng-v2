$(function() {
	$('[data-toggle="popover"]').popover({ html : true}); 
	
	$('html').on('click', function(e) {
		if (typeof $(e.target).data('original-title') == 'undefined' &&
		   !$(e.target).parents().is('.popover.in')) {
		  $('[data-original-title]').popover('hide');
		}
	});

	$('.pricing a').click(function() {
      $("html, body").animate({
          scrollTop: $( $(this).attr("href") ).offset().top - 150 
      }, 500);
      return false;
  });
});


$(document).ready(function() {
	$('#carousel-next').click(function () {
    	curr_val = parseInt($('#carousel').css('margin-left').replace("px", ""));
    	if (curr_val == -1400) {
      		return false;
    	} else {
      		$('#carousel').css('margin-left', curr_val - 700 + "px");
    	}
  	});
  	$('#carousel-prev').click(function () {
    	curr_val = parseInt($('#carousel').css('margin-left').replace("px", ""));
    	if (curr_val == 0) {
      		return false;
    	} else {
      		$('#carousel').css('margin-left', curr_val + 700 + "px");
    	}
  	});
  	$(window).scroll(function() {
		if($(window).scrollTop() > 700) {
			$('.navbar-container').fadeIn(1000);
		} else {
			$('.navbar-container').fadeOut(1000);
		}
	});
	$("a[href='top']").click(function() {
  		$('html, body').animate({ scrollTop: 0 }, 'slow');
  		return false;
	});
	$("a[href='doge']").click(function() {
  		$('html, body').animate({ scrollTop: 750 }, 'slow');
  		return false;
	});
	$("a[href='interests']").click(function() {
  		$('html, body').animate({ scrollTop: 2000 }, 'slow');
  		return false;
	});
	$("a[href='social']").click(function() {
  		$('html, body').animate({ scrollTop: 2700 }, 'slow');
  		return false;
	});
	$('#me').click(function () {
		$("#me").attr("width", "300");
	});
});

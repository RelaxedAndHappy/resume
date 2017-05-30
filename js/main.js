//jquery实现 滑动
$(function() {
	$(".container a").bind("click", function(event) {
		var that = $(this);
		$("body").stop().animate({
			scrollTop: $(that.attr("href")).offset().top - 80
		}, 1000);
		that.css({"color": "yellow"}).siblings().css({"color": ""})
		
		event.preventDefault();
	});
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();//滚动高度
		console.log(scrollTop)
		if (scrollTop < 620) {
			$(".container a:eq(0)").css({"color": "yellow"}).siblings().css({"color" : ""});
		}else if(scrollTop > 620 && scrollTop < 1190) {
			$(".container a:eq(1)").css({"color": "yellow"}).siblings().css({"color" : ""});
		}else if(scrollTop >= 1190 && scrollTop <= 1440) {
			$(".container a:eq(2)").css({"color": "yellow"}).siblings().css({
				"color" : ""});
		}else if(scrollTop > 1440) {
			$(".container a:eq(3)").css({"color": "yellow"}).siblings().css({"color" : ""});
		}else {
			$(".container a").css({"color" : ""})
		}
	})
});



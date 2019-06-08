$(document).ready(function(){
	$(".l2").hover(function(){
		$(".n2").css({
			"display": "block",
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		}).show("slow").css({
			"display": "block",
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		});
		$(".n1").css("display", "none");
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".n1").css("display", "block");
		$(".n2").css("display", "none");
	});

	$(".l3").hover(function(){
		$(".n3").css({
			"display": "block",
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		}).show("slow").css({
			"display": "block",
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		});
		$(".n1").css("display", "none");
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".n1").css("display", "block");
		$(".n3").css("display", "none");
	});

	$(".l4").hover(function(){
		$(".n4").css({
			"display": "block",
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		}).show("slow").css({
			"display": "block",
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		});
		$(".n1").css("display", "none");
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".n1").css("display", "block");
		$(".n4").css("display", "none");
	});

	$(".l5").hover(function(){
		$(".n5").css({
			"display": "block",
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		}).show("slow").css({
			"display": "block",
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		});
		$(".n1").css("display", "none");
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".n1").css("display", "block");
		$(".n5").css("display", "none");
	});

});

$(document).ready(function(){
	$(".autoplay").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
	});
});
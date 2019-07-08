$(document).ready(function(){

	$(".l2").hover(function(){
		$(".n2").css({
			"display": "inline",
			"transform": "rotate(90deg)",
		}).show("slow").css({
			"display": "inline",
			"transform": "rotate(0)",
		});
		$(".n1").css("display", "none");
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".n1").css("display", "inline");
		$(".n2").css("display", "none");
	});

	$(".l1").hover(function(){
		$(".number1").show();
		$(".n1").css({
			"display": "inline",
			"writing-mode": "vertical-lr",
		}).css({
			"writing-mode": "horizontal-tb",
		});
	}, function(){
		$(".n1").css({
			"writing-mode": "vertical-lr",
		});
	});

	$(".l2").hover(function(){
		$(".n1, .number1").hide();
		$(".number2").show();
		$(".n2").css({
			"display": "inline",
			"writing-mode": "vertical-lr",
		}).css({
			"writing-mode": "horizontal-tb",
		});
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".number1").show();
		$(".n1").css({
			"display": "inline",
			"writing-mode": "horizontal-tb",
		}).css({
			"writing-mode": "vertical-lr",
		});
		$(".n2, .number2").hide();
	});

	$(".l3").hover(function(){
		$(".n1, .number1").hide();
		$(".number3").show();
		$(".n3").css({
			"display": "inline",
			"writing-mode": "vertical-lr",
		}).css({
			"writing-mode": "horizontal-tb",
		});
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".number1").show();
		$(".n1").css({
			"display": "inline",
			"writing-mode": "horizontal-tb",
		}).css({
			"writing-mode": "vertical-lr",
		});
		$(".n3, .number3").hide();
	});

	$(".l4").hover(function(){
		$(".n1, .number1").hide();
		$(".number4").show();
		$(".n4").css({
			"display": "inline",
			"writing-mode": "vertical-lr",
		}).css({
			"writing-mode": "horizontal-tb",
		});
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".number1").show();
		$(".n1").css({
			"display": "inline",
			"writing-mode": "horizontal-tb",
		}).css({
			"writing-mode": "vertical-lr",
		});
		$(".n4, .number4").hide();
	});

	$(".l5").hover(function(){
		$(".n1, .number1").hide();
		$(".number5").show();
		$(".n5").css({
			"display": "inline",
			"writing-mode": "vertical-lr",
		}).css({
			"writing-mode": "horizontal-tb",
		});
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".number1").show();
		$(".n1").css({
			"display": "inline",
			"writing-mode": "horizontal-tb",
		}).css({
			"writing-mode": "vertical-lr",
		});
		$(".n5, .number5").hide();
	});
});

$(document).ready(function(){
	// var i;
	// $(window).resize(function(){
	// 	if ($(window).width() > 575) {
	// 		i = 3;
	// 	}
	// 	else {
	// 		i = 1;
	// 	}
	// });
	// if ($(window).width() > 575) {
	// 	i = 3;
	// }
	// else {
	// 	i = 1;
	// }
	$(".autoplay").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		autoplay: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 425,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});

$(document).ready(function(){
	var video = $(".video").innerHeight();
	$(".play").css({
		"width": video * 0.9,
		"height": video * 0.9,
		"top": video * 0.05
	})
});



function initMap()
{
	var element = document.getElementsByClassName('contacts__map')[0];
	var options = {
		zoom: 10,
		scrollwheel: false,
		center: {lat: 40.7060129, lng: -73.942059},
		styles: [
		{
			"featureType": "all",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#bea67c"
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"gamma": 0.01
			},
			{
				"lightness": 20
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"saturation": -31
			},
			{
				"lightness": -33
			},
			{
				"weight": 2
			},
			{
				"gamma": 0.8
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
			{
				"lightness": 30
			},
			{
				"saturation": 30
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			{
				"saturation": 20
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			{
				"lightness": 20
			},
			{
				"saturation": -20
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			{
				"lightness": 10
			},
			{
				"saturation": -30
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"saturation": 25
			},
			{
				"lightness": 25
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
			{
				"lightness": -20
			}
			]
		}
		]
	};

	var map = new google.maps.Map(element, options);
	var marker = new google.maps.Marker({
		position : {lat: 40.7060129, lng: -73.942059},
		map: map
	});
}



$(".contacts__map_icon").click(function(){
	initMap();
	$(".none").toggleClass("active");
});


window.onscroll = () => {
	if (window.pageYOffset >= document.documentElement.scrollHeight-document.documentElement.clientHeight-500){
		$(".contacts__map_icon").addClass("active");
		$(".up").addClass("active");
	} else {
		$(".contacts__map_icon").removeClass("active");
		$(".up").removeClass("active");
	}
}


$(".contact_link").click(function(){
	initMap();
	$(".none").addClass("active");
});
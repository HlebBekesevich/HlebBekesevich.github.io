$(document).ready(function(){

	$(".l1").hover(function(){
		$(".main__left_number").css("transform", "rotate(0)");
	}, function(){
		$(".main__left_number").css("transform", "rotate(90deg)");
	});

	$(".l2").hover(function(){
		$(".main__left_number").text('02').css("transform", "rotate(0)");
		$(this).addClass("active");
		$(".l1").removeClass("active");
	}, function(){
		$(".main__left_number").text('01').css("transform", "rotate(90deg)");
		$(this).removeClass("active");
		$(".l1").addClass("active");
	});

	$(".l3").hover(function(){
		$(".main__left_number").text('03').css("transform", "rotate(0)");
		$(this).addClass("active");
		$(".l1").removeClass("active");
	}, function(){
		$(".main__left_number").text('01').css("transform", "rotate(90deg)");
		$(this).removeClass("active");
		$(".l1").addClass("active");
	});

	$(".l4").hover(function(){
		$(".main__left_number").text('04').css("transform", "rotate(0)");
		$(this).addClass("active");
		$(".l1").removeClass("active");
	}, function(){
		$(".main__left_number").text('01').css("transform", "rotate(90deg)");
		$(this).removeClass("active");
		$(".l1").addClass("active");
	});

	$(".l5").hover(function(){
		$(".main__left_number").text('05').css("transform", "rotate(0)");
		$(this).addClass("active");
		$(".l1").removeClass("active");
	}, function(){
		$(".main__left_number").text('01').css("transform", "rotate(90deg)");
		$(this).removeClass("active");
		$(".l1").addClass("active");
	});
});

$(document).ready(function(){
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


$(window).scroll(function() {
	if (($(window).width() < 767 ) && (window.pageYOffset >= $(".main").height()))
		$(".head").addClass("scroll");
	else $(".head").removeClass("scroll");
});

$(".head__link_text, .main, .furniture, .decor, .videos, .video, .about, .contacts").click(function() {
	if (($(".nav_menu").css("display") == "flex") && ($(window).width() < 768))
		$(".nav_menu").css("display", "none");
});

$(window).scroll(function() {
	if (($(".nav_menu").css("display") == "flex") && ($(window).width() < 768))
		$(".nav_menu").css("display", "none");
});

if ($(window).width() > 767)
	$(".nav_menu").css("display", "flex");
else
	$(".nav_menu").css("display", "none");

$(".menu_bar").click(function() {
	if ($(".nav_menu").css("display") == "none")
		$(".nav_menu").css("display", "flex");
	else
		$(".nav_menu").css("display", "none");
});

$(window).resize(function(){
	if ($(window).width() > 767)
		$(".nav_menu").css("display", "flex");
	else if ($(window).width() < 768) {
		$(".nav_menu").css("display", "none");
	}
});
$(document).ready(function(){

	$(".l1").hover(function(){
		$(".n1").css({
			"display": "block",
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		}).show("slow").css({
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		});
	}, function(){
		$(".n1").css({
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		});
	});

	$(".l2").hover(function(){
		$(".n2").css({
			"display": "block",
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		}).show("slow").css({
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		});
		$(".n1").css("display", "none");
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".n1").css({
			"display": "block",
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		}).show("slow").css({
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		});
		$(".n2").css("display", "none");
	});

	$(".l3").hover(function(){
		$(".n3").css({
			"display": "block",
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		}).show("slow").css({
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		});
		$(".n1").css("display", "none");
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".n1").css({
			"display": "block",
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		}).show("slow").css({
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		});
		$(".n3").css("display", "none");
	});

	$(".l4").hover(function(){
		$(".n4").css({
			"display": "block",
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		}).show("slow").css({
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		});
		$(".n1").css("display", "none");
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".n1").css({
			"display": "block",
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		}).show("slow").css({
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		});
		$(".n4").css("display", "none");
	});

	$(".l5").hover(function(){
		$(".n5").css({
			"display": "block",
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		}).show("slow").css({
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		});
		$(".n1").css("display", "none");
		$(".l1").removeClass("active");
	}, function(){
		$(".l1").addClass("active");
		$(".n1").css({
			"display": "block",
			"transform": "rotate(0)",
			"margin": "60px 0 60px -33px"
		}).show("slow").css({
			"transform": "rotate(90deg)",
			"margin": "30px 0 90px 0"
		});
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
	if (window.pageYOffset >= document.documentElement.scrollHeight-document.documentElement.clientHeight-80){
		$(".contacts__map_icon").addClass("active");
		console.log("add");
	} else {
		$(".contacts__map_icon").removeClass("active");
	}
}


$(".contact_link").click(function(){
	initMap();
	$(".none").addClass("active");
});
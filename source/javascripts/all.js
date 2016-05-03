//= require_tree .
// = require "retina.js"

function initialize() {
	var myLatlng = new google.maps.LatLng(45.5192701,-122.680106);
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
	  center: myLatlng,
	  disableDefaultUI: true,
	  zoom: 15,
    scrollwheel: false,
	  styles: [
	  	{
	  		featureType: "poi",
	  		elementType: "labels",
	  		stylers: [
	  			{visibility: "off"}
	  		]
	  	},{
	  		featureType: "transit",
	  		elementType: "labels",
	  		stylers: [
	  			{visibility: "off"}
	  		]
	  	}
	  ],
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'EmberCamp'
	})

	var contentString = "<b>RustConf 2016 @ The Nines</b>" + "<br>" + "525 SW Morrison St<br>Portland, OR 97204";

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

	// If you want the pop-up box to be on by default, turn this call back on
	// infowindow.open(map, marker);

}

google.maps.event.addDomListener(window, 'load', initialize);

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require bootstrap
//= require_tree .
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })


$(document).ready(function(){
	//all your code goes in here
	$("textarea").on("keyup", function() {
		var charCount = $("textarea").val().length;
		console.log("charCount");
	$("#charCount").html(charCount);
	if (charCount > 50) {
		$("#charCount").css("color", "red");
	} else {
		$("#charCount").css("color", "black");
	};
})
}); 

var map;
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(39.2005353,-76.7855865)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

$('.customCarousel').carousel({
     interval: 4000
 });

 // handles the carousel thumbnails
 $('[id^=carousel-selector]').click(function () {
     var id_selector = $(this).attr("id");
     var id = id_selector.substr(id_selector.length - 1);
     id = parseInt(id);
     var parent = $(this).closest('ul').data('carousel');
     $('#myCarousel' + parent).carousel(id);
     $('[id^=carousel-selector' + parent +'-]').removeClass('selected');
     $(this).addClass('selected');
 });

 // when the carousel slides, auto update
 $('.customCarousel').on('slid', function (e) {
     var cont = $(this).data('carousel');
     var id = $('#myCarousel'+ cont +' .item.active').data('slide-number');
     id = parseInt(id);
     $('[id^=carousel-selector' +cont+'-]').removeClass('selected');
     $('[id^=carousel-selector'+cont+'-' + id + ']').addClass('selected');
 });











// here we close the doc ready. no more code below here.


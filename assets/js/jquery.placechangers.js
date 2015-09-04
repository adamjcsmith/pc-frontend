/* (C) 2015 PlaceChangers */

(function($) {
    $.fn.addPCMap = function(latLong) {
		var id = $(this).attr('id');
		var map = L.map(id, {drawControl: true, attributionControl: false}).setView([latLong.latitude, latLong.longitude], 11);
		//L.esri.basemapLayer('Streets').addTo(map);
		
		
		L.tileLayer('http://178.62.91.105:8001/{z}/{x}/{y}', {
		}).addTo(map);
		

		var myControl = L.control.attribution({prefix: '<a href="http://www.placechangers.co.uk">PlaceChangers</a>'});
		myControl.addAttribution("Contains OS data &copy; Crown Copyright 2015");
		map.addControl(myControl);		

		// Add draw options:
		/*
		var drawnItems = new L.FeatureGroup();
		map.addLayer(drawnItems);
		var drawControl = new L.Control.Draw({
			edit: {
				featureGroup: drawnItems
			}
			
		});
		map.addControl(drawControl);
		*/
		
		return map;
    }
	
	$.fn.switchMenuOption = function(newOption) {
		
		// Replace indicative drop down text:
		var selectedHTML = this.html();
		var menuHTML = this.parent().parent().parent().children('a:nth-child(1)').html();
		this.parent().parent().parent().children('a:nth-child(1)').html(selectedHTML);
		
		// Remove previous highlighted location:
		this.parent().parent().children().each(function(i){
			$(this).removeClass('active');
		});
		
		// Highlight new location: 
		$(this).parent().addClass('active');
		
		// Change title:
		document.title = $(this).text() + " : Place Changers";
		
	}

}(jQuery));

function relocate(myMap, latLong) {
	myMap.setView([latLong.latitude, latLong.longitude], 14);
	return myMap;
}

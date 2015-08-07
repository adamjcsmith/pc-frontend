/* (C) 2015 PlaceChangers */

(function($) {
    $.fn.addPCMap = function(latLong) {
		var id = $(this).attr('id');
		var map = L.map(id).setView([latLong.latitude, latLong.longitude], 17);
		L.esri.basemapLayer('Streets').addTo(map);
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
		
	}

}(jQuery));

function relocate(myMap, latLong) {
	myMap.setView([latLong.latitude, latLong.longitude], 17);
	return myMap;
}
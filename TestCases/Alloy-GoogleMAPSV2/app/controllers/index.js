// Modified QE version of module sample code.
var MapModule = require('ti.map');

/************************************************************************************/
/************************************************************************************/
//Multi Maps
/************************************************************************************/
function multiMapTest() {
	var map1 = MapModule.createView({
		userLocation : true,
		mapType : MapModule.NORMAL_TYPE,
		animate : false,
		region : {
			latitude : -33.87365,
			longitude : 151.20689,
			latitudeDelta : 0.1,
			longitudeDelta : 0.1
		}, //Sydney
		height : '50%',
		top : 0,
		left : 0,
		width : '50%'
	});
	var map2 = MapModule.createView({
		userLocation : true,
		mapType : MapModule.SATELLITE_TYPE,
		animate : true,
		region : {
			latitude : -33.87365,
			longitude : 151.20689,
			latitudeDelta : 0.1,
			longitudeDelta : 0.1
		}, //Sydney
		height : '50%',
		top : 0,
		right : 0,
		width : '50%'
	});
	var map3 = MapModule.createView({
		userLocation : true,
		mapType : MapModule.TERRAIN_TYPE,
		animate : true,
		region : {
			latitude : -33.87365,
			longitude : 151.20689,
			latitudeDelta : 0.1,
			longitudeDelta : 0.1
		}, //Sydney
		height : '50%',
		bottom : 0,
		left : 0,
		width : '50%'
	});
	var map4 = MapModule.createView({
		userLocation : true,
		mapType : MapModule.HYBRID_TYPE,
		traffic : true,
		animate : true,
		region : {
			latitude : -33.87365,
			longitude : 151.20689,
			latitudeDelta : 0.1,
			longitudeDelta : 0.1
		}, //Sydney
		height : '50%',
		bottom : 0,
		right : 0,
		width : '50%'
	});

	$.win.add(map1);
	$.win.add(map2);
	$.win.add(map3);
	$.win.add(map4);

}

$.win.open();


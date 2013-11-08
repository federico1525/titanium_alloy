Alloy.Globals.navigationWin = $.navWin;

$.win1.titleControl = Ti.UI.createLabel({
	text : 'TitleControl',
	shadowColor : 'white',
	shadowOffset : {
		x : 2,
		y : 2
	},
	font:{
		fontSize:'28dp'
	},
	color:'yellow'
});

function pushWin(){
	$.navWin.openWindow(Alloy.createController('win2').getView());
}

$.navWin.open(); 
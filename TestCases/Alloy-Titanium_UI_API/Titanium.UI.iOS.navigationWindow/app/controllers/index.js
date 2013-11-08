function openWin1(){
	var win1 = Alloy.createController('win1').getView();
	$.navWin1.openWindow(win1);
}

function openWin2(){
	var win2 = Alloy.createController('win2').getView();
	$.navWin2.openWindow(win2);
}




$.index.open();
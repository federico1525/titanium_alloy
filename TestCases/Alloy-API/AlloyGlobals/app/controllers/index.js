// Alloy.Globals.someGlobalObject = { key: 'value' };

$.label1.text =  $.label1.text + ' ' + Alloy.CFG.key;
$.label2.text =  $.label2.text + ' ' + Alloy.CFG.anotherKey;
$.label3.text =  $.label3.text + ' ' + Alloy.CFG.environment;


if ((Alloy.isHandheld) && (OS_IOS)){
	alert('iphone handheld!')
}
else if ((Alloy.isHandheld) && (OS_ANDROID)){
	alert('android handheld')
}
else if ((Alloy.isTablet)&&(OS_IOS)){
	alert('ipad tablet!')
}
else if ((Alloy.isTablet)&&(OS_ANDROID)){
	alert('android tablet')
}
else if (OS_MOBILEWEB){
	alert('mobileweb!')
}
else {
	alert("I don't know!'")
}

$.win.open();

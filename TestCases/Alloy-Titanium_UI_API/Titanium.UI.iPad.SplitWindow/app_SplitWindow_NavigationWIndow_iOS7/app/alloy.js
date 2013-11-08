// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Globals = {
	winGlobal1: Alloy.createController('win1').getView(),
	winGlobal2: Alloy.createController('win2').getView(),

	openWindow1: function(e) {
		Alloy.Globals.navwindow1.openWindow(Alloy.Globals.winGlobal1);
	},
	openWindow2: function(e) {
		Alloy.Globals.navwindow2.openWindow(Alloy.Globals.winGlobal2);
	}
};


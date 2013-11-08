var views = Alloy.Collections.views = new Backbone.Collection();
views.reset([
	{
		id: 1,
		title: 'title',
		subtitle: 'subtitle',
		shortTitle: 'Alloy.UI.create()',
		controller: 'uiCreate'
	},
]);

Alloy.Globals.setupWindow = function(win) {
	Alloy.Globals.currentWindow = win;
	if (OS_ANDROID) {
		win.addEventListener('android:back', Alloy.Globals.closeWindow);
	}
};
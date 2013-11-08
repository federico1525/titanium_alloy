if (OS_ANDROID && Ti.Platform.Android.API_LEVEL > 11) {
    // use action bar search view
    var search = Alloy.createController("searchview").getView();
    $.tableview.searchAsChild = false;
    $.tableview.search = search;
    $.win.addEventListener("open", function() {
        $.win.activity.onCreateOptionsMenu = function(e) {
            e.menu.add({
                title: "Table Search",
                icon: (Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : "my_search.png"),
                actionView: search,
                showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
            });
        }
        $.win.activity.invalidateOptionsMenu();
    });
} else {
    // use a search bar
    $.tableview.search = Alloy.createController("searchbar").getView();
}
$.win.open();
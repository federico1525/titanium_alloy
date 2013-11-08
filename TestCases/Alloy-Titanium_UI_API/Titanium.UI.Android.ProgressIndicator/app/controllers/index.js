function showIndicator(e) {
    $.progressIndicator.show();
    var value = 0;
    setInterval(function(){
        if (value > 10) {
            return;
        }
        $.progressIndicator.value = value;
        value ++;
    }, 200);
    // do some work that takes 3 seconds
    // ie. replace the following setTimeout block with your code
    setTimeout(function(){
        $.progressIndicator.hide();
    }, 3000);
}
$.index.open();
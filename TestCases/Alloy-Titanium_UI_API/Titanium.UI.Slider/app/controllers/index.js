$.slider.text = $.slider.value;
function updateLabel(e) {
	$.label.text = String.format("%3.1f", e.value);
}

$.win.open();

var testLabel;
var index = 0;

var styles = [
	{},
	{
		font:{
			fontSize:'25dp'
		},
		color:'purple'
	}
];

function changeStyle(e) {
	
	var styleArgs = styles[index++];
	styleArgs.text = 'test label';

	Ti.API.info('####  1');
	
	var styleObject = $.createStyle(styleArgs);
	
	Ti.API.info('####  2');
	
	// Remove the existing label
	if (testLabel) {
		$.container.remove(testLabel);
		testLabel.removeEventListener('click', changeStyle);
	}

	Ti.API.info('####  2');
	
	testLabel = Ti.UI.createLabel(styleObject);
	testLabel.addEventListener('click', changeStyle);
	$.container.add(testLabel);

	// reset the index
	if (index >= styles.length) { index = 0; }
}
var emailDialog = Ti.UI.createEmailDialog();

function sendEmail() {
	emailDialog.subject = "Hello from Titanium";
	emailDialog.toRecipients = ['foo@yahoo.com'];
	emailDialog.messageBody = '<b>Appcelerator Titanium Rocks!</b>';

	// var f = Ti.Filesystem.getFile('cricket.wav');
	// emailDialog.addAttachment(f);

	emailDialog.open();
}

$.index.open();

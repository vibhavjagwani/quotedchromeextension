console.log('loaded dawg');

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
// 	console.log('received something');
// 	console.log(message.checked);
// }


// document.addEventListener('mouseup', function() {
// 	var text = "" + window.getSelection();
// 	console.log(text);
// });


document.addEventListener('keypress', function(e) {
	var key = e.which || e.keyCode;
	if(key === 13) {
		var text = "" + window.getSelection();
		var quote = {};
    	quote.url = window.location.href;
		quote.text = text.trim();
		quote.time = new Date().getTime();
		$.ajax( { url: "",
		  data: JSON.stringify(quote),
		  type: "POST",
		  contentType: "application/json" });
	}
});
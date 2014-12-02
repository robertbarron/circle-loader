(function () {
	var counter = 100,
		MAX_INTERVAL = 5000;

	var waitForIt = function () {
		counter+=100;

		if (counter >= MAX_INTERVAL) {
			document.getElementById('appcircle').innerHTML="";
			document.getElementById('timer').innerHTML= '<div id="content-loaded">Loaded Content!</div>';
		} else {
			textHTML = parseFloat ( ( MAX_INTERVAL - counter) / 1000).toFixed(2);
			document.getElementById('timer').innerHTML= '<span>' + textHTML + '</span> sec';

			setTimeout(function () {
				waitForIt();
			},100);
		}
	};
	waitForIt();
})();

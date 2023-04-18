if ('webkitSpeechRecognition' in window) {

	let recognition = new webkitSpeechRecognition();

	recognition.continuous = true;
	recognition.interimResults = true;


	document.querySelector('#start-button').addEventListener('click', () => {
		recognition.start();
	});

	recognition.onresult = (event) => {
		let result = event.results[event.results.length - 1][0].transcript;
		document.querySelector('#output').textContent += result;

		let output = document.querySelector('#output');
		if (output.textContent.includes('rose')) {
			document.body.style.backgroundColor = "pink";
		}
		// if (result.toLowerCase() === "rose") {
		// 	document.body.style.backgroundColor = "pink";
		// }
	};
	
	document.querySelector('#stop-button').addEventListener('click', () => {
		recognition.stop();
	});

} 
else {
	alert('Web Speech API is not supported in this browser.');
}
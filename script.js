console.log("salut ca va")

// Check if browser supports Web Speech API
if ('webkitSpeechRecognition' in window) {
	// Create new instance of SpeechRecognition
	let recognition = new webkitSpeechRecognition();

	// Set recognition parameters
	recognition.continuous = true;
	recognition.interimResults = true;

	// Add event listener for when speech recognition starts
	document.querySelector('#start-button').addEventListener('click', () => {
		recognition.start();
	});

	// Add event listener for when speech recognition results are available
	recognition.onresult = (event) => {
		let result = event.results[event.results.length - 1][0].transcript;
		document.querySelector('#output').textContent += result;
	};
} else {
	alert('Web Speech API is not supported in this browser.');
}

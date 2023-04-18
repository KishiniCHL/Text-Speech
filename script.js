if ('webkitSpeechRecognition' in window) {
	let recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;
  
	let colorTable = {
	  "rose": "pink",
	  "bleu": "blue",
	  "vert": "green"
	};
  
	document.querySelector('#start-bouton').addEventListener('click', () => {
	  recognition.start();
	});
  
	recognition.onresult = (event) => {
	  let result = event.results[event.results.length - 1][0].transcript;
  
	  for (let color in colorTable) {
		if (result.toLowerCase().includes(color)) {
		  document.body.style.backgroundColor = colorTable[color];
		  break;
		} else {
		  document.body.style.backgroundColor = "";
		}
	  }
  
	  let output = document.querySelector('#output');
	  let newParagraph = document.createElement("p");
	  newParagraph.textContent = result;
	  output.appendChild(newParagraph);
	};
  
	document.querySelector('#stop-bouton').addEventListener('click', () => {
	  recognition.stop();
	});
  
	document.querySelector('#reset-bouton').addEventListener('click', () => {
	  document.body.style.backgroundColor = "";
	  document.querySelector('#output').innerHTML = '';
	});
  } else {
	alert('Web Speech API is not supported in this browser.');
  }
  
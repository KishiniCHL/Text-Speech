if ('webkitSpeechRecognition' in window) {
	let recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;
  
	let colorTable = {
	  "bleu": "blue",
	  "rouge": "red",
	  "vert": "green",
	  "jaune": "yellow",
	  "rose": "pink",
	  "violet": "purple",
	  "orange": "orange",
	  "gris": "gray",
	  "noir": "black",
	  "blanc": "white"
	};
	
  
	document.querySelector('#start-bouton').addEventListener('click', () => {
	  recognition.start();
	});
  
	recognition.onresult = (event) => {
	  let result = event.results[event.results.length - 1][0].transcript;
  
	  let mainTitle = document.querySelector('#main-title');

	  for (let color in colorTable) {
		if (result.toLowerCase().includes(color)) {
		  document.body.style.backgroundColor = colorTable[color];
		  
		  if (color.toLowerCase() === "noir") {
			document.querySelector('#output').style.backgroundColor = "white";
			mainTitle.style.color = "white";

		  } else {
			document.querySelector('#output').style.backgroundColor = "";
			mainTitle.style.color = "";

		  }
		  break;
		} else {
		  document.body.style.backgroundColor = "";
		  document.querySelector('#output').style.backgroundColor = "";
		  
		}
	  }
  
	  let output = document.querySelector('#output');
	  let newParagraph = document.createElement("p");
	  newParagraph.textContent = result;
	  output.appendChild(newParagraph);
	  output.scrollTop = output.scrollHeight;
  
	};
  
	document.querySelector('#stop-bouton').addEventListener('click', () => {
	  recognition.stop();
	});
  
	document.querySelector('#reset-bouton').addEventListener('click', () => {
	  document.body.style.backgroundColor = "";
	  document.querySelector('#output').style.backgroundColor = "";
	  document.querySelector('#output').innerHTML = '';
	});
  } else {
	alert('Web Speech API is not supported in this browser.');
  }
  
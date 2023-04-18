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
  
	let fruitTable = {
	  "pomme": "apple",
	  "banane": "banana",
	  "fraise": "strawberry",
	  "kiwi": "kiwi",
	  "ananas": "pineapple",
	  "orange": "orange-fruit",
	  "citron": "lemon",
	  "raisin": "grape",
	  "peche": "peach",
	  "poire": "pear"
	};
  
	document.querySelector('#start-bouton').addEventListener('click', () => {
	  recognition.start();
	});
  
	recognition.onresult = (event) => {
	  let result = event.results[event.results.length - 1][0].transcript;
  
	  // Change background color based on color table
	  for (let color in colorTable) {
		if (result.toLowerCase().includes(color)) {
		  document.body.style.backgroundColor = colorTable[color];
		  break;
		} else {
		  document.body.style.backgroundColor = "";
		}
	  }
  
	  // Add fruit rain animation based on fruit table
	  for (let fruit in fruitTable) {
		if (result.toLowerCase().includes(fruit)) {
		  document.body.classList.add(fruitTable[fruit]);
		  break;
		} else {
		  document.body.classList.remove(fruitTable[fruit]);
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
	  for (let fruit in fruitTable) {
		document.body.classList.remove(fruitTable[fruit]);
	  }
	});
  } else {
	alert('Web Speech API is not supported in this browser.');
  }
  
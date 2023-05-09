// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  	const synth = window.speechSynthesis;

  	const button = document.querySelector("button");
	const voiceSelect = document.querySelector("select");
	const text = document.querySelector("textarea");
	const faceImage = document.querySelector("img");
	let voices = [];

	function populateVoiceList() {
  		voices = synth.getVoices();
  		for (let i = 0; i < voices.length; i++) {
    		const option = document.createElement("option");
    		option.textContent = `${voices[i].name} (${voices[i].lang})`;
		
    		if (voices[i].default) {
     			option.textContent += " — DEFAULT";
    		}

    		option.setAttribute("data-lang", voices[i].lang);
    		option.setAttribute("data-name", voices[i].name);
    		voiceSelect.appendChild(option);
  		}
	}	

	populateVoiceList();
	if (speechSynthesis.onvoiceschanged !== undefined) {
  		speechSynthesis.onvoiceschanged = populateVoiceList;
	}



	button.onclick = (event) => {
  		event.preventDefault();
  		const utterThis = new SpeechSynthesisUtterance(text.value);
		utterThis.onstart = (event) => {
			faceImage.src = 'assets/images/smiling-open.png';
		}
		utterThis.onend = (event) => {
			faceImage.src = 'assets/images/smiling.png';
		}
  		const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  		for (let i = 0; i < voices.length; i++) {
    		if (voices[i].name === selectedOption) {
      			utterThis.voice = voices[i];
    		}
  		}
  		synth.speak(utterThis);
	};
}
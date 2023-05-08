// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
	const hornSelect = document.querySelector("#horn-select");
	const jsConfetti = new JSConfetti();
	const hornAudio = document.querySelector('audio');
	const hornImage = document.querySelector('img');
	hornSelect.addEventListener("change", (event) => {
		const horn = event.target.value;
		if(horn == 'air-horn') {
			hornImage.src = 'assets/images/air-horn.svg';
			hornAudio.src = 'assets/audio/air-horn.mp3';
		}else if(horn == 'car-horn'){
			hornImage.src = 'assets/images/car-horn.svg';
			hornAudio.src = 'assets/audio/car-horn.mp3';
		}else if(horn == 'party-horn'){
			hornImage.src = 'assets/images/party-horn.svg';
			hornAudio.src = 'assets/audio/party-horn.mp3';
		}
	});

	const hornButton = document.querySelector('button');
	hornButton.addEventListener("click", (event) => {
		if(hornAudio.src.includes('party-horn.mp3')){
			jsConfetti.addConfetti();
		}
		if(hornAudio.src.includes('assets/audio')){
			hornAudio.play();
		}
	});

	const volumeControl = document.querySelector('#volume');
	volumeControl.addEventListener('input', (event) => {
		const volumeLevel = event.target.value;
		hornAudio.volume = volumeLevel/100;
		if(volumeLevel == 0){
			document.querySelector('#volume-controls').querySelector('img').src = 'assets/icons/volume-level-0.svg';
		}else if(volumeLevel < 33){
			document.querySelector('#volume-controls').querySelector('img').src = 'assets/icons/volume-level-1.svg';
		}else if(volumeLevel <67){
			document.querySelector('#volume-controls').querySelector('img').src = 'assets/icons/volume-level-2.svg';
		}else{
			document.querySelector('#volume-controls').querySelector('img').src = 'assets/icons/volume-level-3.svg';
		}
	});
}
var video;
var volume;
var slider;

function getVid(){
	video = document.querySelector("#myVideo");
	console.log("Got Video");
}

function playVid() {
	video.play();
	let volume = document.querySelector("#volume")
	console.log("Play Video");
	console.log(video);
	console.log(volume);
	volume.innerHTML = (video.volume * 100) + "%";
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate *= .8
	console.log("Speed is " + video.playbackRate );
}

function increaseSpeed() {
	video.playbackRate +=.25
	console.log("Speed is "+video.playbackRate );
}

function skipAhead() {
	if (video.ended==true){
		video.currentTime = 0;
		video.play();
	}
	else{
		video.currentTime = video.currentTime + 60;
	}
	console.log("Current location is " + video.currentTime);
}


function mute() {
	if (video.muted){
		video.muted = false;
		console.log("Changing to Unmuted");
		var button = document.querySelector("#mute");
		button.innerHTML = "Mute"
		}
	else{
		video.muted = true;
		console.log("Changing to Muted");
		var button = document.querySelector("#mute");
		button.innerHTML = "Unmute"
		}
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider");
	let volume = document.querySelector("#volume")
	console.log(slider.value);
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = (video.volume * 100) + "%";
}

function gray() {
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale")
	console.log("In color");
}

// 		constructor() {
// }

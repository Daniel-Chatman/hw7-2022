var video;


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	var vid = document.getElementById("player1");
	vid.autoplay="false";
	vid.loop="false";
	vid.load();
});

//play
document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	 var vid = document.getElementById("player1");
	 vid.play()
	 //volume
	var volume =document.getElementById("slider");
	document.getElementById("volume").innerHTML= volume.value+"%"; 
 });

//pause
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	var vid = document.getElementById("player1");
	vid.pause()
 });

 //slow down
 document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	var vid = document.getElementById("player1");
	vid.playbackRate= vid.playbackRate*0.9;
	console.log("New playback rate is: "+vid.playbackRate);
 });

 //speed up 
 document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video");
	var vid = document.getElementById("player1");
	vid.playbackRate= vid.playbackRate/0.9;
	console.log("New playback rate is: "+vid.playbackRate);
 });

 //skip ahead
 document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead in Video");
	var vid = document.getElementById("player1");
	var duration = vid.duration;
	if( vid.currentTime +10>= vid.duration)
	{
		//go to start of video
		vid.currentTime=0;
	}
	else
	{
		//skip 10 seconds
		vid.currentTime+=10;
	}
	console.log("Current time is: "+vid.currentTime);
 });

 //mute
 document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute or Unmute Video");
	
	var vid = document.getElementById("player1");

	var button = document.getElementById("mute");
	if(button.textContent=="Mute")
	{
		//Mute
		button.textContent = "Unmute";
		vid.muted=true;
		console.log("muting");
	}
	else
	{
		//Unmute
		button.textContent = "Mute";
		vid.muted=false;
		console.log("unmuting");
	}
	
 });

 //volume slider
 document.querySelector("#slider").addEventListener("click", function() {
	console.log("Change volume of video");
	
	
	var volume =document.getElementById("slider");
	var vid = document.getElementById("player1");
	vid.volume = (volume.value)/100;
	console.log("Current volume is: " + vid.volume);
	document.getElementById("volume").innerHTML= volume.value+"%";
 });

 //styled
 document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School view selected");
	
	var vid = document.getElementById("player1");
	if(vid.classList.contains("oldSchool"))
	{
		//do nothing
	}
	else
	{
		//add oldSchool
		vid.classList.add("oldSchool");
	}
 });

 //original
 document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original view selected");
	
	var vid = document.getElementById("player1");
	if(vid.classList.contains("oldSchool"))
	{
		//remove oldSchool
		vid.classList.remove("oldSchool");
	}
	else
	{
		//do nothing
	}
 });
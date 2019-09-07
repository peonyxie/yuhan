
$(document).ready(function() {
	const distanceToNextImage = -800;
	let currentImageNumber = 0;
	let value = 0;
	let numImagesBJ = 5;
	let numImagesMia = 8;
	let numImagesSF = 5;
	let numImagesLA = 4;
	let numImagesCan = 1;
	

	$("#lightboxCQ #right").click(function(){
		currentImageNumber += 1;
		currentImageNumber = currentImageNumber % numImagesCQ;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxCQ #carousel-strip').css("left", value + "px");
	})
	$("#lightboxBJ #right").click(function(){
		currentImageNumber += 1;
		currentImageNumber = currentImageNumber % numImagesBJ;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxBJ #carousel-strip').css("left", value + "px");
	})
	$("#lightboxSF #right").click(function(){
		currentImageNumber += 1;
		currentImageNumber = currentImageNumber % numImagesSF;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxSF #carousel-strip').css("left", value + "px");
	})
	$("#lightboxLA #right").click(function(){
		currentImageNumber += 1;
		currentImageNumber = currentImageNumber % numImagesLA;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxLA #carousel-strip').css("left", value + "px");
	})
	$("#lightboxMia #right").click(function(){
		currentImageNumber += 1;
		currentImageNumber = currentImageNumber % numImagesMia;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxMia #carousel-strip').css("left", value + "px");
	})
	$("#lightboxCan #right").click(function(){
		currentImageNumber += 1;
		currentImageNumber = currentImageNumber % numImagesCan;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxCan #carousel-strip').css("left", value + "px");
	})
	$("#lightboxCQ #left").click(function(){
		currentImageNumber -= 1;
		currentImageNumber = currentImageNumber % numImagesCQ;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxCQ #carousel-strip').css("left", value + "px");
	})
	$("#lightboxBJ #left").click(function(){
		currentImageNumber -= 1;
		currentImageNumber = currentImageNumber % numImagesBJ;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxBJ #carousel-strip').css("left", value + "px");
	})
	$("#lightboxSF #left").click(function(){
		currentImageNumber -= 1;
		currentImageNumber = currentImageNumber % numImagesSF;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxSF #carousel-strip').css("left", value + "px");
	})
	$("#lightboxLA #left").click(function(){
		currentImageNumber -= 1;
		currentImageNumber = currentImageNumber % numImagesLA;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxLA #carousel-strip').css("left", value + "px");
	})
	$("#lightboxMia #left").click(function(){
		currentImageNumber -= 1;
		currentImageNumber = currentImageNumber % numImagesMia;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxMia #carousel-strip').css("left", value + "px");
	})
	$("#lightboxCan #left").click(function(){
		currentImageNumber -= 1;
		currentImageNumber = currentImageNumber % numImagesCan;
		value = (currentImageNumber * distanceToNextImage);
		$('#lightboxCan #carousel-strip').css("left", value + "px");
	})
	
//click close, hide lightbox 
	$("#lightboxCQ #overlay, #lightboxCQ #close").click(function() {		
		$("#lightboxCQ").hide();
		currentImageNumber = 0;

	})
	$("#lightboxBJ #overlay, #lightboxBJ #close").click(function() {		
		$("#lightboxBJ").hide();
		currentImageNumber = 0;

	})
	$("#lightboxSF #overlay, #lightboxSF #close").click(function() {		
		$("#lightboxSF").hide();
		currentImageNumber = 0;

	})
	$("#lightboxMia #overlay, #lightboxMia #close").click(function() {
		$("#lightboxMia").hide();
		currentImageNumber = 0;

	})
	$("#lightboxLA #overlay, #lightboxLA #close").click(function() {		
		$("#lightboxLA").hide();
		currentImageNumber = 0;

	})
	$("#lightboxCan #overlay, #lightboxCan #close").click(function() {		
		$("#lightboxCan").hide();
		currentImageNumber = 0;

	})

//click on icon, display lightbox 
	$('.icon#0').click(function(){
		$('#lightboxCQ #carousel-container').css("display", "inline");
		$("#lightboxCQ").show();		
		currentImageNumber = 0; 
		value = (currentImageNumber * distanceToNextImage).toString();
		$('#carousel-strip').css("left", value + "px");
	})

	$('.icon#1').click(function(){
		$('#lightboxBJ #carousel-container').css("display", "inline")
		$("#lightboxBJ").show();		
		currentImageNumber = 0;
		value = (currentImageNumber * distanceToNextImage).toString();
		$('#carousel-strip').css("left", value + "px");
	})
	$('.icon#2').click(function(){
		$('#lightboxSF #carousel-container').css("display", "inline")
		$("#lightboxSF").show();		
		currentImageNumber = 0;
		value = (currentImageNumber * distanceToNextImage).toString();
		$('#carousel-strip').css("left", value + "px");
	})
	$('.icon#3').click(function(){
		$('#lightboxLA #carousel-container').css("display", "inline")
		$("#lightboxLA").show();		
		currentImageNumber = 0;
		value = (currentImageNumber * distanceToNextImage).toString();
		$('#carousel-strip').css("left", value + "px");
	})
	$('.icon#4').click(function(){
		$('#lightboxMia #carousel-container').css("display", "inline")
		$("#lightboxMia").show();		
		currentImageNumber = 0;
		value = (currentImageNumber * distanceToNextImage).toString();
		$('#carousel-strip').css("left", value + "px");
	})

	$('.icon#5').click(function(){
		$('#lightboxCan #carousel-container').css("display", "inline")
		$("#lightboxCan").show();		
		currentImageNumber = 0; 
		value = (currentImageNumber * distanceToNextImage).toString();
		$('#carousel-strip').css("left", value + "px");
	})
})
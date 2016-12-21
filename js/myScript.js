var interactiveShown = false;
var dotsAnimated = false;
var dropped = false;
var rocketFar = false;
var rocketClose = false;
var showText = false;
var index = 0;
var showBike = false;

var textToShow = "//&copy; Jessica Nahulan";

(function($) {
    "use strict"; // Start of use strict


window.onscroll = function() {myFunction()};

function myFunction() {
	/*
    if ((document.body.scrollTop > 860 || document.documentElement.scrollTop > 860) && interactiveShown == false) {
       $(".bg").interactive_bg();
	   interactiveShown = true;
	   document.getElementById("spaceText").className = "animated delay swing";
	   setTimeout(myFunction2, 2500);
	}*/
	if ((document.body.scrollTop > 860 || document.documentElement.scrollTop > 860) && rocketFar == false) {		
	   setTimeout(FireFarRocket, 1000);
	}
	if ((document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) && dotsAnimated == false) {
	   dotsAnimated = true;
	   document.getElementById("ballz1").className = "ball";
	   document.getElementById("ballz2").className = "ball";
	   document.getElementById("ballz3").className = "ball";
	   document.getElementById("ballz4").className = "ball";
	   document.getElementById("ballz5").className = "ball";
	   document.getElementById("ballz6").className = "ball";
	   document.getElementById("ballz7").className = "ball";
	   setTimeout(portraitTextAppear, 1000);
	   
	}
	if ((document.body.scrollTop > 920 || document.documentElement.scrollTop > 920) && dotsAnimated == true && dropped == false) {
	   dropped = true;
	   document.getElementById("ballzContains").className = "dropped1 bigScreenOnly";
	   setTimeout(hideBalls, 1500);
	}
	
	if ((document.body.scrollTop > 2350 || document.documentElement.scrollTop > 2350) && showText == false) {	
		setTimeout(paintBrush, 1500);
	   setTimeout(showTextArt, 2000);	   
		showText = true;
	}
	
		if ((document.body.scrollTop > 3050 || document.documentElement.scrollTop > 3050) && showBike == false) {	
		setTimeout(bike, 2500);
		showBike = true;
	}
	
	
}


function bike() { 
		document.getElementById("myBike").style.visibility = "visible";
		document.getElementById("myBike").className = "bikeMoveRight bigScreenOnly";
}

function paintBrush() { 
		document.getElementById("myBrush").style.visibility = "visible";
		document.getElementById("myBrush").className = "artBrushRR bigScreenOnly";	
		document.getElementById("rotateBrush").className = "artBrush2 bigScreenOnly";
}

function showTextArt() { 
		document.getElementById("artText").style.visibility = "visible";
		if(index==2){
			document.getElementById("artText").innerText  = document.getElementById("artText").innerText + '\u00A9';
			index = 8;
		}	
		else{
		document.getElementById("artText").innerText  = document.getElementById("artText").innerText + textToShow.charAt(index);
		index++;
		}
		setTimeout(showTextArt, 150);
}

function FireFarRocket() { 
		document.getElementById("rockFar").style.visibility = "visible";
		document.getElementById("rockFar").className = "animated rocketFar bigScreenOnly";
		rocketFar = true;
	    setTimeout(FireCloseRocket, 4000);
}

function FireCloseRocket() { 
	if(rocketFar == true && rocketClose == false)
	{
		var image_x = document.getElementById('rockFar');
		image_x.parentNode.removeChild(image_x);
	   document.getElementById("rockClose").style.visibility = "visible";
	   document.getElementById("rockClose").className = "animated rocketClose bigScreenOnly";
	   rocketClose = true;
	    setTimeout(removeClose, 4000);
	}
}

function removeClose() { 
		var image_x = document.getElementById('rockClose');
		image_x.parentNode.removeChild(image_x);
}


function hideBalls() {    
	   document.getElementById("ballzContains").style.visibility = "hidden";
	   var image_x = document.getElementById('ballzContains');
		image_x.parentNode.removeChild(image_x);
}

function portraitTextAppear() { 
	   document.getElementById("portraitText").style.visibility = "visible";
	   document.getElementById("portraitText").className = "animated bounceInLeft text-center";
}


function myFunction2() {    
	   document.getElementById("spaceText").style.visibility = "visible";
}



})(jQuery); // End of use strict




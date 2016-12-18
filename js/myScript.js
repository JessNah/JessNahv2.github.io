var interactiveShown = false;
var dotsAnimated = false;
var dropped = false;

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
	   document.getElementById("ballzContains").className = "dropped1";
	   setTimeout(hideBalls, 1500);
	}
}


function hideBalls() {    
	   document.getElementById("ballzContains").style.visibility = "hidden";
}

function portraitTextAppear() { 
	   document.getElementById("portraitText").style.visibility = "visible";
	   document.getElementById("portraitText").className = "animated bounceInLeft text-center";
}


function myFunction2() {    
	   document.getElementById("spaceText").style.visibility = "visible";
}



})(jQuery); // End of use strict




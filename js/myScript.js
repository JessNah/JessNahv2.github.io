var interactiveShown = false;

(function($) {
    "use strict"; // Start of use strict


window.onscroll = function() {myFunction()};

function myFunction() {
	
    if ((document.body.scrollTop > 760 || document.documentElement.scrollTop > 760) && interactiveShown == false) {
       $(".bg").interactive_bg();
	   interactiveShown = true;
	   document.getElementById("spaceText").className = "animated delay swing";
	   setTimeout(myFunction2, 2500);
	}
}


function myFunction2() {    
	   document.getElementById("spaceText").style.visibility = "visible";
}


})(jQuery); // End of use strict

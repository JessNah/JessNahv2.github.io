var interactiveShown = false;

(function($) {
    "use strict"; // Start of use strict


window.onscroll = function() {myFunction()};

function myFunction() {
	
    if ((document.body.scrollTop > 760 || document.documentElement.scrollTop > 760) && interactiveShown == false) {
       $(".bg").interactive_bg();
	   interactiveShown = true;
	}
}


})(jQuery); // End of use strict

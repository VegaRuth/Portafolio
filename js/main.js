$(document).ready (function() {
console.log("estoy listo");
/*/font
$ ( "body" ) .flowtype ({ fontRatio: 30 });
$ ( "body" ) .flowtype ({ 
	minimum: 1 , 
	maximum: 100 , 
	minFont: 10, 
	maxFont: 60 ,  
});*/


	//Ciclo para progress bar
	for (var i=1; i<=8;i++) {
		var elementId = "#myProgress_" + i;
		var el = $(elementId);
		var bar_value = el.attr("aria-valuenow" )  +  "%" ; 
		el.animate ({ width : bar_value }, 800); 
	};
	
// Skills Progress Bar


});//end document ready
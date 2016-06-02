$(document).ready(function(){

//animar progress bar
//$ ( function ()  { 

	

/*
  $ ( ".progress-bar" ). each ( function ()  { 
    var bar_value = $ ( this ). attr ( "aria-valuenow" )  +  "%" ;                 
    $ ( this ). animate ({ width : bar_value },  { duration :  2000 , easing :  "easeOutCirc"  }); 
  });
 */ 
//});



	for (var i=1; i<=8;i++) {
		var elementId = "#myProgress_" + i;
		var el = $(elementId);
		var bar_value = el.attr("aria-valuenow" )  +  "%" ; 
		el.animate ({ width : bar_value }, 800); 
	};
	
// Skills Progress Bar


});//end document ready
// Header
var i=1;

$("#header .fa-chevron-right").on("click",function(){
	$("#header #container"+i).fadeOut(400);
	i++; checkI();
	$("#header #container"+i).delay(400).fadeIn();
	
})

$("#header .fa-chevron-left").on("click",function(){
	$("#header #container"+i).fadeOut(400);
	i--; checkI();
	$("#header #container"+i).delay(400).fadeIn();
})

	// Function to keep i between 1 and 3
	function checkI(){
		if(i==4){
			i=1;
		}else if(i==0){
			i=3;
		}
	}

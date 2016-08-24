// Header
var sliderNum=1;

$("#header .fa-chevron-right").on("click",function(){
	$("#header #container"+sliderNum).fadeOut(400);
	sliderNum++; checkI();
	$("#header #container"+sliderNum).delay(400).fadeIn();
	
})

$("#header .fa-chevron-left").on("click",function(){
	$("#header #container"+sliderNum).fadeOut(400);
	sliderNum--; checkI();
	$("#header #container"+sliderNum).delay(400).fadeIn();
})

	// Function to keep sliderNum between 1 and 3
	function checkI(){
		if(sliderNum==4){
			sliderNum=1;
		}else if(sliderNum==0){
			sliderNum=3;
		}
	}

// Offers
	// Function to make all divs' height same
	var maxHeight=0;
	for(i=1;i<5;i++){
		thisH=$("#offers .col-md-3:nth-child("+i+")").height();
		if(thisH>maxHeight){
			maxHeight=thisH;
		}
	}
	$("#offers .col-md-3 .offer").height(thisH);
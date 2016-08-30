// Header
	// Slider

	var wHeight=$(this).height();
	var wScroll=$(this).scrollTop();
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
	// Floating elements animation
	$("#header").mousemove(function(){
		var X=event.pageX;
		var Y=event.pageY;
		
		// Container1
		$("#desktop").css("top",Y/100).css("left",200+X/100);
		$("#tablet").css("top",20+Y/70).css("left",X/70-130);
		$("#phone").css("top",30+Y/85).css("left",X/85+60);
		$("#container1 h1, #container1 p").css("position","relative").css("top",Y/70).css("left",X/70);
		
		// Container2
		$("#skew1").css("top",Y/100-160).css("left",10+X/100);
		$("#skew2").css("top",Y/70-350).css("left",X/70-220);
		$("#skew3").css("top",Y/85-445).css("left",40+X/85);
		$("#container2 h1, #container2 p").css("position","relative").css("top",Y/70).css("left",X/70);
		
		// Container3
		$("#screen3").css("top",200+Y/85).css("left",X/85-50);
		$("#container3 h1, #container3 p").css("position","relative").css("top",Y/60).css("left",X/60);
	})
	
	// Make menu fixed
	//if( wScroll > ( $("#logos").offset().top - wHeight/1.4) )

// Offers
	// Function to make all divs' height same
	var maxHeight=0;
	for(i=1;i<=4;i++){
		thisH=$("#offers .col-md-3:nth-child("+i+")").height();
		if(thisH>maxHeight){
			maxHeight=thisH;
		}
	}
	$("#offers .col-md-3 .offer").height(thisH);

// Portfolio
	// Hover animations
	$("#portfolio .portItem").mouseenter(function(){
		$(this).find("img").animate({width:"102%",left:"-1%",top:"-2px"},300);
	})
	
	$("#portfolio .portItem").mouseleave(function(){
		$(this).find("img").animate({width:"100%",left:"0",top:"0"},300);
	})
	
//Packages
	// Function to make all packages the same height
	var maxHe=0;
	for(i=1;i<=3;i++){
		thisH=$("#packages .col-md-4:nth-child("+i+")").height();
		console.log(thisH);
		/*if(thisH>maxHe){
			maxHe=thisH;
		}*/
	}
	$("#packages .col-md-4 .package").height(thisH);
// array to hold all the images we need 
// second we need a function that runs the slideShow 
var i = 0;
var slideImage = [ "img/1.jpg", "img/2.jpg", "img/3.jpeg" ,"img/4.jpeg"]
// excepretion funion 
var slideShow = function() { 
	// reach to html by document and grap the img name 
	document.slideshow.src = slideImage[i]; 
	// make an if statement to run the images and set the length to -1 to make the array run over and over 
	if (i < slideImage.length -1) { 
		// if the condition is right increment by 1
		i++
	} else { 
		// now when the code reach to the last item it will run over 
		i = 0;
	} 
	// setTimeout takes two parametare , the function and the time 
	setTimeout("slideShow()", 2000);
}
slideShow(); 
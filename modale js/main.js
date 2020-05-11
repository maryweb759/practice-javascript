//   first grap the model 
// 2 get he content of the model 
// 3 get the close button 
// 4 when click on the close hide the model 
// 5 when click on the skip button hide the model 

// 1- get he model and the image //

var modal = document.getElementById("the_modal"); 
 var img = document.getElementById("the_img"); 


// 2- get the content of the model  // 

var modalImg = document.getElementById("img"),
    modalCaption = document.getElementById("caption");  

    //  - make the model pop up 

img.onclick = function () { 
    modal.style.display = "block"; 
    // get the src of the modalImg and give it to this image
    modalImg.src = this.src; 
    modalCaption.innerHTML = this.alt  ;
} 

//  get the close button 
var close =  document.getElementsByClassName("close")[0];  

// 4 when click on the close hide the model  

close.onclick = function () { 
    modal.style.display = "none";
} 

// 5 when click on the skip button hide the model 
// (ev) means the button that you are clicking on 
  document.onkeydown = function(ev) { 
    if (ev.keyCode == "27") { 
        modal.style.display = "none";
    }
  }
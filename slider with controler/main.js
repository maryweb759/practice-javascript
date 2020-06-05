
/*
1- get all the element from the html 
2- create the ul list 
3- create the next and the prev functions 
4- make a for loop for ul and li list 
5 - apply the disabled class to prev and next button 
6- make the function that removes active classe from img and bullets

*/

/// get slider items array.from [es6 features] 
var slideImages = Array.from(document.querySelectorAll('.slider-container img')); 

// get number of slides 
var slidesCount = slideImages.length; 

// set current slide  
var currentSlide = 1;  

// slide number element 
var slideNumberElement = document.getElementById("slider-number"); 

// previous and next buttons 
var nextButton = document.getElementById("next"); 
var prevButton = document.getElementById("prev"); 

// handle click on previous and next buttons 
nextButton.onclick = nextSlide; 
prevButton.onclick = prevSlide; 

// create the main ul Element 
var paginationElement = document.createElement('ul'); 

// set ID on created ul element  
paginationElement.setAttribute('id', 'pagination-ul'); 

// create list items based on slides count 
for (var i = 1; i <= slidesCount; i++) { 

    // create the li 
 var paginationItem = document.createElement('li');
 
 // set custom Attribute 
 paginationItem.setAttribute('data-index', i); 

 // set item content 
 paginationItem.appendChild(document.createTextNode(i)); 

 // Append items to the main ul list 
 paginationElement.appendChild(paginationItem);
} 

// add the created ul element to the page 
document.getElementById('indicators').appendChild(paginationElement);

// get the new created ul 
var paginationCreatedUl = document.getElementById('pagination-ul');

/// get pagination items array.forms [es6 features] 
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li')); 

// loop through all bulets icons 
for (var i = 0; i < paginationBullets.length; i++ ) { 
   paginationBullets[i].onclick = function() {
      currentSlide = parseInt(this.getAttribute('data-index'));
      theChecker();
   }
}


// triger the slide function 
theChecker();


// function next slide 
function nextSlide() { 
  if (nextButton.classList.contains('disabled')) { 
    return false; 
  } else { 
   currentSlide++ ;
   theChecker();
  }
}  



// function previous slide 
function prevSlide() { 
   if (prevButton.classList.contains('disabled')) { 
      return false; 
    } else { 
     currentSlide-- ;
     theChecker();
    }
 }  




 // create the checker function 
 function theChecker() { 
    // set the slide number
   slideNumberElement.textContent ='slide' + (currentSlide) + ' of ' + (slidesCount); 
  
  // remove all classes
  removeAllActive(); 
   // set active class on current slide 
   slideImages[currentSlide - 1].classList.add('active');

// set active class on current pagination item 
   paginationCreatedUl.children[currentSlide - 1].classList.add('active');
  
   // check if current slide is the first 
   if (currentSlide == 1) { 
      // add disabled class on previous button 
      prevButton.classList.add('disabled'); 
   } else { 
      // remove disabled class from previous button 
      prevButton.classList.remove('disabled'); 
   } 

   // check if current slide is the last
   if (currentSlide == slidesCount) { 
      // add disabled class on next button 
      nextButton.classList.add('disabled'); 
   } else { 
      // remove disabled class from next button 
      nextButton.classList.remove('disabled'); 
   }
   
} 
// remove all classes from images and pagination bullets 
function removeAllActive() { 
   // loop through images 
   slideImages.forEach(function(img) { 
      img.classList.remove('active'); 
   }); 

   // loop through pagination bullets 
   paginationBullets.forEach(function (bullet) { 
    bullet.classList.remove('active');
   });
}
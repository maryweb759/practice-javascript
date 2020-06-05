
/* 
get the element from html 
make the next and prev func 
create the ul and li list 
for loop for ul list 
the checker func 
remove active func 
if statement for prev and next button
for loop for bullets
*/
var sliderImage = Array.from(document.querySelectorAll('.slider-container div'));
var slidesCount = sliderImage.length; 
var currentSlide = 1;
var nextArrow = document.getElementById("next");
var prevArrow = document.getElementById('prev'); 
nextArrow.onclick = nextSlide; 
prevArrow.onclick = prevSlide;
theChecker()
function nextSlide() { 
    if (nextArrow.classList.contains('disabled')) { 
        return false;
    } else { 
        currentSlide++; 
        theChecker();
    }
} 
function prevSlide() { 
    if (prevArrow.classList.contains('disabled')) { 
        return false;
    } else { 
        currentSlide--; 
        theChecker();
    }

} 

function theChecker() { 
    removeAllActive()
    sliderImage[currentSlide - 1].classList.add('active');
    if (currentSlide == 1) { 
        prevArrow.classList.add('disabled');
    } else { 
        prevArrow.classList.remove('disabled');
    }
    if (currentSlide == slidesCount) { 
        nextArrow.classList.add('disabled');
    } else { 
        nextArrow.classList.remove('disabled');
    }
} 
 function removeAllActive() { 
    sliderImage.forEach(function(img) { 
     img.classList.remove('active');
    });
 }
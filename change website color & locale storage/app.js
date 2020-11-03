// add default local storage class on body
//document.body.classList.add(localStorage.getItem('pageColor') || 'red');

//var el = document.querySelectorAll('.color-switcher li'); 
//var classList = [] ;  
 // loop on element 
// for (var i = 0; i < el.length; i++) { 
     // get classes list 
   //  classList.push(el[i].getAttribute('data-color')); 
   // el[i].addEventListener('click', function() { 
        // remove all old classes
      //  document.body.classList.remove(...classList); 
        // add current class from li data attribute
      //  document.body.classList.add(this.getAttribute("data-color"));
       
        // add data to locale storage
     //   localStorage.setItem('pageColor', this.getAttribute('data-color')); 
  //  }, false);
 
 
//} 
//console.log(localStorage.getItem('pageColor')); 



document.body.classList.add(localStorage.getItem('pageColor'), 'red');
var el = document.querySelectorAll('.color-switcher li'), 
   classList = []; 
   for (var i = 0; i < el.length; i++) { 
       classList.push(el[i].getAttribute('data-color')); 
       el[i].addEventListener('click', function() { 
        document.body.classList.remove(...classList);
        document.body.classList.add(this.getAttribute('data-color'));
        localStorage.setItem('pageColor', this.getAttribute('data-color'));
    }, false);
    } 
   console.log(localStorage.getItem('pageColor')); 
   01010110 
   (0*2)


























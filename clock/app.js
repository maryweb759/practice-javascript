 /* function clock() { 
var fullDate = new Date(); 
var hours = fullDate.getHours(); 
var mins = fullDate.getMinutes() ;
var secons = fullDate.getSeconds(); 

if (hours < 10) { 
 hours = "0" + hours;
}
if (mins < 10) { 
    mins = "0" + mins ;
   }
   if (secons < 10) { 
    secons = "0" + secons;
   }
      
document.getElementById("hour").innerHTML = hours; 
document.getElementById("minute").innerHTML = ":" + mins; 
document.getElementById("second").innerHTML = ":" + secons; 


} 
setInterval(clock, 1000); */ 
function clock() { 
    var fullDate = new Date(); 
    var hours = fullDate.getHours(); 
    var mins = fullDate.getMinutes(); 
    var secons = fullDate.getSeconds(); 
     if (hours  < 10) { 
         hours = "0" + hours;
     } else if (secons < 10) { 
         secons = "0" + secons;
     } else if (mins < 10) { 
        mins = "0" + mins;
    }
    document.getElementById("hour").innerHTML = hours; 
    document.getElementById("minute").innerHTML = ":" + mins; 
    document.getElementById("second").innerHTML = ":"  + secons;
} 
 // setInterval(clock, 100); 
function clock() { 
    var fullDate = new Date();
    var hours = fullDate.getHours(); 
    var mins = fullDate.getMinutes(); 
    var secons = fullDate.getSeconds(); 
    if (hours < 10) { 
        hours = "0" + hours;
    } else if (mins < 10) { 
        mins = "0" + mins;
    } else if (secons < 10) { 
        secons = "0" + secons;
    }
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = ":" + mins;
    document.getElementById("second").innerHTML =  ":" + secons;
} 
setInterval(clock, 1000);
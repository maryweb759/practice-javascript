function clock() { 
    var fullDate = new Date(); 
    var hrs = fullDate.getHours(); 
    var minutes = fullDate.getMinutes(); 
    var secnd = fullDate.getSeconds();  
    var day = fullDate.getUTCDay(); 
    var month = fullDate.getMonth();  
    var monthCOUNT = month++;
    var year = fullDate.getFullYear(); 
    if (hrs < '10') { 
        hrs = '0' + hrs; 
    } else if (secnd < '10') { 
        secnd = '0' + secnd; 
    } else if (minutes < '10') { 
        minutes = '0' + minutes; 
    }
 document.getElementById("hours").innerHTML = hrs;
 document.getElementById("minutes").innerHTML = ': ' + minutes;
 document.getElementById("seconds").innerHTML = ': ' + secnd; 
 document.getElementById("day").innerHTML =  day; 
 document.getElementById("month").innerHTML = '/ ' + ' ' +  month; 
 document.getElementById("year").innerHTML = '/ ' + ' ' +  year; 
 
} 
 setInterval(clock, 1000);
 const value = document.querySelector('p'); 
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
number.forEach((num) => { 
 num.addEventListener('click', () => { 
  if(value.innerHTML == '0') value.innerHTML = num.innerHTML;
  else { 
      value.innerHTML += num.innerHTML;
  }
});
}); 
operator.forEach((ope) => { 
    ope.addEventListener('click', () => { 
      if(ope.innerHTML == 'clear') { 
         value.innerHTML = 0; 
     } else if (ope.innerHTML == '%') { 
      const newValueNum =  value.innerHTML / 100; 
      value.innerHTML =  newValueNum;
     } else if (ope.id == '+') { 
         value.innerHTML += ope.id;
     } else if (ope.id == '*') { 
        value.innerHTML += ope.id;
     } else if (ope.id == '/') { 
        value.innerHTML += ope.id;
     } else if (ope.id == '-') { 
        value.innerHTML += ope.id;
     } else if (ope.id == '.') { 
        value.innerHTML += ope.id;
     } else if (ope.id == '=') { 
        value.innerHTML = eval(value.innerHTML);
     }
    });
}); 

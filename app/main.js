/* 
- addEventListener 
- target 
- array 
- getElementbyId / TagName 
- parentNode / nodeName 
classList 
*/ 

var the_heading = document.getElementById("heading") ,
    the_ul = document.getElementById("list") ,
    the_Button = document.getElementById("button") ,
    the_li = document.querySelectorAll("li"), counter =6; 

the_ul.addEventListener("click", active) 
function active(e) 
 { 
   // this function would just work when we click li
   if(e.target.nodeName == "LI") 
    { 
      the_heading.innerHTML = e.target.innerHTML; 
      for (var i = 0; i < e.target.parentNode.children.length; i++) 
      { 
        e.target.parentNode.children[i].classList.remove("active");
   }
// add class active
    e.target.classList.add("active");
  }
}
the_Button.addEventListener("click", function() { 
  the_ul.innerHTML += "<li> new item " + counter + "</li>"; 
  counter++;
});

 









 
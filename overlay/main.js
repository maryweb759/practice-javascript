// we make the document global to do not call it two times
var theDiv = document.getElementById("myDiv"); 
function openDiv() { 
    theDiv.style.transform = "scale(1)";
} 
function closeDiv() { 
    theDiv.style.transform = "scale(0)";
}
var logic = document.getElementById("logicpage");
var homepage = document.getElementById("homepage");
var foot = document.getElementsByClassName("footer");
var displaystory = document.getElementsByClassName("story");


function start() {
    {
    var logic = document.getElementById("logicpage");
    if (logic.style.display === "none") {
        logic.style.display = "block";
        // foot.style.display = "block";
    } else { logic.style.display = "none";
        // foot.style.display = "block";
}
}

{
 var homepage = document.getElementById("homepage");
 var foot = document.getElementsByClassName("footer");
 if (logic.style.display === "block") {
     homepage.style.display = "none";
     
 }
else {foot.style.display = "none"};
}

}

function displayNext() {
    // var logic = document.getElementById("logicpage");
    // var displaystory = document.getElementsByClassName("story");
    if (logic.style.display === "block") {
        displaystory.style.display = "block"; 
        logic.style.display = "none";
    }
    // } else { logic.style.display = "none"};
}
// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

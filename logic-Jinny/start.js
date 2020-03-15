
function start(){
    document.getElementById("logicpage").style.display = "block";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("button_next").style.display = "block";
    document.getElementById("button_back").style.display = "block";
}

function displayNext(){
    document.getElementById("logicpage").style.display = "none";
    document.getElementById("storyone").style.display = "block"; 
    document.getElementById("storytwo").style.display = "block";
}





// start() if logic 이 display none 일떄 logic 이 block 됌. \
// else 일떈 logic 은 똑같이 none


// 그리고 logic 이 display block 되면 다시 homepage 는 display none 이 
// 되고 button 은 block 이된다























// var logic = document.getElementById("logicpage");
// var homepage = document.getElementById("homepage");
// var foot = document.getElementsByClassName("footer");
// var displaystory = document.getElementsByClassName("story");


// function start() {
//     {
//     var foot = document.getElementsByClassName("footer");
//     var logic = document.getElementById("logicpage");
//     if (logic.style.display === "none") {
//         logic.style.display = "block";
//         // foot.style.display = "block";
//     } else { logic.style.display = "none";
//         // foot.style.display = "block";
// }
// }

// {
//  var homepage = document.getElementById("homepage");
//  var foot = document.getElementsByClassName("footer");
//  if (logic.style.display === "block") {
//      homepage.style.display = "none";
//      foot.style.display = "block";
//  }
// else {foot.style.display = "none"};
// }

// }

// function displayNext() {
//     var logic = document.getElementById("logicpage");
//     var displaystory = document.getElementsByClassName("story");
//     if (logic.style.display == "block") {
//         displaystory.style.display = "block"; 
//         logic.style.display = "none";
//     }
//      else { logic.style.display = "none"};
// }
// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
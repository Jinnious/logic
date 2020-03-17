
var index = 0;
var slideshows = [
{
    image:"one/first/firstpage.svg"
},
{
    image:"one/first/secondpage_1.svg"
},
{
    image:"one/first/secondpage_2.svg"
},
{
    image:"one/first/secondpage_3.svg"
},
{
    image:"one/first/thirdpage_1.svg"
},
{
    image:"one/first/thirdpage_2.svg"
},
{
    image:"one/first/thirdpage_3.svg"
},
{
    image:"one/first/fourthpage_1.svg"
},
{
    image:"one/first/fourthpage_2.svg"
},
{
    image:"one/first/fourthpage_3.svg"
},
{
    image:"one/first/fourthpage_4.svg"
},
{
    image:"one/first/fifthpage_1.svg"
},
{
    image:"one/first/fifthpage_2.svg"
},
{
    image:"one/first/fifthpage_3.svg"
},
{
    image:"one/first/sixthpage_1.svg"
},
{
    image:"one/first/sixthpage_2.svg"
},
{
    image:"one/first/sixthpage_3.svg"
},
{
    image:"one/first/sixthpage_4.svg"
},
{
    image:"one/first/seventhpage_1.svg"
},
{
    image:"one/first/seventhpage_2.svg"
},
{
    image:"one/first/seventhpage_3.svg"
},

{
    image:"one/second/1.svg"
},
{
    image:"one/second/2.svg"
},
{
    image:"one/second/3.svg"
},
{
    image:"one/second/4.svg"
},
{
    image:"one/second/5.svg"
},
{
    image:"one/second/6.svg"
},
{
    image:"one/second/7.svg"
},
{
    image:"one/third/1.svg"
},
{
    image:"one/third/2.svg"
},
{
    image:"one/third/3.svg"
},
{
    image:"one/third/4.svg"
},
{
    image:"one/third/5.svg"
},
{
    image:"one/third/6.svg"
},
{
    image:"one/third/7.svg"
},
{
    image:"one/third/8.svg"
},
{
    image:"one/fourth/1.svg"
},
{
    image:"one/fourth/2.svg"
},
{
    image:"one/fourth/3.svg"
},
{
    image:"one/fourth/4.svg"
},
{
    image:"one/fourth/5.svg"
},
{
    image:"one/fourth/6.svg"
},
];
console.log(slideshows,slideshows[1].image);

function StoryOne(){
  
    document.querySelector(".image img").src = slideshows[0].image;
    document.getElementById("storyoptionpage").style.display = "none"; 
    document.querySelector(".image").style.display = "block";
   
}


function StoryTwo(){
  
    document.querySelector(".image img").src = slideshows[28].image;
    document.getElementById("storyoptionpage").style.display = "none"; 
    document.querySelector(".image").style.display = "block";
   
}

function displayNext(){

    document.getElementById("logicpage").style.display = "none";
    document.getElementById("storyone").style.display = "block"; 
    document.getElementById("storytwo").style.display = "block";
    document.getElementById("header").style.display = "block";
    document.getElementById("bg").style.display = "block";

    index++;
    if(index >= slideshows.length){
        index = 0;
    }
    document.querySelector(".image img").src = slideshows[index].image;
}

function Back(){
    index--;
    if(index <= slideshows.length){
        index > 0;
    }

    document.querySelector(".image img").src = slideshows[index].image;
}
Start();





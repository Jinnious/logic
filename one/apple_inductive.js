var index = 0;
var slideshows = [
{
    image:"first/firstpage.svg"
},
{
    image:"first/secondpage_1.svg"
},
{
    image:"first/secondpage_2.svg"
},
{
    image:"first/secondpage_3.svg"
},
{
    image:"first/thirdpage_1.svg"
},
{
    image:"first/thirdpage_2.svg"
},
{
    image:"first/thirdpage_3.svg"
},
{
    image:"first/fourthpage_1.svg"
},
{
    image:"first/fourthpage_2.svg"
},
{
    image:"first/fourthpage_3.svg"
},
{
    image:"first/fourthpage_4.svg"
},
{
    image:"first/fifthpage_1.svg"
},
{
    image:"first/fifthpage_2.svg"
},
{
    image:"first/fifthpage_3.svg"
},
{
    image:"first/sixthpage_1.svg"
},
{
    image:"first/sixthpage_2.svg"
},
{
    image:"first/sixthpage_3.svg"
},
{
    image:"first/sixthpage_4.svg"
},
{
    image:"first/seventhpage_1.svg"
},
{
    image:"first/seventhpage_2.svg"
},
{
    image:"first/seventhpage_3.svg"
},

{
    image:"second/1.svg"
},
{
    image:"second/2.svg"
},
{
    image:"second/3.svg"
},
{
    image:"second/4.svg"
},
{
    image:"second/5.svg"
},
{
    image:"second/6.svg"
},
{
    image:"second/7.svg"
},
{
    image:"third/1.svg"
},
{
    image:"third/2.svg"
},
{
    image:"third/3.svg"
},
{
    image:"third/4.svg"
},
{
    image:"third/5.svg"
},
{
    image:"third/6.svg"
},
{
    image:"third/7.svg"
},
{
    image:"third/8.svg"
},
{
    image:"fourth/1.svg"
},
{
    image:"fourth/2.svg"
},
{
    image:"fourth/3.svg"
},
{
    image:"fourth/4.svg"
},
{
    image:"fourth/5.svg"
},
{
    image:"fourth/6.svg"
},
];
console.log(slideshows,slideshows[1].image);

function storyOne(){
 
    document.querySelector(".image img").src = slideshows[0].image;
}

function Next(){
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
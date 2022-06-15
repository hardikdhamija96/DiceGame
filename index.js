//alert("working");

//var vs let

var randomNumber1=  Math.floor(6*Math.random()+1);//Number generator between 1-6
var randomNumber2=  Math.floor(6*Math.random()+1);
//console.log(randomNumber1);

var randomDiceImage1 = "images/Dice"+randomNumber1+".png";
var randomDiceImage2 = "images/Dice"+randomNumber2+".png";
//console.log(randomDiceImage);

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Won!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 Won!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
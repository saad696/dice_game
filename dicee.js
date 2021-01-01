var randomNumber1 = Math.floor(Math.random(randomNumber1)*6)+1;
var randomNumber2 = Math.floor(Math.random(randomNumber2)*6)+1;
/*of dice one*/
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src" , randomDiceImage1);

/*of dice two*/
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src" , randomDiceImage2);


/*winning message*/
if(randomNumber1===randomNumber2){
	document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML =
	 "<img class='icon' src='images/celebration.png'>Player one wins.<img class='icon' src='images/celebration.png'>";
}
else{
	document.querySelector("h1").innerHTML = 
	"<img class='icon' src='images/celebration.png'>Player two wins.<img class='icon' src='images/celebration.png'>";
}
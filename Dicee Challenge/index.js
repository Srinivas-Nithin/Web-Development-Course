var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "Dice" + randomNumber1 + ".png";  //prints dice 1 to dice 6.
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "Dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🥇 Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "🥇 Player 2 Wins!";
}else{
  document.querySelector("h1").innerHTML = "🥇 Both Wins!";
}

var randomNumber1=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").innerHTML="payer 1 is equal to player 2";
}
else{
  document.querySelector("h1").innerHTML="player 2 wins";
}

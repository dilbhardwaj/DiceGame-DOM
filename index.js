var randomNumber1=Math.floor(Math.random()*6)+1;
var name1="./"+"dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",name1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var name2="./"+"dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",name2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 wins";
}
else{
    document.querySelector("h1").textContent="Tie";

}
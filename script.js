var clicks= 0;
var score= document.getElementById("score");
var cookie= document.getElementById("cookie");
function cookie_click(){
clicks++;
score.innerHTML = ("Score: " + clicks);
}
function dev_cheat(){
								clicks= 999;
}
if(clicks > 1000) {
cookie.innerHTML = ("&#128142;");
}

var randomColor = document.querySelector(".random");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var characters = "ABCDEF0123456789";
var css = document.querySelector("h3");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function randomHexCode1(length) {
  length = 6;
  var result1 = "";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++)
    result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result1;
}
function randomHexCode2(length) {
  length = 6;
  var result2 = "";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++)
    result2 += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result2;
}

function randomGradient() {
  var result1 = "#" + randomHexCode1(6);
  var result2 = "#" + randomHexCode2(6);
  body.style.background =
    "linear-gradient(to right," + result1 + "," + result2 + ")";
  css.textContent = body.style.background + ".";
}
randomColor.addEventListener("click", randomGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function changeText() {
  var textsArray = ["JavaScript", "HTML", "CSS", "Python", "C++"];
  var number = getRandomNumberBetween(0, textsArray.length - 1);
  console.log("Index: ", number);
  document.getElementById("text").innerHTML = textsArray[number];
}
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

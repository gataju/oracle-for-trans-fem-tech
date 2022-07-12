const shuffleButton = document.getElementById("shuffle-button");
const resetButton = document.getElementById("reset-button");


var cards = document.getElementsByClassName("card__img");
var valuesCard = document.getElementById("values");
var objectCard = document.getElementById("objects");
var peopleCard = document.getElementById("people");
var situationsCard = document.getElementById("situations");

function randomNumber(i){
  var x = Math.floor(Math.random() * i) +1;
  return x;
}

function rotateDeg(){
  var x = (Math.random() * -3) +1;
  return x;
}


shuffleButton.addEventListener("click", function() {
  var values = randomNumber(24);
  var objects = randomNumber(24);
  var people = 1;
  var situations = randomNumber(13);

  objectCard.setAttribute("src", `./assets/objects/${objects}.jpg`);
  valuesCard.setAttribute("src", `./assets/values/${values}.jpg`);
  peopleCard.setAttribute("src", `./assets/people-places/${people}.jpg`);
  situationsCard.setAttribute("src", `./assets/situations/${situations}.jpg`);

  cards[0].setAttribute("style", `transform:rotate(${rotateDeg()}deg)`);
  cards[1].setAttribute("style", `transform:rotate(${rotateDeg()}deg)`);
  cards[2].setAttribute("style", `transform:rotate(${rotateDeg()}deg)`);
  cards[3].setAttribute("style", `transform:rotate(${rotateDeg()}deg)`);
});

resetButton.addEventListener("click", function() {
  objectCard.setAttribute("src", `./assets/objects/objects.jpg`);
  valuesCard.setAttribute("src", `./assets/values/values.jpg`);
  peopleCard.setAttribute("src", `./assets/people-places/people-places.jpg`);
  situationsCard.setAttribute("src", `./assets/situations/situations.jpg`);

  cards[0].setAttribute("style", `transform:rotate(0deg)`);
  cards[1].setAttribute("style", `transform:rotate(0deg)`);
  cards[2].setAttribute("style", `transform:rotate(0deg)`);
  cards[3].setAttribute("style", `transform:rotate(0deg)`);
});


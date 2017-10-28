cards = ['queen', 'queen', 'king', 'king'];
cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log('User flipped ' + cardsInPlay);

// check to see if cards in play is 2. cardsinplay.length - 1;

if (cardsInPlay.length == 2) {
	console.log("User has flipped two cards.");
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
} else if (cardsInPlay.length == 1) {
	console.log("User needs to flip another card.");
} else {
	console.log("User needs to flip two cards.")
}

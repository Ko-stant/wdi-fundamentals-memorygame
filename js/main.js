cards = ['queen', 'queen', 'king', 'king'];
cardsInPlay = [];


// console.log('User flipped ' + cardsInPlay);


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
}

// check to see if cards in play is 2. return if not, check for match if yes
var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length < 2) {
		return;
	} else {
		checkForMatch();
	}
}


flipCard(0);
flipCard(2);

cards = [
{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "../images/queen-of-hearts.png",
},
{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "../images/queen-of-diamonds.png",
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "../images/king-of-hearts.png",
},
{
	rank: "King",
	suit: "Diamonds",
	cardImage: "../images/king-of-diamonds.png",
}
];

cardsInPlay = [];


// check to see if the two cards select are the sanem .rank
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
}

// flip card when clicked via eventListener call checkForMatch when 2 cards are selected
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length == 2) {
		checkForMatch();
	}
}

// initialize board. add card backs to screen. listen for click
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', '../images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


createBoard();

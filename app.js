document.addEventListener('DOMContentLoaded', () => {
	// card option
	const cardArray = [
		{
			name: 'cake',
			img: 'images/cake.jpg',
		},
		{
			name: 'cake',
			img: 'images/cake.jpg',
		},
		{
			name: 'burger',
			img: 'images/burger.jpg',
		},
		{
			name: 'burger',
			img: 'images/burger.jpg',
		},
		{
			name: 'cheese',
			img: 'images/cheese.jpg',
		},
		{
			name: 'cheese',
			img: 'images/cheese.jpg',
		},
		{
			name: 'food',
			img: 'images/food.jpg',
		},
		{
			name: 'food',
			img: 'images/food.jpg',
		},
		{
			name: 'noodles',
			img: 'images/noodles.jpg',
		},
		{
			name: 'noodles',
			img: 'images/noodles.jpg',
		},
		{
			name: 'seafood',
			img: 'images/seafood.jpg',
		},
		{
			name: 'seafood',
			img: 'images/seafood.jpg',
		},
	];

	cardArray.sort(() => 0.5 - Math.random());
	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	var cardsChosen = [];
	var cardsChosenId = [];
	var cardsWon = [];

	// create your board
	function creatBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src', 'images/blank.jpg');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	// check for matches
	function checkForMatch() {
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if (cardsChosen[0] === cardsChosen[1]) {
			alert('You found a match');
			cards[optionOneId].setAttribute('src', 'images/white.jpg');
			cards[optionTwoId].setAttribute('src', 'images/white.jpg');
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.jpg');
			cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
			alert('Sorry, try again.');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2) {
			resultDisplay.textContent = 'Congratulation! You found them all';
		}
	}

	// flip your card
	function flipCard() {
		var cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}
	creatBoard();
});

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    get numericValue() {
        return this.value.numericValue;
    }
    get displayValue() {
        return this.value.displayValue;
    }
}
class Player {
    constructor(playerName) {
        this.playerName = playerName;
        this.points = 0;
        this.cards = [];
    }
    addCard(card) {
        this.cards.push(card);
    }
    get name() {
        return this.playerName;
    }
}
class Deck {
    constructor() {
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.cardValues = [{
            displayValue: 'Ace',
            numericValue: 14
        }, {
            displayValue: 'King',
            numericValue: 13
        }, {
            displayValue: 'Queen',
            numericValue: 12
        }, {
            displayValue: 'Jack',
            numericValue: 11
        }, {
            displayValue: '10',
            numericValue: 10
        }, {
            displayValue: '9',
            numericValue: 9
        }, {
            displayValue: '8',
            numericValue: 8
        }, {
            displayValue: '7',
            numericValue: 7
        }, {
            displayValue: '6',
            numericValue: 6
        }, {
            displayValue: '5',
            numericValue: 5
        }, {
            displayValue: '4',
            numericValue: 4
        }, {
            displayValue: '3',
            numericValue: 3
        }, {
            displayValue: '2',
            numericValue: 2
        }]
        this.cards = [];
    }
    buildDeck() {
        for (const suit of this.suits) {
            for (const cardValue of this.cardValues) {
                this.cards.push(new Card(suit, cardValue))
            }
        }
    }

    shuffleDeck(numberOfShuffles = 4) {
        const firstHalfOfDeck = this.cards.splice(0, 26);
        const secondHalfOfDeck = this.cards.splice(0, 26);

        while (firstHalfOfDeck.length > 0 || secondHalfOfDeck.length > 0) {
            const firstCardMix = Math.ceil(Math.random() * Math.min(4, firstHalfOfDeck.length));
            for (let i = 0; i < firstCardMix; i++) {
                const card = firstHalfOfDeck[0];
                firstHalfOfDeck.splice(0, 1);
                this.cards.push(card);
            }
            const secondCardMix = Math.ceil(Math.random() * Math.min(4, secondHalfOfDeck.length));
            for (let i = 0; i < secondCardMix; i++) {
                const card = secondHalfOfDeck[0];
                secondHalfOfDeck.splice(0, 1)
                this.cards.push(card);
            }
        }
        if (numberOfShuffles > 0) this.shuffleDeck(numberOfShuffles - 1);
    }
    getCard() {
        const r = this.cards[0];
        this.cards.splice(0, 1);
        return r;
    }
}

function findWinner(player1, player2) {
    if (player1 > player2) {
        return 'player1'
    } else if (player1 < player2) {
        return 'player2'
    } else {
        return 'tie'
    }
}

const newDeck = new Deck();
const player1 = new Player(prompt('What is the name of Player 1'));
const player2 = new Player(prompt('What is the name of Player 2'));

newDeck.buildDeck();
const numberOfShuffles = prompt('How many times would you like the deck shuffled')
if (isNaN(numberOfShuffles)) {
    newDeck.shuffleDeck()
} else {
    newDeck.shuffleDeck(numberOfShuffles);
}

while (newDeck.cards.length > 0) {
    player1.addCard(newDeck.getCard());
    player2.addCard(newDeck.getCard());
}

for (let i = 0; i < 26; i++) {
    const player1Card = player1.cards[i];
    const player2Card = player2.cards[i];

    const winner = findWinner(player1Card.numericValue, player2Card.numericValue);

    console.log(`${player1.name} played a(n) ${player1Card.displayValue} and ${player2.name} played a(n) ${player2Card.displayValue}.`);
    if (winner === 'player1') {
        console.log(`${player1.name} Wins!`);
        player1.points += 1;

    } else if (winner === 'player2') {
        console.log(`${player2.name} Wins!`);
        player2.points += 1;
    } else {
        console.log('The Players Tied');
    }
}
alert(`${player1.name} ended with ${player1.points} and ${player2.name} ended with ${player2.points}`)
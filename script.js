const deck = document.getElementById("deck");
const cards = [];

// Create the deck of cards
// Create the deck of cards
function createDeck() {
    const values = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for (let i = 0; i < 2; i++) { // Create two sets of cards
        for (let value of values) {
            const card = document.createElement("div");
            card.classList.add("card");
            card.classList.add("face-down"); // Add face-down class to cover the card
            card.innerHTML = `
                <div class="back"></div>
                <div class="front">${value}</div>
            `;
            card.dataset.value = value;
            card.dataset.matched = false;
            card.addEventListener("click", flipCard);
            cards.push(card);
            deck.appendChild(card);
        }
    }
    shuffleCards();
}

// Shuffle the cards
function shuffleCards() {
    cards.sort(() => Math.random() - 0.2);
    cards.forEach((card) => deck.appendChild(card));
}

// Flip a card
function flipCard() {
    if (this.classList.contains("face-up") || this.classList.contains("matched")) {
        return;
    }
    function flipCard() {
        if (this.classList.contains("face-up") || this.classList.contains("matched")) {
            return;
        }
        let isFlipping = false;
        if (isFlipping) return;
        isFlipping = true;
        this.classList.remove("face-down"); // Remove face-down class to reveal the card
        this.classList.add("face-up");
        // ...
        setTimeout(function() {
            isFlipping = false;
        }, 500);
    }
    this.classList.remove("face-down"); // Remove face-down class to reveal the card
    this.classList.add("face-up");

    const matchedCards = cards.filter((card) => card.dataset.matched === "true");
    if (matchedCards.length < 1) {
        this.dataset.matched = true;
        return;
    }

    const previousCard = matchedCards[0];
    if (previousCard.dataset.value === this.dataset.value) {
        this.classList.add("matched");
        previousCard.classList.add("matched");
        this.classList.remove("face-up"); // Remove face-up class after matching
        previousCard.classList.remove("face-up"); // Remove face-up class after matching
    } else {
        setTimeout(() => {
            this.classList.remove("face-up");
            this.classList.add("face-down"); // Add face-down class to cover the card again
            previousCard.classList.remove("face-up");
            previousCard.classList.add("face-down"); // Add face-down class to cover the card again
        }, 1000);
    }
}

// Start the game
createDeck();// Flip a card
// Fllet flippedCards = [];

// Flip a card
function flipCard() {
    if (this.classList.contains("face-up") || this.classList.contains("matched")) {
        return;
    }
    this.classList.remove("face-down"); // Remove face-down class to reveal the card
    this.classList.add("face-up"); // Add face-up class to reveal the card
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        const card1 = flippedCards[0];
        const card2 = flippedCards[1];

        if (card1.dataset.value === card2.dataset.value) {
            setTimeout(() => {
                card1.classList.add("matched"); // Add matched class
                card2.classList.add("matched"); // Add matched class
                flippedCards = [];
            }, 1000);
        } else {
            setTimeout(() => {
                card1.classList.remove("face-up");
                card1.classList.add("face-down"); // Add face-down class to cover the card again
                card2.classList.remove("face-up");
                card2.classList.add("face-down"); // Add face-down class to cover the card again
                flippedCards = [];
            }, 1000);
        }
    }
}
let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let flippedCards = [];

// Function to flip a card
function flipCard() {
    if (this.classList.contains("face-up") || this.classList.contains("matched")) {
        return;
    }
    this.classList.remove("face-down"); // Remove face-down class to reveal the card
    this.classList.add("face-up"); // Add face-up class to reveal the card
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        const card1 = flippedCards[0];
        const card2 = flippedCards[1];

        if (card1.dataset.value === card2.dataset.value) {
            setTimeout(() => {
                card1.classList.add("matched"); // Add matched class
                card2.classList.add("matched"); // Add matched class
                if (currentPlayer === 1) {
                    player1Score++;
                } else {
                    player2Score++;
                }
                flippedCards = [];
                checkForWin();
            }, 1000);
        } else {
            setTimeout(() => {
                card1.classList.remove("face-up");
                card1.classList.add("face-down"); // Add face-down class to cover the card again
                card2.classList.remove("face-up");
                card2.classList.add("face-down"); // Add face-down class to cover the card again
                flippedCards = [];
                switchPlayer();
            }, 1000);
        }
    }
}

/// Function to switch players
function switchPlayer() {
    console.log("Switching player...");
    if (currentPlayer === 1) {
        currentPlayer = 2;
        document.getElementById("turn-indicator").innerHTML = "Turn: Player 2";
        document.getElementById("turn-indicator").classList.remove("player1-turn");
        document.getElementById("turn-indicator").classList.add("player2-turn");
    } else {
        currentPlayer = 1;
        document.getElementById("turn-indicator").innerHTML = "Turn: Player 1";
        document.getElementById("turn-indicator").classList.remove("player2-turn");
        document.getElementById("turn-indicator").classList.add("player1-turn");
    }
}if (card1.dataset.value === card2.dataset.value) {
    setTimeout(() => {
        card1.classList.add("matched"); // Add matched class
        card2.classList.add("matched"); // Add matched class
        if (currentPlayer === 1) {
            console.log("Player 1 score before increment:", player1Score);
            player1Score++;
            console.log("Player 1 score after increment:", player1Score);
            document.getElementById("player1-score").innerHTML = `Player 1: ${player1Score}`;
            card1.style.backgroundColor = "#5B7493"; // Set background color to blue for player 1
            card2.style.backgroundColor = "#5B7493"; // Set background color to blue for player 1
        } else {
            console.log("Player 2 score before increment:", player2Score);
            player2Score++;
            console.log("Player 2 score after increment:", player2Score);
            document.getElementById("player2-score").innerHTML = `Player 2: ${player2Score}`;
            card1.style.backgroundColor = "#B98A82"; // Set background color to red for player 2
            card2.style.backgroundColor = "#B98A82"; // Set background color to red for player 2
        }
        flippedCards = [];
        checkForWin();
    }, 1000);
}

// Function to flip a card
function flipCard() {
    if (this.classList.contains("face-up") || this.classList.contains("matched")) {
        return;
    }
    this.classList.remove("face-down"); // Remove face-down class to reveal the card
    this.classList.add("face-up"); // Add face-up class to reveal the card
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        const card1 = flippedCards[0];
        const card2 = flippedCards[1];

        if (card1.dataset.value === card2.dataset.value) {
            setTimeout(() => {
                card1.classList.add("matched"); // Add matched class
                card2.classList.add("matched"); // Add matched class
                if (currentPlayer === 1) {
                    player1Score++;
                    document.getElementById("player1-score").innerHTML = `Player 1: ${player1Score}`;
                    card1.style.backgroundColor = "#5B7493"; // Set background color to blue for player 1
                    card2.style.backgroundColor = "#5B7493"; // Set background color to blue for player 1
                } else {
                    player2Score++;
                    document.getElementById("player2-score").innerHTML = `Player 2: ${player2Score}`;
                    card1.style.backgroundColor = "#B98A82"; // Set background color to red for player 2
                    card2.style.backgroundColor = "#B98A82"; // Set background color to red for player 2
                }
                flippedCards = [];
                checkForWin();
            }, 1000);
        } else {
            setTimeout(() => {
                card1.classList.remove("face-up");
                card1.classList.add("face-down"); // Add face-down class to cover the card again
                card2.classList.remove("face-up");
                card2.classList.add("face-down"); // Add face-down class to cover the card again
                flippedCards = [];
                switchPlayer(); // Call switchPlayer function immediately
            }, 1000);
        }
    }
}

// ...
// Function to check for win
function checkForWin() {
    const matchedCards = document.querySelectorAll(".matched");
    if (matchedCards.length === 20) {
        if (player1Score > player2Score) {
            alert("Player 1 wins!");
        } else if (player2Score > player1Score) {
            alert("Player 2 wins!");
        } else {
            alert("It's a tie!");
        }
    }
}

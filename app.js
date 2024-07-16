
var suits = ["hearts", "spades", "diamonds", "clubs"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var deck = new Array();

//make the deck

function getDeck() {

    var deck = new Array();

    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
            let card = {Value: values[j], Suit: suits[i]};
            deck.push(card);
        }
    }

    return deck;
}

/*
function doTheThing() {
    document.getElementById("deck").innerHTML = getDeck().toString();
}
*/


//shuffle the deck
function shuffle() {
    //1000 shuffles; switches places between two random places
    for (let i = 0; i < 1000; i++) {

        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
    
    renderDeck();
}


//draw card function
function draw() {

    let cardDrawn = deck.pop();


    let card = document.createElement("div");
        let value = document.createElement("div");
        let suit = document.createElement("div");

        card.className = "card";
        value.className = "value";
        suit.className = "suit " + cardDrawn.Suit;

        value.innerHTML = cardDrawn.Value;
        card.appendChild(value);
        card.appendChild(suit);

        document.getElementById("cardDrawn").appendChild(card);

        renderDeck();

}


//render the deck

function renderDeck() {

    document.getElementById("deck").innerHTML = "";

    for(let i = 0; i < deck.length; i++) {
        let card = document.createElement("div");
        let value = document.createElement("div");
        let suit = document.createElement("div");

        card.className = "card";
        value.className = "value";
        suit.className = "suit " + deck[i].Suit;

        value.innerHTML = deck[i].Value;
        card.appendChild(value);
        card.appendChild(suit);

        document.getElementById("deck").appendChild(card);
    }
}

function load() {
    deck = getDeck();
    shuffle();
    renderDeck();
}

window.onload = load;
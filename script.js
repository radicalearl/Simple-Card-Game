var gameStarted = false; 
const deckPlayerOne = [];
const deckPlayerTwo = [];
const handPlayerOne = [];
const handPlayerTwo = [];
const boardPlayerOne = [];
const boardPlayerTwo = [];
const selectAttacker = [];
//selectAttacker holds one card, the one attacking and stores it waiting for defend selection

//createCard function factory, and create createDecks that calls it on loop till deck is full.
function createCard(cardId, powerLevel){
  return {
    cardId: cardId,
    powerLevel: powerLevel,
    image: 'assets/' + cardId + '.jpg',
  }
}

function createDecks(arr,arr2){
  for (let i = 1; arr.length<10; i++){
    arr.push(createCard('card'+i, i));
  }
  for (let i = 1; arr2.length<10; i++){
    arr2.push(createCard('card'+(i+10), i));
  }
}

//display hand
function displayHand(hand) {
  if (hand.length == 1){
    document.getElementById('PlayerHand1').innerHTML = "<img src='" + hand[0].image + "'>";   
    document.getElementById('PlayerHand2').innerHTML = "";
    document.getElementById('PlayerHand3').innerHTML = "";
    document.getElementById('PlayerHand4').innerHTML = "";          
  }
  else if (hand.length == 2){
    document.getElementById('PlayerHand1').innerHTML = "<img src='" + hand[0].image + "'>";   
    document.getElementById('PlayerHand2').innerHTML = "<img src='" + hand[1].image + "'>";
    document.getElementById('PlayerHand3').innerHTML = "";
    document.getElementById('PlayerHand4').innerHTML = "";
  }
  else if (hand.length == 3){
    document.getElementById('PlayerHand1').innerHTML = "<img src='" + hand[0].image + "'>";   
    document.getElementById('PlayerHand2').innerHTML = "<img src='" + hand[1].image + "'>";
    document.getElementById('PlayerHand3').innerHTML = "<img src='" + hand[2].image + "'>";
    document.getElementById('PlayerHand4').innerHTML = "";
  }
  else if (hand.length == 4){
    document.getElementById('PlayerHand1').innerHTML = "<img src='" + hand[0].image + "'>";   
    document.getElementById('PlayerHand2').innerHTML = "<img src='" + hand[1].image + "'>";
    document.getElementById('PlayerHand3').innerHTML = "<img src='" + hand[2].image + "'>";
    document.getElementById('PlayerHand4').innerHTML = "<img src='" + hand[3].image + "'>";
  }
  else{
    document.getElementById('PlayerHand1').innerHTML = "";
    document.getElementById('PlayerHand2').innerHTML = "";
    document.getElementById('PlayerHand3').innerHTML = "";
    document.getElementById('PlayerHand4').innerHTML = "";
  }
}

//display opponent's hand (assets/cardback)
function displayHandOpp(hand) {
  if (hand.length == 1){
    document.getElementById('OppHand1').innerHTML = "<img src='assets/cardback.jpg'>";   
    document.getElementById('OppHand2').innerHTML = "";
    document.getElementById('OppHand3').innerHTML = "";
    document.getElementById('OppHand4').innerHTML = "";          
  }
  else if (hand.length == 2){
    document.getElementById('OppHand1').innerHTML = "<img src='assets/cardback.jpg'>";   
    document.getElementById('OppHand2').innerHTML = "<img src='assets/cardback.jpg'>";
    document.getElementById('OppHand3').innerHTML = "";
    document.getElementById('OppHand4').innerHTML = "";
  }
  else if (hand.length == 3){
    document.getElementById('OppHand1').innerHTML = "<img src='assets/cardback.jpg'>";   
    document.getElementById('OppHand2').innerHTML = "<img src='assets/cardback.jpg'>";
    document.getElementById('OppHand3').innerHTML = "<img src='assets/cardback.jpg'>";
    document.getElementById('OppHand4').innerHTML = "";
  }
  else if (hand.length == 4){
    document.getElementById('OppHand1').innerHTML = "<img src='assets/cardback.jpg'>";   
    document.getElementById('OppHand2').innerHTML = "<img src='assets/cardback.jpg'>";
    document.getElementById('OppHand3').innerHTML = "<img src='assets/cardback.jpg'>";
    document.getElementById('OppHand4').innerHTML = "<img src='assets/cardback.jpg'>";
  }
  else{
    document.getElementById('OppHand1').innerHTML = "";
    document.getElementById('OppHand2').innerHTML = "";
    document.getElementById('OppHand3').innerHTML = "";
    document.getElementById('OppHand4').innerHTML = "";
  }
}

//display board
function displayBoard(board){
  if (board.length == 1){
    document.getElementById('PlayerBoard1').innerHTML = "<img src='" + board[0].image + "'>";   
    document.getElementById('PlayerBoard2').innerHTML = "";
    document.getElementById('PlayerBoard3').innerHTML = "";
    document.getElementById('PlayerBoard4').innerHTML = "";
    document.getElementById('PlayerBoard5').innerHTML = "";           
  }
  else if (board.length == 2){
    document.getElementById('PlayerBoard1').innerHTML = "<img src='" + board[0].image + "'>";   
    document.getElementById('PlayerBoard2').innerHTML = "<img src='" + board[1].image + "'>";
    document.getElementById('PlayerBoard3').innerHTML = "";
    document.getElementById('PlayerBoard4').innerHTML = "";
    document.getElementById('PlayerBoard5').innerHTML = "";
  }
  else if (board.length == 3){
    document.getElementById('PlayerBoard1').innerHTML = "<img src='" + board[0].image + "'>";   
    document.getElementById('PlayerBoard2').innerHTML = "<img src='" + board[1].image + "'>";
    document.getElementById('PlayerBoard3').innerHTML = "<img src='" + board[2].image + "'>";
    document.getElementById('PlayerBoard4').innerHTML = "";
    document.getElementById('PlayerBoard5').innerHTML = "";
  }
  else if (board.length == 4){
    document.getElementById('PlayerBoard1').innerHTML = "<img src='" + board[0].image + "'>";   
    document.getElementById('PlayerBoard2').innerHTML = "<img src='" + board[1].image + "'>";
    document.getElementById('PlayerBoard3').innerHTML = "<img src='" + board[2].image + "'>";
    document.getElementById('PlayerBoard4').innerHTML = "<img src='" + board[3].image + "'>";
    document.getElementById('PlayerBoard5').innerHTML = "";
  }
  else if (board.length == 5){
    document.getElementById('PlayerBoard1').innerHTML = "<img src='" + board[0].image + "'>";   
    document.getElementById('PlayerBoard2').innerHTML = "<img src='" + board[1].image + "'>";
    document.getElementById('PlayerBoard3').innerHTML = "<img src='" + board[2].image + "'>";
    document.getElementById('PlayerBoard4').innerHTML = "<img src='" + board[3].image + "'>";
    document.getElementById('PlayerBoard5').innerHTML = "<img src='" + board[4].image + "'>";
  }
  else{
    document.getElementById('PlayerBoard1').innerHTML = "";
    document.getElementById('PlayerBoard2').innerHTML = "";
    document.getElementById('PlayerBoard3').innerHTML = "";
    document.getElementById('PlayerBoard4').innerHTML = "";
    document.getElementById('PlayerBoard5').innerHTML = "";
  } 
}

function displayBoardOpp(board){
  if (board.length == 1){
    document.getElementById('OppBoard1').innerHTML = "<img src='" + board[0].image + "'>";   
    document.getElementById('OppBoard2').innerHTML = "";
    document.getElementById('OppBoard3').innerHTML = "";
    document.getElementById('OppBoard4').innerHTML = "";
    document.getElementById('OppBoard5').innerHTML = "";           
  }
  else if (board.length == 2){
    document.getElementById('OppBoard1').innerHTML = "<img src='" + board[0].image + "'>";   
    document.getElementById('OppBoard2').innerHTML = "<img src='" + board[1].image + "'>";
    document.getElementById('OppBoard3').innerHTML = "";
    document.getElementById('OppBoard4').innerHTML = "";
    document.getElementById('OppBoard5').innerHTML = "";
  }
  else if (board.length == 3){
    document.getElementById('OppBoard1').innerHTML = "<img src='" + board[0].image + "'>";   
    document.getElementById('OppBoard2').innerHTML = "<img src='" + board[1].image + "'>";
    document.getElementById('OppBoard3').innerHTML = "<img src='" + board[2].image + "'>";
    document.getElementById('OppBoard4').innerHTML = "";
    document.getElementById('OppBoard5').innerHTML = "";
  }
  else if (board.length == 4){
    document.getElementById('OppBoard1').innerHTML = "<img src='" + board[0].image + "'>";   
    document.getElementById('OppBoard2').innerHTML = "<img src='" + board[1].image + "'>";
    document.getElementById('OppBoard3').innerHTML = "<img src='" + board[2].image + "'>";
    document.getElementById('OppBoard4').innerHTML = "<img src='" + board[3].image + "'>";
    document.getElementById('OppBoard5').innerHTML = "";
  }
  else if (board.length == 5){
    document.getElementById('OppBoard1').innerHTML = "<img src='" + board[0].image + "'>";   
    document.getElementById('OppBoard2').innerHTML = "<img src='" + board[1].image + "'>";
    document.getElementById('OppBoard3').innerHTML = "<img src='" + board[2].image + "'>";
    document.getElementById('OppBoard4').innerHTML = "<img src='" + board[3].image + "'>";
    document.getElementById('OppBoard5').innerHTML = "<img src='" + board[4].image + "'>";
  }
  else{
    document.getElementById('OppBoard1').innerHTML = "";
    document.getElementById('OppBoard2').innerHTML = "";
    document.getElementById('OppBoard3').innerHTML = "";
    document.getElementById('OppBoard4').innerHTML = "";
    document.getElementById('OppBoard5').innerHTML = "";
  } 
}




//deck shuffling
function deckArrayShuffle(deck) {
  let i = deck.length, j, temp;
  while(--i > 0){
    j = Math.floor(Math.random() * (i + 1));
    temp = deck[j];
    deck[j] = deck[i]
    deck[i] = temp;
  }
  return deck;
}

//card drawing
function drawCard (hand, deck){
    hand.push(...deck.splice(0,1)); // ... spreads array from splice
}



//play cards from hand to board
//seperate functions for each index in hand, not very efficient i dont think.
//condense play card? 
// if (hand?.[0]) might work, ?. optional chaining operator
function playCardOne (board, hand){
  if (board.length < 5){
    board.push(...hand.splice(0,1));
    displayHand(hand);
    displayBoard(board);
  }
  else {window.alert('Your board is full!')}
}

function playCardTwo (board, hand){
  if (board.length < 5){
    board.push(...hand.splice(1,1));
    displayHand(hand);
    displayBoard(board);
  }
  else {window.alert('Your board is full!')}
}

function playCardThree (board, hand){
  if (board.length < 5){
    board.push(...hand.splice(2,1));
    displayHand(hand);
    displayBoard(board);
  }
  else {window.alert('Your board is full!')}
}

function playCardFour (board, hand){
  if (board.length < 5){
    board.push(...hand.splice(3,1));
    displayHand(hand);
    displayBoard(board);
  }
  else {window.alert('Your board is full!')}
}

//opening phase
function phaseOpening (hand, deck, handOpp, deckOpp, boardOpp){
  if (gameStarted === true){
    passTurn(hand, deck, handOpp, deckOpp, boardOpp);
    }
  else {
    document.getElementById('StartButton').innerHTML = "Pass Turn";
    deckArrayShuffle(deck);
    for(let i = 0; i < 3; i++){
      drawCard (hand, deck);
    }
    deckArrayShuffle(deckOpp);
    for(let i = 0; i < 3; i++){
      drawCard (handOpp, deckOpp);
    }
    displayHand(hand);
    displayHandOpp(handOpp);
    gameStarted = true;
  }
}



//currently just draw and display player hand. 
//my first thought is this will be a full bot for the opponent, locks player till end of bot function that unlocks and "passes turn"
//for now just get this to delay, play opponent card hand [0], delay, draw player one card, 

const passTurn = (hand, deck, handOpp, deckOpp, boardOpp) => {
  setTimeout(drawCard(handOpp, deckOpp), 10000);
  setTimeout(playCardOpp(boardOpp, handOpp), 10000);
  displayHandOpp(handOpp);
  displayBoardOpp(boardOpp);
  if (hand.length < 4){
    drawCard(hand, deck);
  }
  else {window.alert('Your Hand Is Full!')}
  displayHand(hand);
}

//eventually make this not splice hand[0] but random index, or index with highest value. 
function playCardOpp (board, hand){
  if (board.length < 5){
    board.push(...hand.splice(0,1));
    }
};

//select attacker based on which button and array
function attackCardOne (board, selectAttacker){
  selectAttacker.splice(0, 1, board[0]);
}
function attackCardTwo (board, selectAttacker){
  selectAttacker.splice(0, 1, board[1]);
}
function attackCardThree (board, selectAttacker){
  selectAttacker.splice(0, 1, board[2]);
}
function attackCardFour (board, selectAttacker){
  selectAttacker.splice(0, 1, board[3]);
}
function attackCardFive (board, selectAttacker){
  selectAttacker.splice(0, 1, board[4]);
}

//select defender, functions attached to button onclicks that compare with selectAttacker
//then compares card in selectAttacker to cards on board, if equal does things
function defendCardOne (boardPlayerOne, boardPlayerTwo, selectAttacker){
  if (boardPlayerTwo[0].powerLevel < selectAttacker[0].powerLevel){
    boardPlayerTwo.splice(0,1)
  }
  else if (boardPlayerTwo[0].powerLevel === selectAttacker[0].powerLevel){
    boardPlayerTwo.splice(0,1);
    if (boardPlayerOne[0] === selectAttacker[0]){
      boardPlayerOne.splice(0,1)
    }
    else if(boardPlayerOne[1] === selectAttacker[0]){
      boardPlayerOne.splice(1,1)
    }
    else if(boardPlayerOne[2] === selectAttacker[0]){
      boardPlayerOne.splice(2,1)
    }
    else if(boardPlayerOne[3] === selectAttacker[0]){
      boardPlayerOne.splice(3,1)
    }
    else if(boardPlayerOne[4] === selectAttacker[0]){
      boardPlayerOne.splice(4,1)
    }
  }
  else if (boardPlayerTwo[0].powerLevel > selectAttacker[0].powerLevel) {
    if (boardPlayerOne[0] === selectAttacker[0]){
      boardPlayerOne.splice(0,1)
    }
    else if(boardPlayerOne[1] === selectAttacker[0]){
      boardPlayerOne.splice(1,1)
    }
    else if(boardPlayerOne[2] === selectAttacker[0]){
      boardPlayerOne.splice(2,1)
    }
    else if(boardPlayerOne[3] === selectAttacker[0]){
      boardPlayerOne.splice(3,1)
    }
    else if(boardPlayerOne[4] === selectAttacker[0]){
      boardPlayerOne.splice(4,1)
    }
  }
  displayBoard(boardPlayerOne);
  displayBoardOpp(boardPlayerTwo);
}
function defendCardTwo (boardPlayerOne, boardPlayerTwo, selectAttacker){
  if (boardPlayerTwo[1].powerLevel < selectAttacker[0].powerLevel){
    boardPlayerTwo.splice(1,1)
  }
  else if (boardPlayerTwo[1].powerLevel === selectAttacker[0].powerLevel){
    boardPlayerTwo.splice(1,1);
    if (boardPlayerOne[0] === selectAttacker[0]){
      boardPlayerOne.splice(0,1)
    }
    else if(boardPlayerOne[1] === selectAttacker[0]){
      boardPlayerOne.splice(1,1)
    }
    else if(boardPlayerOne[2] === selectAttacker[0]){
      boardPlayerOne.splice(2,1)
    }
    else if(boardPlayerOne[3] === selectAttacker[0]){
      boardPlayerOne.splice(3,1)
    }
    else if(boardPlayerOne[4] === selectAttacker[0]){
      boardPlayerOne.splice(4,1)
    }
  }
  else if (boardPlayerTwo[1].powerLevel > selectAttacker[0].powerLevel) {
    if (boardPlayerOne[0] === selectAttacker[0]){
      boardPlayerOne.splice(0,1)
    }
    else if(boardPlayerOne[1] === selectAttacker[0]){
      boardPlayerOne.splice(1,1)
    }
    else if(boardPlayerOne[2] === selectAttacker[0]){
      boardPlayerOne.splice(2,1)
    }
    else if(boardPlayerOne[3] === selectAttacker[0]){
      boardPlayerOne.splice(3,1)
    }
    else if(boardPlayerOne[4] === selectAttacker[0]){
      boardPlayerOne.splice(4,1)
    }
  }
  displayBoard(boardPlayerOne);
  displayBoardOpp(boardPlayerTwo);
}
function defendCardThree (boardPlayerOne, boardPlayerTwo, selectAttacker){
  if (boardPlayerTwo[2].powerLevel < selectAttacker[0].powerLevel){
    boardPlayerTwo.splice(2,1)
  }
  else if (boardPlayerTwo[2].powerLevel === selectAttacker[0].powerLevel){
    boardPlayerTwo.splice(2,1);
    if (boardPlayerOne[0] === selectAttacker[0]){
      boardPlayerOne.splice(0,1)
    }
    else if(boardPlayerOne[1] === selectAttacker[0]){
      boardPlayerOne.splice(1,1)
    }
    else if(boardPlayerOne[2] === selectAttacker[0]){
      boardPlayerOne.splice(2,1)
    }
    else if(boardPlayerOne[3] === selectAttacker[0]){
      boardPlayerOne.splice(3,1)
    }
    else if(boardPlayerOne[4] === selectAttacker[0]){
      boardPlayerOne.splice(4,1)
    }
  }
  else if (boardPlayerTwo[2].powerLevel > selectAttacker[0].powerLevel) {
    if (boardPlayerOne[0] === selectAttacker[0]){
      boardPlayerOne.splice(0,1)
    }
    else if(boardPlayerOne[1] === selectAttacker[0]){
      boardPlayerOne.splice(1,1)
    }
    else if(boardPlayerOne[2] === selectAttacker[0]){
      boardPlayerOne.splice(2,1)
    }
    else if(boardPlayerOne[3] === selectAttacker[0]){
      boardPlayerOne.splice(3,1)
    }
    else if(boardPlayerOne[4] === selectAttacker[0]){
      boardPlayerOne.splice(4,1)
    }
  }
  displayBoard(boardPlayerOne);
  displayBoardOpp(boardPlayerTwo);
}
function defendCardFour (boardPlayerOne, boardPlayerTwo, selectAttacker){
  if (boardPlayerTwo[3].powerLevel < selectAttacker[0].powerLevel){
    boardPlayerTwo.splice(3,1)
  }
  else if (boardPlayerTwo[3].powerLevel === selectAttacker[0].powerLevel){
    boardPlayerTwo.splice(3,1);
    if (boardPlayerOne[0] === selectAttacker[0]){
      boardPlayerOne.splice(0,1)
    }
    else if(boardPlayerOne[1] === selectAttacker[0]){
      boardPlayerOne.splice(1,1)
    }
    else if(boardPlayerOne[2] === selectAttacker[0]){
      boardPlayerOne.splice(2,1)
    }
    else if(boardPlayerOne[3] === selectAttacker[0]){
      boardPlayerOne.splice(3,1)
    }
    else if(boardPlayerOne[4] === selectAttacker[0]){
      boardPlayerOne.splice(4,1)
    }
  }
  else if (boardPlayerTwo[3].powerLevel > selectAttacker[0].powerLevel) {
    if (boardPlayerOne[0] === selectAttacker[0]){
      boardPlayerOne.splice(0,1)
    }
    else if(boardPlayerOne[1] === selectAttacker[0]){
      boardPlayerOne.splice(1,1)
    }
    else if(boardPlayerOne[2] === selectAttacker[0]){
      boardPlayerOne.splice(2,1)
    }
    else if(boardPlayerOne[3] === selectAttacker[0]){
      boardPlayerOne.splice(3,1)
    }
    else if(boardPlayerOne[4] === selectAttacker[0]){
      boardPlayerOne.splice(4,1)
    }
  }
  displayBoard(boardPlayerOne);
  displayBoardOpp(boardPlayerTwo);
}
function defendCardFive (boardPlayerOne, boardPlayerTwo, selectAttacker){
  if (boardPlayerTwo[4].powerLevel < selectAttacker[0].powerLevel){
    boardPlayerTwo.splice(4,1)
  }
  else if (boardPlayerTwo[4].powerLevel === selectAttacker[0].powerLevel){
    boardPlayerTwo.splice(4,1);
    if (boardPlayerOne[0] === selectAttacker[0]){
      boardPlayerOne.splice(0,1)
    }
    else if(boardPlayerOne[1] === selectAttacker[0]){
      boardPlayerOne.splice(1,1)
    }
    else if(boardPlayerOne[2] === selectAttacker[0]){
      boardPlayerOne.splice(2,1)
    }
    else if(boardPlayerOne[3] === selectAttacker[0]){
      boardPlayerOne.splice(3,1)
    }
    else if(boardPlayerOne[4] === selectAttacker[0]){
      boardPlayerOne.splice(4,1)
    }
  }
  else if (boardPlayerTwo[4].powerLevel > selectAttacker[0].powerLevel) {
    if (boardPlayerOne[0] === selectAttacker[0]){
      boardPlayerOne.splice(0,1)
    }
    else if(boardPlayerOne[1] === selectAttacker[0]){
      boardPlayerOne.splice(1,1)
    }
    else if(boardPlayerOne[2] === selectAttacker[0]){
      boardPlayerOne.splice(2,1)
    }
    else if(boardPlayerOne[3] === selectAttacker[0]){
      boardPlayerOne.splice(3,1)
    }
    else if(boardPlayerOne[4] === selectAttacker[0]){
      boardPlayerOne.splice(4,1)
    }
  }
  displayBoard(boardPlayerOne);
  displayBoardOpp(boardPlayerTwo);
}
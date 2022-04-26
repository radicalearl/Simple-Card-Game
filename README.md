# Trading Card Game
This is a simple in-browser card game vaguely inspired by other popular trading card games. The objective of this project is to learn JavaScript and make a shitty game.

The player will begin the game with three cards drawn from a shuffled deck of ten cards and play cards on a battlefield. There is a hand limit of 4 cards.

Cards will have attributes (attack, defense, etc).

Player wins when all opponents cards are destroyed.

Will or how will we controlling when players can play cards (ie mana (MTG) or turn counters (hearthstone))?


## Deck Shuffling
  - Fisher-Yates shuffling algorithm.
  - Arguments can be set to deckPlayerOne or deckPlayerTwo
  - Include the following lines in to check random value assignment is working.
  '
  console.log ("the value at index " + i +  " is " + deck[i])
  console.log ("the value of j is " + j)
  '

## Card Drawing
  - hand argument can be set to handPlayerOne, handPlayerTwo. deck argument deckPlayerOne or deckPlayerTwo.
  - hand gets pushed deck splice return.
  - hand size check, stops at 4 cards.
  - Button "Draw Card" calls function drawCard.

## Opening Phase
  - Package deck shuffle and a loop x3 of draw card into one phase to start game.
  - In HTML: button "Start Game" calls function phaseOpening.
  - "Start Game" button will change to "Pass Turn" button based on if gameStarted variable is true or false.

## Play Card
  - Pushes to board results of splice hand.
  - Checks board length. 

## Attack Card and Defend Card Select
  - selectAttacker function places selected attack card in temporary array.
  - selectDefender function checks defending card against 
  - Currently just checks Power Level of each card against each other. Might add attack and defense stats, as well as abilities such as indestructable. 

     if(((attackcard > defendcard && canattack) || deathtouch) && !indestructable){
    console.log("attack card wins!");
  }

  if(((attackcard < defendcard || !canattack) && !deathtouch) || indestructable){
    console.log("defend card wins!");
  }



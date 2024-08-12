# Card Drawing App

## **Part 1: Click to Draw**

This application allows users to interact with a deck of cards by drawing one card at a time. Here's a summary of its functionality:

- **Initial Setup**: On page load, the app calls the [Deck of Cards API](http://deckofcardsapi.com/) to create a new deck of cards.
- **Drawing Cards**: A button is provided to draw a new card from the deck each time it is clicked.
  - When a card is drawn, it is displayed on the page.
  - If the deck is empty and the button is clicked, an alert with the message “Error: no cards remaining!” is shown.
- **Styling**: The initial focus is on implementing the core functionality. CSS styling is not the priority; hence, the focus is on ensuring the React components work correctly.

## **Part 2: Shuffle The Deck**

Enhance the application by adding a shuffle feature:

- **Shuffle Button**: Introduce a button that, when clicked, shuffles the existing deck without requiring a page refresh.
- **API Call**: Make a call to the Deck of Cards API to shuffle the deck.
- **UI State**: While the shuffle operation is in progress, the shuffle button should be disabled to prevent multiple shuffle requests. 
- **Card Removal**: All cards currently displayed on the screen should be removed when the shuffle operation begins.

---

# draw-shuffle

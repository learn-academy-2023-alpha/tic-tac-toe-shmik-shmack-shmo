# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

- ✅As a user, I can see a three by three grid game board on the page.

  branch starting-grid
  -map over squares to produce nine boxes
  -wrap those boxes in a div
  -change the div in css to use flex and wrap those boxes
  -adjust size of boxes and div to fit page
  -center content on page

- As a user, I can click on a square to mark it.

✅ branch click-square
-set up onclick event for Square
-onclick will trigger a function called handleGamePlay that will place a symbol or emoji in the box clicked.
-link our function to our square.js file with a prop

- ✅As a user, my partner can click on a square after me and see their mark.

  ✅ branch partner-click
  -create a state for playerOne and set it to true
  -within our handleGamePlay function, create an if conditional that if playerOne is true place an x and else place an o.
  -then set the updatedSquares and swap the state of player one by using setPlayerOne(!playerOne) within our function

- As a user, I can't click on a square that has already been marked.

✅- branch cant-click

- if user clicks on an already used box value won't change.
- create a system that stop user from changing already used square.
  = We were able to add logic to our handleGamePlay that only allowed the symbol to be input if the box was empty.

- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.

  branch win-notice
  -add function that has a variable within that defines what every possible win condition is
  -after that win condition is met, alert the user in our handleGamePlay function
  -define a variable that holds the win condition

- As a user, I can't continue playing the game after the game has been won.
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)

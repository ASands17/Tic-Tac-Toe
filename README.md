# Tic-Tac-Toe

## Table of Contents
- [Introduction](#introduction)
- [Goals](#goals)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Features](#features)
- [Architecture](#architecture)
- [Reflection](#reflection)
- [Future Features](#future-features)
- [Contributors](#contributors)

### Introduction
This is a tic-tac-toe game for you to enjoy! Play tic-tac-toe and win, lose, or draw. Enjoy!

### Goals
The main goals of this project were to create a functional, interactive tic-tac-toe game using HTML, CSS, and JavaScript.

### Technologies
- JavaScript
- HTML
- CSS

### Set Up
1.  Clone this [repository](https://github.com/ASands17/Tic-Tac-Toe).
2. `cd` into the directory.
3. Run `open index.html`.

### Features
- Place a token by clicking on an empty grid on the tic-tac-toe board.
![Add tokens](./src/images/addTokens.jpeg)
- Once a game is won or once there is a draw, the tic-tac-toe board resets so a new game can be started.
![Reset board](./src/images/blankboard.jpeg)
- Player wins are tracked even when the game resets.
![Player wins](./src/images/tracknames.jpeg)

### Architecture
-This project consists of three JavaScript files, one for a player class, one for a game class, and one main JavaScript file.
-The data model lives in the game.js file primarily, and the main.js class controls the DOM. 
-This project has one HTML file and one CSS file.


### Reflection
- The most challenging part of this project was keeping the DOM and data model separate. I ran into some hiccups late in my project with this, and I have done my best to separate them to the best of my abilities. I intend to be more thoughtful about DOM versus data model in future projets so that I avoid the same problems.
- I enjoyed learning about CSS animations during this project. I look forward to learning more about them in future projects. Please note-- these CSS animations were added before I noticed other, more pressing bugs in my project. Next time I will leave CSS animations to the very last step in my project.

### Future Features
- Fix display so that only win/draw status displays, and not player's turn.
- Add local storage so that wins persist even when page is closed.
- Add animation for winning match.

### Contributors
- [Amanda Sands](https://github.com/irmakerdem)

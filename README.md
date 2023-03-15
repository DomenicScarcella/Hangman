# Hangman

Modified from a Web Dev Simplified project.  This is my first attempt at using TypeScript!

Made with Vite (also my first attempt at a Vite app!).

# To Launch App Locally

npm install

npm run dev

# Gameplay

Hangman can be played by typing on the keyboard or clicking the GUI keys in the app.

A random word from the stored array will be chosen for you to guess, and will appear as underscores.  Type or click a letter you think is in the word.

If your guess is in the word, then those letters will appear above the respective underscores.  The GUI keyboard will also turn green to show that you've successfully guessed that letter.

If your guess is NOT in the word, then the letter in the GUI keyboard will turn light red to show that you've already guessed that letter and that it is an incorrect guess.  A body part of a stick figure about to be hanged in the galley to the left will also appear each time you guess incorrectly.

If you make six (6) incorrect guesses before ucovering all the correct letters in the word, you lose the game (and the completed stick figure is hanged;  yes, it's kind-of gruesome, but it's an old game).  Otherwise, you win!

Simple instructions for generating a new word/game are on the screen:  Refresh tab/window or press Enter key for new word/game.

This is a one-page app that fits into a maximum width of 800 pixels and minimum width of 480 pixels.  It's horizontally riented with an aspect ration of 2:1.

Enjoy!  There are more than 800 words in the storage file.

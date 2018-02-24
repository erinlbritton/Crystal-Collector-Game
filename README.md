# Crystal-Collector-Game

This game is a simple application of jQuery and javascript with the following goals:

- [x] There will be four crystals displayed as buttons on the page.
- [x] The player will be shown a random number at the start of the game.
- [x] When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
- [x] Your game will hide this amount until the player clicks a crystal.
- [x] When they do click one, update the player's score counter.
- [x] The player wins if their total score matches the random number from the beginning of the game.
- [x] The player loses if their score goes above the random number.
- [x] The game restarts whenever the player wins or loses.
- [x] When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
- [x] The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

# Game Play

When a user initially loads the page, text is displayed indicating Link contains instructions. 
These instructions are loaded using tooltip(), which requires initializing in jQuery:

```javascript
// This initializes a tooltip to the right of class link
$(".link").tooltip({'placement': 'right'});

// The text of the tooltip is in the title
<img class="link" src="#" data-toggle="tooltip" title="This is the tooltip text">
```

The first time a crystal is clicked, the target number is displayed and each crystal is set to a random value for the duration of the round. Each click adds to the player's counter and displays a smaller crystal to visually record their clicks. 

Each round lasts until the player's counter matches or exceeds the target number. 
* If the counter matches the target number, the number of wins increases by 1 and a modal is triggered including trivia about Nintendo's Legend of Zelda. 
* If the counter exceeds the target number, the number of losses increases by 1 and a modal is triggered including a fairy to give the player another life to try again. 
* There are a total of 10 trivia elements, and any wins exceeding 10 returns a default congratulatory message of "Thank you for playing!" 

The first click following each win or loss resets the target value, the value of each crystal, and the player's counter.

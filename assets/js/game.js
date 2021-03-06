//Game States
//"WIN" - Player robot has defeated all enemy robots
//    *Fight all enemy robots
//    *Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

    console.log(enemyNames);
    console.log(enemyNames.length);
    console.log(enemyNames[0]);
    console.log(enemyNames[3]);

//fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        //ask user if they'd like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

        //if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + "has decided to skip this fight. Goodbye!");
                
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);

                break;

            }
        }

        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
                playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died! ");

            //awared player money for winning
            playerMoney = playerMoney + 20;

            //Leave while () loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. ");

        //check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died! ");
            //leave while () loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
        }
    }
};

//function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
    
        //if player is still alive, keep fighting
        if (playerHealth > 0) {
            //let user know what round they are in, remeber that arrays start at 0 so it needs to have 1 added to it
            window.alert(" Welcome to Robot Gladiators! Round  " + (i + 1));
        
             //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight
             enemyHealth = 50;

       
             //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                fight(pickedEnemyName);

    }

    // if player isn't alive, stop the game
    else {
        window.alert(" You have lost your robot in battle! Game Over! ");

        break;
    }
}
//after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

//function to end the entire game
var endGame = function() {
    window.alert(" The game has now ended. Let's see how you did! ");

    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert(" Great job, you've surived the game!  You know have a score of " + playerMoney +  " . ");
    }
    else {
        window.alert(" You've lost your robot in battle! ");
    }

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm(" Would you like to play again? ");

        if (playAgainConfirm) {
            //restart the game
            startGame();
        }
        else {
            window.alert(" Thank you for playing Robot Gladiators! Come back soon! ");
        }
};

//start the game when the page loads
startGame();



//check player stats and display in alert

//ask player if they want to play again and display.  

//if yes, restart fight loop -- call startGame() fumction to restart game

//or else, break --- endGame() function




//if player wins or skips, ask if they want to visit shop
//if no, fight
//if yes, present options, refill health, upgrade attack, leave store.  Display. --Call the shop() function

//if refill, subtract money from player and increase health
//if upgrade, stubtact money from player and increae attack power
//if leave, alert goodbye - break
//if invalid option, call shop() function again.



        
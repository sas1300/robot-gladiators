//Game States
//"WIN" - Player robot has defeated all enemy robots
//    *Fight all enemy robots
//    *Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less



//fight function (now with parameter for enemy's name)
var fight = function(enemy) {
    
    while (playerInfo.health > 0 && enemy.health > 0) {
        //ask user if they'd like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

        //if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
                
                //subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);

                break;

            }
        }

        //generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
                playerInfo.name + " attacked " + enemy.name + " . " + enemy.name + " now has " + enemy.health + " health remaining. "
        );

        //check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died! ");

            //awared player money for winning
            playerInfo.money = playerInfo.money + 20;

            //Leave while () loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left. ");
        }

        //generate random damage value based on enemies attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + " attacked " + playerInfo.name + " . " + playerInfo.name + " now has " + playerInfo.health + " health remaining. ");

        //check player's health
        if (playerInfo.health <=0) {
            window.alert(playerInfo.name + " has died! ");
            //leave while () loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left. ");
        }
    }
};

//function to start a new game
var startGame = function() {
    //reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    for (var i = 0; i < enemyInfo.length; i++) {
    
        //if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            //let user know what round they are in, remeber that arrays start at 0 so it needs to have 1 added to it
            window.alert(" Welcome to Robot Gladiators! Round  " + (i + 1));
        
             //pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            //reset enemy.health before starting new fight
             pickedEnemyObj.health = randomNumber(40, 60);

             
             

       
             //pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
                fight(pickedEnemyObj);

        // if player is still alive and we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            //ask if user wants to use the store before next round
            var storeConfirm = window.confirm( " The fight is over, visit the store before the next round? ")
            
            //if yes, take them to the store() function
            if (storeConfirm) {
                shop();
            }
        }

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
    if (playerInfo.health > 0) {
        window.alert(" Great job, you've surived the game!  You know have a score of " + playerInfo.money +  " . ");
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

var shop = function() {
    //ask player what they'd like to do 
    var shopOptionPrompt = window.prompt( " Would you like to REFILL your health, UPGRADE your attack or LEAVE the store?  Please enter one: 'REFILL', 'UPGRADE' OR 'LEAVE' to make a choice. ");
    
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            if (playerInfo.money >= 7) {
            window.alert(" Refilling player's health by 20 for 7 dollars. ");
            //increase health and decrease money
            playerInfo.health = playerInfo.health + 20;
            playerInfo.money = playerInfo.money - 7;
        }
            else {
                window.alert(" You don't have enough money! ");
            }
            break;

        case "UPGRADE":  //new case
        case "upgrade":
            if (playerInfo.money >= 7) { 
            window.alert(" Upgrading player's attack by 6 for 7 dollars. ");
            //increase attack and decrease money
            playerInfo.attack = playerInfo.attack + 6;
            playerInfo.money = playerInfo.money - 7;
        }
            else {
                window.alert(" You don't have enough money! ");
            }
            break;

        case "LEAVE":
        case "leave":
            window.alert(" Leaving the store. ");
            // do nothing, so function will end
            break;

        default: 
            window.alert(" You did not pick a valid option. Try again. ");
            //call shop() again to force player to pick a valid option
            shop();
            break;
    }

    };

//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};


var playerInfo = {
    name: window.prompt(" What is your robot's name? "),
    health: 100,
    attack: 10,
    money: 10
};

var enemyInfo = [
{
    name: "Roborto",
    attack: randomNumber(10, 14)
},
{
    name: "Amy Android",
    attack: randomNumber(10, 14)
},
{
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
}
];


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



        
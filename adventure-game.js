/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/


/*
  Dragon Slayer Adventure Game
  Objective:
  Use boolean expressions and conditional statements to drive outcomes.
*/

const readline = require('readline-sync');

// Inventory setup
const hasSword = true;
const hasShield = false;
const hasMap = true;
const hasTorch = true;

console.log("You are a brave warrior on a quest to slay the dragon terrorizing the kingdom.");
console.log("You carry a sword and a torch. You hear the dragon is hiding in the mountains, but there's also a nearby village where travelers gather.");
console.log("Your journey begins...");

// First decision
let pathChoice = readline.question("Do you go to the 'mountains' or the 'village'? ").toLowerCase();

if (pathChoice === "mountains") {
  console.log("\nYou hike into the dark mountains. The path is steep and cold.");
  
  if (!hasTorch) {
    console.log("It's too dark to see, and you slip into a ravine. Your quest ends here.");
  } else {
    console.log("You light your torch and press on until you reach the dragon's cave.");
    
    let fightChoice = readline.question("Do you 'fight' the dragon or try to 'sneak' around it? ").toLowerCase();
    
    if (fightChoice === "fight") {
      if (hasSword && hasShield) {
        console.log("With sword in hand and shield raised, you battle fiercely and slay the dragon! The kingdom is saved.");
      } else if (hasSword && !hasShield) {
        console.log("You fight bravely with your sword, but without a shield, the dragon's flames overwhelm you.");
      } else {
        console.log("You charge in unarmed... it doesn’t end well. The dragon remains undefeated.");
      }
    } else if (fightChoice === "sneak") {
      if (hasMap) {
        console.log("Using your map, you find a narrow tunnel and bypass the dragon’s lair, discovering its treasure hoard!");
      } else {
        console.log("You try to sneak, but stumble in the dark. The dragon awakens and devours you.");
      }
    } else {
      console.log("You hesitate too long. The dragon senses your presence and strikes.");
    }
  }

} else if (pathChoice === "village") {
  console.log("\nYou arrive at a quiet village.");
  
  let villageChoice = readline.question("Do you visit the 'blacksmith' or the 'tavern'? ").toLowerCase();

  if (villageChoice === "blacksmith") {
    console.log("The blacksmith upgrades your sword and gives you a shield. You now feel ready to face the dragon!");
  } else if (villageChoice === "tavern") {
    console.log("You hear rumors that the dragon guards a magical gem. A shady traveler offers you a map... for a price.");
    let buyMap = readline.question("Do you buy the map? (yes/no): ").toLowerCase();
    if (buyMap === "yes") {
      console.log("You buy the map and head off with new knowledge of the dragon’s lair.");
    } else {
      console.log("You decide not to trust strangers. You leave the tavern with only your doubts.");
    }
  } else {
    console.log("You wander the village aimlessly. The dragon still reigns in the mountains.");
  }

} else {
  console.log("You sit down in the forest, unsure what to do. Eventually, the quest moves on without you.");
}

console.log("\nYour journey ends here. Thank you for playing!");

// Code your solutions in this file
// Defines a function named writeCards that takes an array of names and an event name as arguments.
function writeCards(names, event) {
    // Initializes an empty array to hold the thank you messages.
    let thankYouCards = [];
    
    // Loops through each name in the names array.
    for (let i = 0; i < names.length; i++) {
      // Constructs a thank you message for the current name and event, and adds it to the thankYouCards array.
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    
    // Returns the array of thank you messages after the loop completes.
    return thankYouCards;
  }
  
  // Defines a function named countDown that takes a starting number as its argument.
function countDown(startingNumber) {
    // Loops as long as the startingNumber is greater than or equal to 0.
    while (startingNumber >= 0) {
      // Logs the current value of startingNumber to the console.
      console.log(startingNumber);
      // Decreases the value of startingNumber by 1, moving closer to the loop's exit condition.
      startingNumber--;
    }
    // Once the loop exits (when startingNumber is less than 0), the function ends.
  }
  
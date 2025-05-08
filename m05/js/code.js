var table = 0;                             // Unit of table
var operator = 'multiplication';           // Type of calculation
var i = 1;                                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>'; // Message

// Presents a dialogue box to the user asking themn to enter a value between 0 and 10
let userValue = prompt("Please provide a number between 0 and 10:", "");

// If the user enters nothing, a non-number, or a number greater than 10 it sets their entered value as 0
if (userValue === null || isNaN(userValue) || (userValue > 10)) { 
  userValue = "0";
} 

// This updates the the table variable to be the number the user selected, 0 - 10.
switch(userValue) { 
     case "0":
    table = 0;
    break; 
  case "1":
    table = 1;
    break;
  case "2":
    table = 2;
    break;
  case "3":
    table = 3;
    break;
  case "4":
    table = 4;
    break;	
  case "5":
    table = 5;
    break;
  case "6":
    table = 6;
    break;
  case "7":
    table = 7;
    break;
  case "8":
    table = 8;
    break;	
  case "9":
    table = 9;
    break;
  case "10":
    table = 10;
    break;
  default:
    table = 0;
}

// Perform the multiplication using a while loop to add a line to the msg with the updated calculation until there are 10 lines.
if (operator === 'multiplication') {
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Writes the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

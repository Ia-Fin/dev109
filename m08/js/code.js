// From https://javascriptbook.com/code/c03/multiple-objects.html per instructions.

// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}


// Create three hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 86, 10); //Created a new hotel using the template function declared above, specifying its name, rooms, and booked.


// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details3 = sunsetHotel.name + ' rooms: '; //Declaring the variable to list the hotel name (Sunset), followed by "rooms: ". 
    details3 += sunsetHotel.checkAvailability(); //Performs the method to checkAvailability before adding the result to the line after "Sunset Rooms: ".
var elHotel3 = document.getElementById('hotel3'); //retrieves the element hotel3 from the index.html page.
elHotel3.textContent = details3; //Injects the details3 variable into the hotel3 div.

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 21 and 26, but note the security issues on p228-231
*/

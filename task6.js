/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var ticketPrice = 800;
var isStudent = false;
var age = 40;

if (age < 10) {
  ticketPrice = "free";
  console.log(ticketPrice);
} else if (age > 10 && isStudent) {
  ticketPrice = ticketPrice / 2;
  console.log(ticketPrice);
} else if (age >= 60) {
  var newTicketPrice = 15 * (ticketPrice / 100);
  ticketPrice = ticketPrice - newTicketPrice;
  console.log(ticketPrice);
} else {
  console.log(ticketPrice);
}

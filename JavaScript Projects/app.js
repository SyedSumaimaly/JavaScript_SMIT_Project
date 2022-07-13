// Chap 01
// Question 1

alert("Hello User")

// Question 2

alert("Error! Please enter a valid password")

// Question 3

alert("Welcome to JS Land.... \n Happy Coding")

// Chap 02
// Question 1

var username = "Sumaim"

// Question 2

var myName = "Sumaim"

// Question 3

var msg = "Hello World"

alert(msg)

// Question 6

var email = "syedsumaimaly08@gmail.com"

alert('my email address is ' + email)

// Question 7

var book = "A smarter way to learn javascript"
alert("I am trying to learn a book " + book)

// Question 8

document.write("Yah! I can write HTML content through Javascript ")

// Chap 02
// Question 1

var age = 17
alert("I am " + age + " years old");

// Question 4

var name = prompt("Enter your name");
var product = prompt("Enter product name");
var quantity = prompt("Enter quantity of a product");

alert(name + " ordered " + quantity + " " + product + " on XYZ Clothing Store");

// Chapter 31-34 : DATE METHODS
// Q1

var date = new Date();
alert(date)

// Q2
var Months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
var Month = new Date().getMonth();
var CurrentMonth = Months[Month];
alert(CurrentMonth)

// Q10

var date = new Date("Jan 01, 2015");
var current = new Date();
var diff = current - date;
var secPassed = Math.round(diff / (1000 * 60));
alert("On Refernce date " + date + "," + secPassed + "  Passed since begning of 2015");

// Q11

var dateTime = new Date("Jan 01, 2015 23:08:16")
document.write("Current date" + dateTime)
var beforeHr = new Date("Jan 01, 2015 22:08:16").getTime();
dateTime.setTime(beforeHr)
document.write("1 hour ago, it was " + dateTime)

Q13

var user = prompt("Enter your year");
var userYear = new Date(user).getTime();
var currentYear = new Date().getTime();

var diff = currentYear - userYear;
var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

document.write("Your age is : " + age + "<br>");
document.write("Your birth year is : " + user)

// Q12

var currentDate = new Date();
alert("Current date" + currentDate)

var yearsBack = new Date("1992 Dec 05").getTime();

currentDate.setTime(yearsBack);

alert("100 years back it was" + currentDate);

// Q14

var Month = ["Jan", "Feb", "Marach", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"]

var customerName = prompt("Enter your Name : ");
var currentMonth = new Date().getMonth();
var numberOfUnit = +prompt("Enter number of Units :");
var ChargesOfUnit = +prompt("Enter Charges per unit :");
var LatePaymentSurcharge = +prompt("Enter Late Payment Surcharge :");
var netAmount = +prompt("Enter Net Amount Payable (within Due Date)");

var net_Amount_Payable = numberOfUnit * ChargesOfUnit;
var Gross_Amount_Payable = netAmount + LatePaymentSurcharge;




document.write(`<h1>K-Electric Bill <br> </h1>`)
document.write(`<p>Customer Name: <b>${customerName}</b> <br> </p>`)
document.write(`<p>Month: <b>${Month[currentMonth]}</b> <br></p>`)
document.write(`<p> Number of Units: <b>${numberOfUnit} </b><br></p>`)
document.write(`<p>Charges per unit: <b>${ChargesOfUnit}</b> <br> </p>`)

document.write(`<p>Net Amount Payable (within Due Date): <b>${net_Amount_Payable}</b> <br> </p>`)
document.write(`<p>Late Payment Surcharge: <b>${LatePaymentSurcharge}</b> <br> </h4>`)
document.write(`<p>Gross Amount Payable (after Due Date): <b>${Gross_Amount_Payable}</b> <br> </p>`)




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

document.write("Yah! I can write HTML content through Javascript " + "<br>")

// Chap 02
// Question 1

var age = 17
alert("I am " + age + " years old");

// Question 4

var name = prompt("Enter your name");
var product = prompt("Enter product name");
var quantity = prompt("Enter quantity of a product");

alert(name + " ordered " + quantity + " " + product + " on XYZ Clothing Store");

// Chapter 6-9

// Question 1 

var a = 10;
document.write("Result:");
document.write("<br>");
document.write("Value of a is: " + a);
document.write("<br>");
document.write("------------------------------------------")
document.write("<br><br>");


++a;
document.write("The value of ++a is : " + a);
document.write("<br>");
document.write("Now the value of a : " + a);
document.write("<br>");
document.write("<br>");


document.write("The value of a++ is : " + a);
document.write("<br>");
a++;
document.write("Now the value of a : " + a);
document.write("<br>");
document.write("<br>");




--a;
document.write("The value of --a is : " + a);
document.write("<br>");
document.write("Now the value of a : " + a);
document.write("<br>");
document.write("<br>");


document.write("The value of a-- is : " + a);
document.write("<br>");
a--;
document.write("Now the value of a : " + a);

// Question 3
var name = prompt("Enter your name : ");
document.write("Welcome " + name);

// Question 6

var nameSub1 = prompt("Enter a your subject name : ");
var subMarks1 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub2 = prompt("Enter a your subject name : ");
var subMarks2 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub3 = prompt("Enter a your subject name : ");
var subMarks3 = parseInt(prompt("Enter Obtained marks of this subject"));


var eachmarks = 100;
var eachpercentage1 = subMarks1 / eachmarks * 100;
var eachpercentage2 = subMarks2 / eachmarks * 100;
var eachpercentage3 = subMarks3 / eachmarks * 100;

var totalMarksStd = 300;
var obtainedMarks = subMarks1 + subMarks2 + subMarks3;
var Percentage = obtainedMarks / totalMarksStd * 100;
document.write(`<table>
<tr>  
    <th>Subjects</th>  
    <th>Total Marks</th>  
    <th>Obtained Marks</th> 
    <th>Percentage</th>  
</tr>  

<tr>
    <td>${nameSub1}</td>
    <td>${eachmarks}</td>
    <td>${subMarks1}</td>
    <td>${eachpercentage1}%</td>
</tr>

<tr>
<td>${nameSub2}</td>
<td>${eachmarks}</td>
<td>${subMarks2}</td>
<td>${eachpercentage2}%</td>
</tr>

<tr>
<td>${nameSub3}</td>
<td>${eachmarks}</td>
<td>${subMarks3}</td>
<td>${eachpercentage3}%</td>
</tr>  


<tr>
<td></td>
<td>${totalMarksStd}</td>
<td>${obtainedMarks}</td>
<td>${Percentage}%</td>
</tr>  
</table>`)

// Chapter 26-30 : MATH METHODS
// Question 1

var number = +prompt("Enter a positive integer : ")
document.write("Number:  " + number + "<br>")
document.write("round of value: " + Math.round(number) + "<br>");
document.write("floor value: " + Math.floor(number) + "<br>");
document.write("Ceil value: " + Math.ceil(number) + "<br>");

// Question 2

var number = +prompt("Enter a negative floating value : ")
document.write("Number:  " + number + "<br>");
document.write("round of value: " + Math.round(number) + "<br>");
document.write("floor value: " + Math.floor(number) + "<br>");
document.write("Ceil value: " + Math.ceil(number) + "<br>");

// Question 3

var number = prompt("Enter a number : ")
if (number < 0) {
    var absoluteNumber = number * -1;
    document.write("The Absolute value of " + number + "is" + absoluteNumber)
}
else {
    document.write("The Absolute value of " + number + " is " + number)
}

// Question 4

var randomvalues = + prompt("How many random value do you want to after roll the dice?")
for (i = 1; i < randomvalues; i++) {
    var randomeNumber = Math.floor((Math.random() * 6)) + 1;
    document.write("Randome dice value : " + randomeNumber + "<br>")
}

// Question 5

for (i = 1; i < 5; i++) {
    var HT = ["Heads", "Tails"]
    var randomNumber = Math.floor(Math.random() * HT.length);
    var word = HT[randomNumber];
    document.write(randomNumber + 1 + "<br>" + "Random coin value : " + word + "<br>")
}

// Question 6

for (i = 1; i < 5; i++) {
    var randomNumber = Math.floor(Math.random() * 100);
    document.write("Random number between 1 to 100 : " + randomNumber + "<br>")
}

// Question 7

userInput = prompt("Enter your weight in kilogram");

if (userInput.indexOf('.')) {

    document.write("The Weight of user is : " + parseFloat(userInput) + " Kilogram")
}
else {
    document.write("The Weight of user is : " + parseInt(userInput) + " Kilogram")
}

// Question 8

var randomNumber = Math.floor(Math.random() * 10) + 1;
var userInput = +prompt("Enter a guess number : ")
if (userInput === randomNumber) {
    alert("you Win")
}
else {
    alert("Try again !")
}

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


// Chapter 35-38 : Functions
// Q3

function sum() {
    var firstNum = +prompt("Enter you first Number: ")
    var secNum = +prompt("Enter you Last Number: ")

    var Numbers = firstNum + secNum;
    document.write("Sum of two numbers: " + parseInt(Numbers));
}

// Q4

function calculator(firstNum, secNum) {
    var firstNum = +prompt("Enter you first Number: ")
    var secNum = +prompt("Enter you Last Number: ");
    var operator = prompt("Enter your operator : (+,-,*,/,%")
    if (operator === "+") {

        result = firstNum + secNum;
        document.write("Sum of two number is : " + result)

    }
    else if (operator === "-") {

        result = firstNum - secNum;
        document.write("Subtraction of two number is : " + result)

    }
    else if (operator === "*") {

        result = firstNum * secNum;
        document.write("Multiplication of two number is : " + result)

    }
    else if (operator === "/") {

        result = firstNum / secNum;
        document.write("Divide of two number is : " + Math.round(result))

    }
    else if (operator === "%") {
        result = firstNum % secNum;
        document.write("Reminder of two number is : " + result)

    }
    else {
        document.write("Invalid result")
    }
}

// Q5

function squares(squareNum) {

    var squareNum = +prompt("Enter a number to find the sqaure of it  : ")

    var findSquare = squareNum * squareNum;

    document.write("Reminder of two number is : " + findSquare)

}

// Q9

function area(width, height) {

    var width = +prompt("Enter a width :");
    var height = +prompt("Enter a height :");

    A = width * height;

    document.write("(Argument as variable) Area of the Rectangle is " + A);

    document.write("<br>")

    var area = 45 * 54;
    document.write("(Argument as value) Area of the Rectangle is : " + area)
}

// Chapter 38-42 : Functions
// Q2

function LeapYear(year) {
    var year = prompt("Enter any Year");

    if (year % 4 === 0) {
        alert("It's a leap year")
    } else {
        alert("It's not a leap year")
    }
}

LeapYear(2000);

// Q3

function triangleLength() {
    var a = +prompt("Enter Length of a triangle side a")
    var b = +prompt("Enter Length of a triangle side b")
    var c = +prompt("Enter Length of a triangle side c")

    var S = a + b + c / 2
    var Area = S * S - a * S - b * S - c
    alert(Area)
}
triangleLength()
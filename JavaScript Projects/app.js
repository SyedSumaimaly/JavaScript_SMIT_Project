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

// chapter 9 - 11
// question 1 

var city = prompt("Enter a city");
if ((city === "Karachi" || city === "karachi")) {
    alert("Welcome to city of lights")
}
else {
    alert("Invalid Input")
}

// question 2 

var gender = prompt("Enter a gender Male or Female: ");
if ((gender === "male" || gender === "Male")) {
    alert("Good Morning Sir.")
}

else if ((gender === "female" || gender === "Female")) {
    alert("Good Morning Ma'am.")
}

else {
    alert("Invalid Gender");
}

// question 4

var fuel = +prompt("Enter a fuel remain in your car.");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}
else {
    alert("No need to refill the fuel in your car")
}

// question 7

var user = +prompt("Enter a number");
var guessNo = 2;
if (user === guessNo) {
    alert("Bingo! Correct answer")
}
else if (user === ++guessNo) {
    alert("Close enough to the correct answer")
}
else {
    alert("Sorry! Incorrect answer")
}

// question 8

var number = +prompt("Enter a number : ");
if (number % 3 == 0) {
    alert('divisible by 3')
}
else {
    alert("not divisible by 3")

}

// question 9

var number = +prompt("Enter a number : ");
if (number % 2 == 0) {
    alert('Even Number')
}
else {
    alert("Odd Number")
}

// question 10

var temp = prompt("Enter a temprature :");
if (temp >= 40) {
    alert("It is too hot outside.")
}
else if ((temp >= 30)) {
    alert("The Weather today is Normal")
}
else if ((temp >= 20)) {
    alert("Today’s Weather is cool.")
}
else {
    alert("OMG! Today’s weather is so Cool.")
}

// question 11

var num1 = +prompt("Enter a number 1")
var num2 = +prompt("Enter a number 2")
var opt = prompt("Enter an operator do you want to perfome (+,-,*,/,%");

if (opt === "+") {

    var result = num1 + num2
    alert(`Addition of ${num1} & ${num2} is ${result}`)
}
if (opt === "-") {

    var result = num1 - num2
    alert(`Subtraction of ${num1} & ${num2} is ${result}`)
}
if (opt === "*") {

    var result = num1 * num2
    alert(`Multiplication of ${num1} & ${num2} is ${result}`)
}
if (opt === "/") {

    var result = num1 + num2
    alert(`Division of ${num1} & ${num2} is ${result}`)
}
if (opt === "%") {

    var result = num1 + num2
    alert(`Reminder of ${num1} & ${num2} is ${result}`)
}
else {
    alert("Invalid Operator")
}

// Chapter 12 - 13
// Question 1

var userInput = prompt("Enter a Character i.e. : a-z,A-Z,0-9")
var asciiCode = userInput.charCodeAt(0);

// The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
// A-Z (65 to 90)
// a-z (97-122)
// 0-9 (48-57)

if (asciiCode >= 65 && asciiCode <= 90) {
    alert(userInput + " is a uppercase letter")
}
else if (asciiCode >= 97 && asciiCode <= 122) {
    alert(userInput + " is a Lowercase letter")
}
else if (asciiCode >= 48 && asciiCode <= 57) {
    alert(userInput + " is a number")
}
else {
    alert("Invalid Input")
}

// Question 2

var UserNumber1 = +prompt("Enter a number 1 ")
var UserNumber2 = +prompt("Enter a number 2 ")

if (UserNumber1 > UserNumber2) {
    alert(UserNumber1 + " is greater than " + UserNumber2)
}
else if (UserNumber2 > UserNumber1) {
    alert(UserNumber2 + " is greater than " + UserNumber1)
}
else if (UserNumber2 === UserNumber1) {
    alert(UserNumber2 + " is equal to  " + UserNumber1)
}
else {
    alert("Invalid Numbers")
}

// Question 3

var numberFinder = +prompt("Enter a number : ")

if (numberFinder > 0) {
    alert("Positive number")
}
else if (numberFinder < 0) {
    alert("Negative number")
}
else if (numberFinder === 0) {
    alert("Zero")
}
else {
    alert("Invalid Input")
}

// Question 4

var cha = prompt("Enter a character (a-z, A-z)");

if ((cha == "a") || (cha == "A") || (cha == "e") || (cha == "E") || (cha == "i") || (cha == "I") || (cha == "O") || (cha == "o") || (cha == "u") || (cha == "U")) {
    alert(true)
}
else {
    alert(false)
}

// Question 5

var actualPass = "hjhugKHAFohuf";
var InputPass = prompt("Enter a Password");
if (InputPass === actualPass) {
    alert("Correct! The password you entered matches the original password")
}
else if (InputPass == "") {
    alert("Please enter your password")
}
else {
    alert("Incorrect password")
}

// Question 6

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting)
}
else {
    greeting = "Good evening";
    alert(greeting)
}

// Chapter 14-16 ARRAY
// Question 3 

var stringArray = ["Karachi", "Lahore", "Islambad"];

// Question 4

var numberArray = [1, 2, 4, 5, 6, 66, 67];

// Question 6

var mixArray = ["Karachi", "Lahore", "Islambad", 1, 2, 4, 5, 6, 96, 87];

// Question 7

var qualificationsInPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]

document.write("<h1>Qualification</h1><br>")
document.write(`<h2>1) ${qualificationsInPak[0]}</h2>`)
document.write(`<h2>2) ${qualificationsInPak[1]}</h2>`)
document.write(`<h2>3) ${qualificationsInPak[2]}</h2>`)
document.write(`<h2>4) ${qualificationsInPak[3]}</h2>`)
document.write(`<h2>5) ${qualificationsInPak[4]}</h2>`)
document.write(`<h2>6) ${qualificationsInPak[5]}</h2>`)
document.write(`<h2>7) ${qualificationsInPak[6]}</h2>`)
document.write(`<h2>8) ${qualificationsInPak[7]}</h2>`)

// Question 10

var studentScores = [67, 87, 98, 97, 67, 80, 90];
document.write("Scores of Students :  " + studentScores);
document.write("<br>")
var sortedScores = studentScores.sort()
document.write("Ordered Scores of Students :  " + studentScores);

// Question 11

var citiesArray = ["karachi", "Queeta", "Peshawar", "lahore", "Islamabad"]
var selectedCities = citiesArray.slice(3, 5);
document.write("Cities List  : <br> " + citiesArray + "<br>");
document.write("Cities List  : <br> " + selectedCities);

// Question 12

var arr = ["This", "is", "my", "cat"];
document.write("<h1>Array: </h1>");
document.write(`<h1>${arr}</h1><br>`);

var joined = arr.join(" ");

document.write("<h1>String: </h1>");
document.write(`<h1>${joined}</h1><br>`);

// Question 15

var mobiles = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`
    <div class="dropDown">
    <select>
        <option>${mobiles[0]}</option>
        <option>${mobiles[1]}</option>
        <option>${mobiles[2]}</option>
        <option>${mobiles[3]}</option>
        <option>${mobiles[4]}</option>
        <option>${mobiles[5]}</option>
    </select>
    </div>
    
    <style>   
        .dropDown{
            width:60%;
            margin:20px auto;
            text-align:center;
        }
        select {
            border: none;
            width: 40%;
            padding: 10px;
            font-size: 18px;
            box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
            font-family: p-l ;
        }
    </style>
`)


// chapter 17 - 20
// Question 1

var mulArray = [[], [], []]
document.write("var mulArray = [ [ ],[ ],[ ] ]");

// Question 2

var mulArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
document.write(mulArray[0] + "<br>" + mulArray[1] + "<br>" + mulArray[2] + "<br>");

// Question 3

for (i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}

// Question 4

var userNo = +prompt("Enter a Number  for table : ")
var userSecondnumber = +prompt("Enter a Number  for table you end : ")
for (i = 1; i <= userSecondnumber; i++) {
    document.write(userNo + "  " + "X" + " " + i +"  " + "=" + "  " + userNo * i + "<br>")
}

// Question 5

fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}

for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index  " + i + " is " + fruits[i], "<br>")
}

// Question 7

items = ["cake", "apple pie", "cookie", "chips", "patties"];
userInput = prompt("Enter a snack :")
flag = false;
for (i = 0; i <= items.length; i++) {
    if (userInput == items[i]) {

        flag = true;

        userInput = items[i];
        index = i;
    }
}
if (flag == true) {
    document.write(userInput + " is available at index " + index + " in our bakery")
}
else {
    document.write(userInput + " is not available")
}

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
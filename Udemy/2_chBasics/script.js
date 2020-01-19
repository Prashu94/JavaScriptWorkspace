/*************************************************
* Variables and Data Types 
*/
/*
var firstName = 'Prashant';
var lastName = 'Bhat';
var age =  28;
var fullAge = true;

console.log(firstName);

console.log(fullAge);

var job;
console.log(job);

job ='Teacher';
console.log(job);
*/
/*
Data Types:
1. Number: Floating point numbers, for decimals and integers
2. String: Sequence of characcters, used for test
3. Boolean: Logival Datatype that an only be true or false
4. Undefined: Data type of a variable that does not hav a value yet
5. Null: Also means 'not present

JavaScript has a conspet of Dynamic Typing, hence it automatically assign the types to variables
*/

/****************************************************
* Variable mutation and type coercion
*/
/*
var firstName = 'Prashant';
var age = 25;
console.log(firstName+' '+ age);
//Type Coercion- JS automatically converts the number to a string

var job, isMarried;//undefined here
job = 'Teacher';
isMarried = false;

console.log(firstName+' is '+age+' year old'+' and is a '+job+'. '+'\n'+'Is he married? '+'\n'+ isMarried);

//Variable Mutation
age = 'twenty eight';
console.log(firstName+' is '+age+' year old'+' and is a '+job+'. '+'\n'+'Is he married? '+'\n'+ isMarried);

job = 'Analyst'
alert(firstName+' is '+age+' year old'+' and is a '+job+'. '+'\n'+'Is he married? '+'\n'+ isMarried);//The page keeps on loading unless we click on 'OK' button of the prompt

var lastName = prompt("What is his Last Name?")
console.log(firstName+' '+lastName );
*/

/*********************************************************
* Basic Operators
*/
/*
var year, yearPrashant, yearSwapnil;
now = 2020;
agePrashant = 25;
ageSwapnil = 26;


//Math Operators
yearPrashant = now - agePrashant;
yearSwapnil = now - ageSwapnil;
console.log(yearPrashant);
console.log(yearSwapnil);


console.log(now+2);
console.log(now/10);

//Logical Operators
var prashantOlder = agePrashant > ageSwapnil;
console.log(prashantOlder);

//typeOf Operator
console.log(typeof(prashantOlder));
console.log(typeof(agePrashant));
var x;
console.log(typeof(x));
*/

/*********************************************************
* Operator Precedence
Precedence reference link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/
/*
//Multiple 
var now = 2020;
var yearPrashant = 1994;
var fullAge = 18;
var isFullAge = now - yearPrashant >= fullAge;
console.log(isFullAge);

var agePrashant = now - yearPrashant;
var ageSwapnil = 35;
var average = (agePrashant + ageSwapnil) / 2;//Average Age
console.log(average);

//Multiple Assignments
var x,y;
x = y = (3+5)*4-6;
console.log(x,y);
*/
/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/
/*
var weightMark, weightJohn, heightMark, heightJohn;

weightMark = 78;
weightJohn = 92;

heightMark = 1.69;
heightJohn = 1.95;

bmiMark = weightMark/(Math.pow(heightMark,2));
bmiJohn = weightJohn/(Math.pow(heightJohn,2));

console.log(bmiMark, bmiJohn);
var isGreater = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than John\'s ? '+isGreater);
*/

/*****************************************************
* If / else statement
*/
/*
var firstName = "Prashant";
var civilStatus = "Single";

if(civilStatus == "Married" || civilStatus == "married"){
    console.log(firstName+' is Married !');
}else{
    console.log(firstName+' will hopefully be married soon!');
}

var isMarried = true
if (isMarried){
    console.log(firstName+' is Married !');
}else{
    console.log(firstName+' will hopefully be married soon!');
}

var weightMark, weightJohn, heightMark, heightJohn;

weightMark = 78;
weightJohn = 92;

heightMark = 1.69;
heightJohn = 1.95;

bmiMark = weightMark/(Math.pow(heightMark,2));
bmiJohn = weightJohn/(Math.pow(heightJohn,2));

console.log(bmiMark, bmiJohn);
if (bmiMark>bmiJohn){
  console.log('Mark\'s BMI higher than John\'s.');  
}else{
  console.log('John\'s BMI higher than Mark\'s.');  
}
//var isGreater = bmiMark > bmiJohn;

//console.log('Is Mark\'s BMI higher than John\'s ? '+isGreater);
*/

/**************************************************************
* Boolean Logic
*/
/*
var firstName = "Prashant";
var age = 35;

if(age<13){
    console.log(firstName +' is a boy.');
}
else if (age >=13 && age <20){
    console.log(firstName+' is a teenager.');
}else{
    console.log(firstName+' is a man.')
}
*/
/************************************************************
* Ternary Operator and Switch Statements
*/
/*
var firstName = "Prashant";
var age = 25;
age >=18 ? console.log(firstName+' drinks beer.'):console.log(firstName+' drinks juice.');
var drink = age >= 18? 'beer':'juice';
console.log(drink);

/*************************************************************
* Switch Statement
*/
/*
var job = "Driver";
switch (job){
    case "Teacher":
        console.log(firstName+ ' teaches us how to code.');
        break;
    case "Driver":
        console.log(firstName+' drives a Uber.');
        break;
    case "Designer":
        console.log(firstName+' designes beautiful Web Page');
        break;
    default:
        console.log(firstName+' do something.');
}
*/
/******************************************
* Truthy Value of Falsy Values
* Falsy Value: undefined, NaN, null, 0, ''
* Truth Value: NOT Falsy Values
*/
/*
var height;
height = 23;
if (height || height ===0){
    console.log("Variable is defined.");
}else{
    console.log("Varaible has not been defined.")
}

//Equality Operators
if (height == '23'){
    console.log('The == operator does type coercion.');//use === to avoid coercion
}
*/
/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/
/*
var scoreJohn = (89+120+103)/3;
var scoreMike = (116+94+123)/3;
var scoreMary = (97+134+105)/3;

console.log(scoreJohn, scoreMike, scoreMike);

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log('John\'s team wins with '+scoreJohn+' points.');
}else if(scoreMike > scoreJohn && scoreMike > scoreMary){
    console.log('Mike\'s team wins with '+scoreMike+' points.');
}else if (scoreMary > scoreJohn && scoreMary > scoreMike){
    console.log('Mary\'s team wins with '+scoreMary+' points.');
}else{
    console.log('There is a draw');
}

if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/
/************************************************************
* Functions
*/
/*
function calculateAge(birthYear){
    now = 2020;
    return now - birthYear;
}
var agePrashant = console.log(calculateAge(1994));
var ageEmily = console.log(calculateAge(1996));

function yearUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65-age;
    console.log(firstName+' retires in '+ retirement+' years.');
}

yearUntilRetirement(1990, 'Prashant')
*/

/**************************************************************
* Function Statements and Expressions
*/
//Function Declaration
//function whatDoYouDo(job, firstName){

//}
//function expression
/*
var whatDoYouDo= function(job,firstName){
    switch(job){
        case 'teacher':
            return firstName+' teches kids how to code.';
        case 'driver':
            return firstName+' drives Uber.';
        case 'designer':
            return firstName+' designs Web Page';
        default:
            return firstName+ ' do something else';
    }
}

console.log(whatDoYouDo('teacher', 'Prashant'));
*/
/****************************************************************
* Arrays
*/
//Initialize an Array
/*
var names = ['Prashant', 'Oliver', 'Barry', 'Felicity'];
var years = new Array(1990, 1969, 1948, 1994);
//0 based index is followed in JavaScript
console.log(names);//prints the output as (length of elements in array) [Array Elements]
console.log(names.length);

//Mutate Array Data
names[1] = 'Cisco';
console.log(names[1]);
names[5] = 'Catelyn';
console.log(names[5]);
    
//Differrent Data Types
var john = ['John', 'Diggle', 1990, 'Vigilante', true];
john.push('Red');//add elements to the end of the array
console.log(john);

john.unshift('Mr.') // add element to the beginning of the array
console.log(john);

john.pop();//pops the last element from the array
john.pop();
console.log(john);

john.shift();//pops the first element from the array
console.log(john);
console.log(john.indexOf(1990));//provides the index of the element in 1990 in array which is 2

var isDesigner = john.indexOf('designer') === -1? 'John is NOT a designer.':'John IS a designer.';
console.log(isDesigner);
*/

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/
/*
function tipCalculator(bill){
    var percentage;
    if (bill < 50){
        percentage = 0.20;
    }
    else if(bill>=50 && bill<200){
        percentage = 0.15;
    }
    else{
        percentage = 0.10;
    }
    return bill * percentage;
}
var bills = [124, 48, 268];
var tips = [];
for (var i = 0; i<bills.length; i+=1){
    tips.push(tipCalculator(bills[i]));
}
var final = [];
for (var i = 0; i<bills.length; i+=1){
    final.push(bills[i]+tips[i]);
}
console.log("Tips: "+tips);
console.log("Final Amount:"+final);
*/
/************************************************************************************
* Objects and Properties
*/
/*
//Initializing the objects
var john = {
    firstName: 'John',
    lastName: 'Diggle',
    birthYear: 1994,
    family:['Leyla', 'Connor'],//Declaring array properties in john object,
    job: 'Vigilante',
    isMarried: false
}
console.log(john);
//Dot Notation to retrive element from the object
console.log(john.firstName);
//Bracket method
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'Designer';
john['isMarried'] = true;
console.log(john);

//new object syntax
var oliver = new Object();
oliver.name = 'Oliver';
oliver.birthYear = 1989;
oliver['lastName'] = 'Queen';
console.log(oliver);
*/

/**************************************************************
* Objects and Methods
*/
//Only objects have methods
/*
var oliver = {
    firstName: 'Oliver',
    lastName: 'Queen',
    birthYear: 1989,
    family:['Felicity','Thea','Moira','Jonas','William','Mia'],
    job: 'Vigilante',
    isMarried: true,
    calcAge: function(){
        now = 2020;
        this.age = now - this.birthYear;
    }
}
oliver.calcAge();
console.log(oliver.age);
console.log(oliver);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/
/*
var john = {
    full_name: 'John Diggle',
    mass: 110,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass/(Math.pow(this.height,2));
        return this.bmi;
    }
}

var mark = {
    full_name: 'Mark Webber',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass/(Math.pow(this.height,2));
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()){
    console.log(john.full_name+' BMI is greater than '+mark.full_name);
}else if(john.calcBMI() < mark.calcBMI()){
    console.log(mark.full_name+' BMI is greater than '+john.full_name);
}
else{
    console.log('They have same BMI');
}
*/

/*****************************************************
* Loops and Iteration
*/
/*
//for loop
for (var i = 0 ; i<=20; i+=2){
    //console.log(i);
}

var john = ['John', 'Diggle', 1990, 'designer', false, 'blue'];
for (var i = 0 ; i<john.length; i++){
    //console.log(john[i]);
}

//while loop
var i = 0;
while(i < john.length){
    //console.log(john[i]);
    i+=1;
}

//continue and break statements
for (var i = 0 ; i< john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/
/*
john = {
    fullName: 'John Diggle',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalAmount = [];
        for (var i=0; i< this.bills.length; i++){
            //Determine the percentage based on the tipping values
            var percentage;
            if (this.bills[i]<50){
                percentage = 0.20;
            }else if (this.bills[i]>=50 && this.bills[i]<200){
                percentage = 0.15;
            }else{
                percentage = 0.10;
            }
            
            //Add results to corresponding arrays
            this.tips[i] = this.bills[i] * percentage;
            this.finalAmount[i] = this.bills[i] + this.tips[i];
        }
    }
}

mark = {
    fullName: 'Mark Webber',
    bills: [77,375,110,45],
    calcTips: function(){
        this.tips = [];
        this.finalAmount = [];
        for (var i=0; i< this.bills.length; i++){
            //Determine the percentage based on the tipping values
            var percentage;
            if (this.bills[i]<100){
                percentage = 0.20;
            }else if (this.bills[i]>=100 && this.bills[i]<300){
                percentage = 0.10;
            }else{
                percentage = 0.25;
            }
            
            //Add results to corresponding arrays
            this.tips[i] = this.bills[i] * percentage;
            this.finalAmount[i] = this.bills[i] + this.tips[i];
        }
    }
}

function calcAverages(tips){
    var sum = 0;
    for (var i=0 ; i<tips.length; i++){
        sum+=tips[i];
    }
    return sum/tips.length;
}

//Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverages(john.tips);
mark.average = calcAverages(mark.tips);
console.log(john, mark);

if(john.average > mark.average){
    console.log(john.fullName+' is greater than '+mark.fullName);
}else if(john.tips < mark.tips){
    console.log(mark.fullName+' is greater than '+john.fullName);
}else{
    console.log("The Tips Paid by John and Mark is the same.");
}
*/
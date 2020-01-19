/************************************
* Defining Fucntions in Javascript
*/
/*
const square = function(n){
    return n*n;
}
console.log(square(5));
*/
/************************************
* Function to return the raised power of a number
*/
/*
const power = function(base , exponent){
    let result = 1;
    for (let count = 0; count<exponent; count++){
        result*=base;
    }
    return result;
}

console.log(power(2,10));
*/
/*************************************
* Nested Scope
*/
/*
const hummus = function(factor){
    const ingredient =  function(amount, unit, name){
        let ingredientAmouont = amount * factor;
        if (ingredientAmouont >1){
            unit+="s";
        }
        console.log(`${ingredientAmouont} ${unit} ${name}`);
    }
    ingredient(1, "can","chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
}

console.log(hummus(5));
*/
/***************************************
* Arrow Functions
*/
/*
const power = (base, exponent) => {
    let result =1 ;
    for (let count = 0; count<exponent; count++){
        result*=base;
    }
    return result;
}
console.log(power(2,2));
*/
/****************************************
*  Closure
*/
/*
function wrapValue(n){
    let local = n;
    
    return() => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

//console.log(wrap1());
//console.log(wrap2());

function multiplier(factor){
    return number => number * factor;
}
let twice = multiplier(2);
//console.log(twice(5));

function printFarmInventory(cows, chickens){
    let cowString = String(cows);
    while(cowString.length < 3){
        cowString = "0"+cowString;
    }
    console.log(`${cowString} Cows`);
    
    let chickenString = String(chickens);
    while(chickenString.length < 3){
        chickenString = "0"+chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

//printFarmInventory(5,7);
*/

/***************************************************************************************
* Exercise -1 Write a function min that takes 2 atguments and returns their minimum
*/
function min(a, b){
    if (a<b) return a;
    else return b;
}

//console.log(min(10,8));

/****************************************************************************************
* Exercise -2 Write a program with a recursive function isEven that takes a number input
* and return a boolean
*/
function isEven(n){
    
    if(n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n-2);
}

//console.log(isEven(6));

/*****************************************************************************************
* Exercise -3 Write a program to count the numbers of 'B' in a string
*/

function countChar(string, ch){
    let counted = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] === ch){
            counted+=1;
        }
    }
    return counted;
}
function countBs(string){
    return countChar(string,"B");
}

//console.log(countBs("BBC"));
//console.log(countChar("Prashant", "P"));


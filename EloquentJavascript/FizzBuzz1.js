/**********************************************************
* Write a program that uses console.log to print the numerb from 1 to 100 with two exceptions.
For number divisible by 3, print "fizz" instead of the number and for numbers divisible by 5 print "Buzz"
Modify the above further to print "FizzBuzz" for numbers divisible by both 5&3
*/


for (var i = 0 ; i<=100; i+=1){
    if (i % 3==0 && i % 5 ==0){
        console.log("FizzBuzz");
    }
    else{
        console.log(i)
    }
}
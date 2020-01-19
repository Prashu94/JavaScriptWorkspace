//Create a range function to print the range starting from start to end with the step passed
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

//function to sum the array range above
function sum(array){

    var total = 0;
    
    for (var i = 0; i<array.length; i++){
        total+=array[i];
    }
    
    return total;
    
}

//function to calculate the factorial of a number
function factorial(n){
    if (n==0) return 1;
    
    else return factorial(n-1)*n;
}
/*Test Blocks*/

//Test the range method
console.log(range(1,10));

//Test the sum method
console.log(sum(range(1,10)));

//Test the factorial function
console.log(factorial(5));
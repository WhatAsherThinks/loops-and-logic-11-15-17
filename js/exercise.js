// log every number from 0 to 100, including 0 and 100, but if the number is evenly divisiable by 3 log 'fizz' instead, if the number is evenly divisible by 5 log 'buzz', if the number is evenly divisible by 3 and 5 log 'fizzbuzz'. if it is not evenly divisible by either 3 or 5 log the number.

for (var x = 0; x <= 101; x++) {
  if (x === 0) {
    console.log(0);
  }else if ( (x % 3) === 0 && (x % 5) === 0) {
    console.log('FizzBuzz');
  } else if ( (x % 3) === 0) {
    console.log('Fizz');
  } else if ( (x % 5) === 0) {
    console.log('Buzz');
  } else {
    console.log( x );
  }
}

var y = 0;
while (y <= 100) {
  if (y === 0) {
    console.log(y);
  } else if (y % 3 ===0 && y % 5 === 0) {
    console.log('FizzBuzz');
  } else if (y % 3 === 0) {
    console.log('Fizz');
  }else if (y % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(y);
  }
  y++;
}

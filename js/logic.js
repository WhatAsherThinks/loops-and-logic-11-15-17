var myNum = 3;

//if statements test to see if the expression nested within the () evaluated to true, if it does it preforms the code nested within the following {} if it does not no action is taken by default
if (myNum > 5) {
  //console.log(myNum + " is greater than 5");
}

//else statements are not required though tehey can be set to perform some default action if the if statement evaluates to false
if (myNum === 5) {
//  console.log('myNum is currently set to 5');
} else {
  //console.log('myNum is currently not 5');
}

// else if statements can be added to if statements to perform additional logic tests if the previouse if or else is atetements evaluate to false
if (myNum > 0) {
  //console.log('myNum is greater than 0');
} else if (myNum < 0) {
  //console.log('myNum is less than 0');
} else {
  //console.log('myNum is either 0 or is not a number');
}

if (1) {
  console.log('1 is truthy');
}

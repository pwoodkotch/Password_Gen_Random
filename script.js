// Assignment code here


var upperCase= 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
//upperCase variable set equal to uppercase letters string

var lowerCase= 'abcdefghijklmnopqrstuvwxyz';
//lowerCase variable set equal to lowercase letters string

var special= '`~!@#$%^&*()-_=+[]{};:/.,><';
//special variable set equal to special characters string

var numbers= '0123456789';
//numbers variable set equal to string of numbers

var passLength= 0;
//So variable passLength is stored as a number we set it equal to zero

var newPass='';
//Variable newPass set equal to empty string to allow changing of value

var final='';
//Variable newPass set equal to empty string to allow changing of value

function generatePassword() {
  //creates a function to generate a random password


var toU= window.confirm('Would you like uppercase letters? Ok=yes, Cancel=no');

var toL= window.confirm('Would you like lowercase letters? Ok=yes, Cancel=no');

var toS= window.confirm('Would you like special characters? Ok=yes, Cancel=no');

var toN= window.confirm('Would you like numbers included? Ok=yes, Cancel=no');

passLength= window.prompt('How long would you like your password to be?');
//Lines 21-29 prompt the user for input to gain password acceptance criteria

if (toU === true) {
  
  newPass = newPass + upperCase;
  console.log(newPass);
  
}//Lines 32-37 adds uppercase letters string variable to the characterset that the password will be generated from

if (toL === true){
  
  newPass = newPass + lowerCase;
  console.log(newPass);
  
}//Lines 39-44 adds lowercase letters string variable to the characterset that the password will be generated from}

if (toS === true) {
  
  newPass = newPass + special;
  console.log(newPass);
  
  
}//Lines 46-52 adds special string variable to the characterset that the password will be generated from

if (toN === true) {
  
  newPass = newPass + numbers;
  console.log(newPass);
  
}//Lines 54-59 adds numbers string variable to the characterset that the password will be generated from    

if (passLength >= 8 && passLength <= 128) {
  //if passLength is greater than or equal to 8 and less than or equal to 128 run the following code
  
  for (var n = 0; n < passLength; n++) {
    //for variable n equaling zero run the function and add one to variable n as long as n is less than passLength
  
  
  
  var i =newPass.charAt(Math.floor(Math.random() * newPass.length));
  //Variable newPass is created so we can store a random character in the string newPass in a variable
  
  final = final + i;
  /*The final password result, which is initially set to an empty string,
  is now given a random character that is generated by the math equation in
  line 77*/
}

}else{
  /*Gives an alternative so if passLength is not in the required range the user prompted with a message
   stating they must refresh and input a value in the required range*/ 
   
  alert('Please refresh and pick a number greater than or equal to 8 and less than or equal to 128!');
}
return final;
//returns the value of variable final for the user
}




  
  






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

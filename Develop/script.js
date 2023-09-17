// Assignment code here


var upperCase= 'ABCDEFGHIJKLMOPQRSTUVWXYZ';

var lowerCase= 'abcdefghijklmnopqrstuvwxyz';

var special= '`~!@#$%^&*()-_=+[]{};:/.,><';

var numbers= '0123456789';

var passLength= 0;

var newPass='';

var final='';

function generatePassword() {


var toU= window.confirm('Would you like uppercase letters? Ok=yes, Cancel=no');

var toL= window.confirm('Would you like lowercase letters? Ok=yes, Cancel=no');

var toS= window.confirm('Would you like special characters? Ok=yes, Cancel=no');

var toN= window.confirm('Would you like numbers included? Ok=yes, Cancel=no');

passLength= window.prompt('How long would you like your password to be?');

if (toU === true) {
  
  newPass = newPass + upperCase;
  console.log(newPass);
  
}

if (toL === true){
  
  newPass = newPass + lowerCase;
  console.log(newPass);
  
}

if (toS === true) {
  
  newPass = newPass + special;
  console.log(newPass);
  
  
}

if (toN === true) {
  
  newPass = newPass + numbers;
  console.log(newPass);
  
}    

if (passLength >= 8 && passLength <= 128) {
  
  for (var n = 0; n < passLength; n++) {
  
  
  
  var i =newPass.charAt(Math.floor(Math.random() * newPass.length));
  
  final = final + i;
}

}else{ 
  alert('Please refresh and pick a number greater than or equal to 8 and less than or equal to 128!');
}
return final;
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

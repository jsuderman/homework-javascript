// Assignment Code
var generateBtn = document.querySelector("#generate");


// var random numbers
// var cap letters
// var lower case letters
// var special charaters
// user clicks gererate button
  //prompt for amount 8- 128 
    //if > 8 and < 128 - alert that it must be 8-128 and re enter 
      // store answer

  //baloon - confirm spiecal characters
    //if yes store, if no store
  //baloon - confirm lower case
    //if yes store, if no store
  //baloon - confirm cap letters
    //if yes store, if no store
  //baloon - confirm numbers
    //if yes store, if no store
  




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePasswod(){

function picker(x) {

return (math.floor(Math.random() * x));

}
  
var numbers = ["0,1,2,3,4,5,6,7,8,9"]
var cap = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S,", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var all = numbers + cap + lower + special;

var password = ''; {

  var lengthPass = prompt("Choose length between 8 - 128 characters");
    if(lengthPass <8 || lengthPass >128){

      alert("Password length must be between 8-128 characters");
      var lengthPass = prompt("Choose length between 8 - 128 characters");
    }

  var low = confirm(" do you want lower case letters in password?")
  console.log(low);

  var upper = confirm(" do you want upper case letters in password?")
  console.log(upper);
  
  var sc = confirm(" do you want special charcters in password?")
  console.log(sc);
  
  
for (i=0; i<lengthPass; i++) {

  )

}

return password;
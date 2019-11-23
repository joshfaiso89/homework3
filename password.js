var textarea = document.getElementById("password");
var disabledBtn = document.getElementById("copy");
var generateBtn = document.getElementById("generate");

function removeClass() {
  disabledBtn.removeAttribute("disabled");
  if (disabledBtn.classList.contains('disabled')){
      disabledBtn.classList.remove('disabled');
  }
}

generateBtn.addEventListener('click', function(){


  textarea.value='';

  var passwordLength = prompt("How many characters?");
  let allCharacters = '';
 
  // keeping the password over 7 charachters
if (passwordLength < 8) {
  alert("Password must be at least 8 characters long");
}
else if (passwordLength > 128) {
  alert("Password must be less than 128 characters");
}
// adding numbers into the all
else if (prompt('Do you want numbers')) {
  let numericCharacters = '0123456789'
  allCharacters += numericCharacters;
  
}
if (prompt('Do you want upper case letters')) {
  allCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 
}
 if (prompt('Do you want lower case letters')) {
  allCharacters += "abcdefghijklmnopqrstuvwxyz";
  
}
if (prompt('Do you want special characters')){
  allCharacters += '!@#$%^&*()';
  
}

//function generate() {
  //possible values

  

  //for loop
  for (let i = 8; i < passwordLength; i++) {
    password +=
      allCharacters.charAt(Math.floor(Math.random() * Math.floor(allCharacters.length - 1)));
    console.log(password);
  }

  textarea.value += password;

  removeClass();

  disabledBtn.addEventListener('click', function(){
    textarea.select();

    document.execCommand('copy');

    alert('copied to clipboard');

  });

})

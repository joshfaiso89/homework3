var textarea = document.getElementById("password");
var disabledBtn = document.getElementById("copy");
var generateBtn = document.getElementById("generate");

function removeClass() {
     disabledBtn.removeAttribute("disabled");
   if (disabledBtn.classList.contains("disabled")) {
     disabledBtn.classList.remove("disabled");
   }
 }
//establishing an eventlistner for the button
generateBtn.addEventListener("click", function() {
  textarea.value = "";

  var passwordLength = prompt("How many characters?");
  var allCharacters = "";
  var password = "";

  // keeping the password over 7 charachters
  if (passwordLength < 8) {
    alert("Password must be at least 8 characters long");
  } else if (passwordLength > 128) {
    alert("Password must be less than 128 characters");
  }
  // adding numbers into the all
  if (confirm("Do you want numbers")) {
    allCharacters += "0123456789";
  }
  //adding uppercase letters
  if (confirm("Do you want upper case letters")) {
    allCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  //adding lower case letters
  if (confirm("Do you want lower case letters")) {
    allCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  //adding special charachters
  if (confirm("Do you want special characters")) {
    allCharacters += "!@#$%^&*()";
  }

  //for loop
  for (var i = 0; i < passwordLength; i++) {
    password += allCharacters.charAt(Math.floor(Math.random()* allCharacters.length));
  }
  textarea.value = password;

  removeClass();

  disabledBtn.addEventListener("click", function() {
    textarea.select();

    document.execCommand("copy");

    alert("copied to clipboard");
  });
});

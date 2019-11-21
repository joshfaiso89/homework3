function generate() {
  //set password length/complexity
  let complexity = document.getElementById("slider").nodeValue;

  //possible values
  let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let password = "";

  //for loop
  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //add password to container
  document.getElementById("display").value = password;
}

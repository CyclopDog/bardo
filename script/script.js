window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var errorMsg = document.getElementById('errorMsg');

const nameField = document.getElementById('nameField');
const resetButton = document.getElementById('reset-button');


resetButton.addEventListener('click', clearErrorMsg);

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function validateForm() {
    var nameCheck = document.forms["contatoform"]["name"].value;
    var mailCheck = document.forms["contatoform"]["mail"].value;
    var commentCheck = document.forms["contatoform"]["comment"].value;
    if (nameCheck == "" || mailCheck == "" || commentCheck == "") {
      errorMsg.textContent = "Por favor, preencha todos os campos.";
      return false;
    } else {
        errorMsg.textContent = "";
        return true;
    }
  }

function clearErrorMsg() {
    errorMsg.textContent = "";
    nameField.focus();
}
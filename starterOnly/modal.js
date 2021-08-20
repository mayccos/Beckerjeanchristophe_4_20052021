function editNav() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topNav") {
    x.className += "responsive";
  } else {
    x.className = "topNav";
  }
}

/* DOM Elements*/
const modalBg = document.querySelector(".bgRound");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const form = document.getElementById("reserve");
const confirmationMsg = document.getElementById("confirmationMsg");
const closeBtnConfirm = document.getElementById("closeConfirmation");
const heroSection = document.querySelector(".hero-section");

// variable media query to mobile
let mediaQueryMobile = window.matchMedia("(max-width: 540px)");


/*EVENTS below*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalBg.style.display = "block";
  // if mobile screen, heroSection doesn't appear
  if(mediaQueryMobile.matches){
    heroSection.style.display = "none";
  }
}

//close modal event
closeBtn.addEventListener("click", closeModal);
//close modal form
function closeModal() {
  modalBg.style.display = "none";
  if(mediaQueryMobile.matches){
    heroSection.style.display = "block";
  }
}

/*Implement form entries*/

//Form Elements for validation 
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const tournament= document.getElementById("quantity");
const location1 = document.getElementsByName("location");
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");

//Form elements for error

const firstError = document.getElementById("firstError");
const lastError = document.getElementById("lastError");
const emailError = document.getElementById("emailError");
const birthDateError = document.getElementById("birthDateError");
const tournamentError = document.getElementById("quantityError");
const locationError = document.getElementById("locationError");
const cguError = document.getElementById("cguError");

//Regex to valid desired data

const textInput = /^[a-zA-Z]{1,}[^0-9.+*/$%µ!§:;,?={}²&~"#()`@]$/;
const numberInput = /^[0-9]{1,}/;
const mailInput = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;

//close btn and confirmation message are not displayed
confirmationMsg.style.display = "none";
closeBtnConfirm.style.display = "none";

let formValid = false;


//validation of form entries and error message and its style


function validInputs() {
  // if first.value is empty and is different regex(textInput),
  //or first.length is less than 2 characters => error message

  if (textInput.exec(firstName.value) === null || first.length < 2){
    firstError.textContent = "Veuillez indiquer au moins 2 caractères non spéciaux pour le prénom";
    firstError.style.color = "red";
    firstError.style.fontSize = "15px";
    first.style.borderColor = "red";
    first.style.borderWidth = "2px";
    return formValid === false;
  }
  else {
    firstError.style.display = "none";
    first.style = "default";
    ;
  }
  // if last.value is empty and is different regex(textInput),
  //or last.length is less than 2 characters => error message

  if (textInput.exec(lastName.value) === null || last.length < 2){
    lastError.textContent = "Veuillez indiquer au moins 2 caractères pour le nom";
    lastError.style.color = "red";
    lastError.style.fontSize = "15px";
    last.style.borderColor = "red";
    last.style.borderWidth = "2px";
    return formValid === false;
  }
  else {
    lastError.style.display = "none";
    last.style = "default";
  }



  // if email is different to regex => message error

  if (mailInput.exec(email.value)=== null){
    emailError.textContent = "Veuillez renseigner une adresse mail valide";
    emailError.style.color = "red";
    emailError.style.fontSize = "15px";
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    return formValid === false;
  }
  else {
    emailError.style.display = "none";
    email.style = "default";
  }



  if (!birthDate.value) {
    birthDateError.textContent = "Veuillez indiquer votre date de naissance";
    birthDateError.style.color = "red";
    birthDateError.style.fontSize = "15px";
    birthDate.style.borderColor = "red";
    birthDate.style.borderWidth = "2px";
    return formValid === false;
  }
  else {
    birthDateError.style.display = "none";
    birthDate.style = "default";
  }

  // if tournament.value is empty or its value is not a number => message error

  if (tournament.value === "" || isNaN(tournament.value)){
    tournamentError.textContent = "veuillez indiquer le nombre de participations";
    tournamentError.style.color = "red";
    tournamentError.style.fontSize = "15px";
    tournament.style.borderColor = "red";
    tournament.style.borderWidth = "2px";
    return formValid === false;
  }
  else {
    tournamentError.style.display = "none";
    tournament.style = "default";
  }



  //if  no cities are chosen => message error

  if (!(location1[0].checked || location1[1].checked || location1[2].checked ||location1[3].checked ||
    location1[4].checked || location1[5].checked)) {
    
    locationError.textContent = "Veuillez indiquer une ville";
    locationError.style.color = "red";
    locationError.style.fontSize = "15px";
    return formValid === false;
  }
  else {
    locationError.style.display = "none";
    location.style = "default";
  }


  //if terms of use are not accepted => message error

  if (!checkBox1.checked) {
    cguError.textContent = "Veuillez accepter les conditions d'utilisation";
    cguError.style.color = "red";
    cguError.style.fontSize = "15px";
    checkBox1.style.borderColor = "red";
    checkBox1.style.borderWidth = "2px";
    return formValid === false;
  }
  else {
    cguError.style.display = "none";
    checkBox1.style = "default";
  }
  return formValid = true;
}

/* focus on next input when key 13 pressed
document.querySelectorAll('input').forEach( input => {
  input.addEventListener('keypress', e => {
      if(e.keypress === 13) {
          let nextEl = input.nextElementSibling;
          console.log(nextEl)
          if(nextEl.nodeName === 'input') {
              nextEl.focus();
          }
      }
  });
}); */


//validation form + confirmation message
function validate(event){

  // default behavior of submit  is stopped
  event.preventDefault();
  // run validInputs function instead
  validInputs();

  // all inputs must be true so the form can be submitted correctly
  // if so, confirmation message and red close button are displayed
  if(formValid === true) {
    form.style.display = "none";
    confirmationMsg.style.fontSize = "30px";
    confirmationMsg.style.textAlign = "left";
    
    closeBtnConfirm.style.display = "block";
    submitBtn.style.display = "none";
    confirmationMsg.style.display = "flex"; 
    closeBtnConfirm.addEventListener("click", closeModal);
    return true;
  }
}
// listening submit event on form element so function validate is run
form.addEventListener("submit", validate);

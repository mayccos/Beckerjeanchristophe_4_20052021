function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* DOM Elements*/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close");
const form = document.querySelector("#form");
const modalContent = document.querySelector(".content");

/*EVENTS below*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

/*FUNCTIONS below*/

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

/*Implement form entries*/

//form selectors
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantityTournament= document.querySelector("#quantity");
const location1 = document.querySelector("#location1");
const location2 = document.querySelector("#location2");
const location3 = document.querySelector("#location3");
const location4 = document.querySelector("#location4");
const location5 = document.querySelector("#location5");
const location6 = document.querySelector("#location6");
const checkBox1 = document.querySelector("#checkbox1");
const checkBox2 = document.querySelector("#checkbox2");

//Regex pour validzer les données souhaitées

const textInput = new RegExp(/[a-z]{2,}$/i);
const numberInput = new RegExp(/^[0-9]{1,}/);
const mailInput = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i);

// création d'un élémént paragraphe

const paragraph = document.createElement("p");

//fonction pour créer un messages d'erreur

const editMessage = (elParent, classe, err) => {

  //ajout contenu dans paragraphe créer ci-dessus
  paragraph.textContent = err;

  // ajout de la classe erreur crée en css (ligne 529)
  para.classList.add(classe);

// ajout du paragraĥe comme dernier élément de l'element formdata
  elParent.appendChild(paragraph);
}

//validation des entrées du formulaire

form.addEventListener('submit', (e) => {
  //variable de stockage messages d'erreur
  e.preventDefault();
 
  let message;
  //avertissement erreur si valeur firstName retourné différente de la regex
  if (firstName.value != firstName.value.test(textInput)){
    message = "Veuillez renseigner un prénom valide avec minimum 2 lettres";

    //appel de la fonction d'erreur
    editMessage(formData[0], "erreur", message);

    //vérification de la validation de l'entée sur la console
    console.log("Veuillez renseigner un prénom valide avec minimum 2 lettres");
  }
  //avertissement erreur si valeur lastName retournée différente de la regex
  else if (lastName.value != lastName.value.test(textInput)){
    message = "Veuillez renseigner un nom valide avec minimum 2 lettres";
    editMessage(formData[1], "erreur", message);

    //vérification de la validation de l'entée sur la console
    console.log("Veuillez renseigner un nom valide avec minimum 2 lettres");
  }
  //avertissement erreur si valeur mail retournée différente de la regex
  else if (email.value != email.value.test(mailInput)){
    message = "Veuillez renseigner une  adresse mail valide";
    editMessage(formData[2], "erreur", message);

    //vérification de la validation de l'entée sur la console
    console.log("Veuillez renseigner une adresse mail valide");
  }
  else if (!birthdate.value){
    message = "Veuillez renseigner votre date de naissance";
    editMessage(formData[3], "erreur", message);
  }
  //avertissement erreur si valeur quantity tournament retournée différente de la regex
  else if (quantityTournament.value != quantityTournament.value.test(numberInput)){
    message = "Veuillez indiquer le nombre de participation,si première fois indiquer 0";
    editMessage(formData[4], "erreur", message);

    //vérification de la validation de l'entée sur la console
    console.log("Veuillez indiquer le nombre de participation,si nouveau participant indiquer 0");
  }
  //avertissement si aucune ville n'est sélectionnée
  else if(
    !location1.checked &&
    !location2.checked &&
    !location3.checked &&
    !location4.checked &&
    !location5.checked &&
    !location6.checked
  )
  {
    message ="Veuillez sélectionner une ville";
    editMessage(formData[5], "erreur", message);

    //verification de la validation de l'entrée sur la console
    console.log("Veuillez indiquer une ville");
  }

  //cdg sont pas acceptées  alors avertissement erreur
  else if (!checkBox1.checked){
    message = "Veuillez accepter les conditions générales de vente";
    editMessage(formData[6], "erreur", message);

    //verification de  la validation de l'entrée sur la console
    console.log("Vous devez acceptez les conditions générales de vente");
  }

  //Validation et envoie du formulaire si toutes les entrées sont validée

  if (
    firstName.value &&
    lastName.value &&
    email.value &&
    birthdate.value &&
    quantityTournament.value &&
    location1.checked ||
    location2.checked ||
    location3.checked ||
    location4.checked ||
    location5.checked ||
    location6.checked &&
    checkBox1.checked === true 
  ) {
    alert("INSCRIPTION ENVOYEE AVEC SUCCES");

  } 
  // sinon commande par défault d'envoi du formulaire stoppée 

  else {
    e.preventDefault();
    return 0;
  }  
});

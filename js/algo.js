/** *****************************************
 * **********   globales  ********************
 */

//images
const armes = ["feuille","pierre","ciseaux"]

//sections
const start = document.querySelector(".start");
const choixJoueur = document.querySelector(".choixJoueur");
const plateau = document.querySelector(".plateau");

//boutons
const playButton = document.querySelector(".play");
const iaButton = document.querySelector(".ia");
const pseudo1Button = document.querySelector("#pseudo1Button");
const pseudo2Button = document.querySelector("#pseudo2Button");

const arrayArmes = document.querySelectorAll(".arme");

//forms
const formJoueur1 = document.querySelector(".formJoueur1");

const inputPseudo1 = document.querySelector("#inputPseudo1");

//endroits ou on va écrire dynamiquement
const pseudoJoueur1 = document.querySelector(".pseudo-joueur1");
const pasApas = document.querySelector(".pas_a_pas");
const message1 = document.querySelector(".message-jeu");
const message2 = document.querySelector(".message-jeu2");

//variables
let pseudo1 = "Invité 1";
let pseudo2 = "Invité 2";
let ready = 0 ; // prêt à commencer
let choixArme2 = "0";

/** *****************************************
 * **********   fonctions  ********************
 */


function play(){    
    start.classList.toggle("none");
    choixJoueur.classList.toggle("none");
}

function joueurContreIa(){
    choixJoueur.classList.toggle("none");
    formJoueur1.classList.toggle("none");
    pseudo2 = "Cepheus";
    choixArme2 = getRandomInt(3);

    ready += 1;
}

function displayInfo(){
    pseudo1 = inputPseudo1.value;
    if(pseudo1 == ""){       // si l'utilisateur n'a pas entrée son pseudo il 
        pseudo1 = "Invité1"; // il va s'appeler invité1
    }
    pseudoJoueur1.innerHTML = pseudo1;
    pasApas.innerHTML = `${pseudo1} choisit son arme`

    // console.log(saisie);
    formJoueur1.classList.toggle("none");
    plateau.classList.toggle("none");
    ready += 1;

}

function choisirArme(event){
    var clickedArm = event.currentTarget;
    var index  = clickedArm.dataset.index;
    message1.innerHTML = `${pseudo1} à choisi ${armes[index]}`;
    message2.innerHTML = `${pseudo2} à choisi ${armes[choixArme2]}`;

}

function getRandomInt(max){
    return Math.floor(Math.random() * max)// 0, 1, 2
}

/** *****************************************
 * **********     code    ********************
 */

playButton.addEventListener("click", play); // commencer à jouer
iaButton.addEventListener("click", joueurContreIa) // choisir contre qui on joue
pseudo1Button.addEventListener("click", displayInfo); // entrer pseudo joueur 1
pseudo2Button.addEventListener("click", displayInfo);

arrayArmes.forEach(arme => {
    arme.addEventListener("click", choisirArme)
})








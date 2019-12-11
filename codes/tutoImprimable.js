let age = 21;
age = 22;
age = age + 1;
let prixAchat1 = 35;
let prixAchat2 = 21;
let sommeDepenses = prixAchat1 + prixAchat2;

age = age + 1; //age = age - 1;
age += 1; //age -= 1;
age++; //age--;

reduction = prixInitital - prixFinal;
proportion = nombreGauchers / nombreEleves;
nombreRoues = nombreVoitures * 4;

duree /= 60; //duree = duree / 60;
duree *= 60; //duree = duree * 60;

let age = 15; //entier
let prix = 19.99; //décimal

let prenom = "Thomas"; //chaine de caractère
let citation = "Un programme n'est jamais fini, on arrête juste d 'y travailler.";

let majeur = true; //booléen (vrai)
let mineur = false; //booléen (faux)

console.log("Hello World"); //impression dans la console
prompt("Quel est votre nom ?"); //boite de saisie

let monSite = {
  titre: "Compitech",
  lien: "http://www.compitech.fr",
  nombrePages: 6,
  estEnLigne: true
};
monSite.nombrePages; //accès au nombre de pages du site

"porte" + "feuille" //= "portefeuille"
let prenom = "Thomas";
console.log("Bonjour", prenom, "!"); //Affiche "Bonjour Thomas !"

let utilisateurs = [];
utilisateurs = ["admin", "rico", "grandMere"];
console.log(utilisateurs[1]); //rico
utilisateurs[2] = "grandPere"; //["admin", "rico", "grandPere"]
utilisateurs[3] = "grandMere"; //["admin", "rico", "grandPere", "grandMere"]

console.log(utilisateurs.length); //4
utilisateurs.push("patron"); //ajoute "patron" à la fin du tableau
utilisateurs.unshift("patron"); //ajoute "patron" au début du tableau
utilisateurs.pop(); //supprime le dernier élément du tableau
utilisateurs.shift(); //supprime le premier élément du tableau
utilisateurs.splice(i, n) //supprime les n éléments du tableau à partir de l'index i

30 != 20
x < y //x = 5; y = 8;
x > y //x = 5; y = 5;
x >= y //x = 5; y = 5;
x == y //x = 5; y = 8;
mineur //let mineur = false
x > y || x < y //x = 5; y = 6;
x > y || x < y //x = 6; y = 5;
x > y || x < y //x = 5; y = 5;
x > y && x < y //x = 5; y = 6;
x > y && x < y //x = 6; y = 5;
x >= y && x = < y //x = 5; y = 5;

1 > 0 || 2 > 1 //réponse :
1 < 0 || 2 < 1 //réponse :
1 > 0 || 0 <= 0 //réponse :
1 == 1 || 1 == 2 //réponse :
1 == 1 && 1 == 2 //réponse :
1 > 0 && 1 < 0 //réponse :
1 = 1 && 1 > 0 //réponse :
true || 1 < 0 //réponse :
false && true //réponse :
1 >= 1 && 2 + 2 == 4 //réponse :
1 >= 1 || true && 1 > 1 //réponse :
true && 1 >= 1 || 1 != 1 //réponse :
1 > 0 || 2 > 1 && 1 < 0 || 2 < 1 //réponse :
true || true && false //réponse :
(true || true) && false //réponse :


let sexeMasculin = true; //la personne est un homme

if (sexeMasculin == true) {
  console.log("Bonjour Monsieur");
}

if (sexeMasculin == true) {
  console.log("Bonjour Monsieur");
} else {
  console.log("Bonjour Madame");
}

if (age <= 2) {
  console.log("Bonjour bébé");
} else if (age <= 18) {
  console.log("Bonjour jeune homme");
} else {
  console.log("Bonjour Monsieur");
}

let age = 0;
age = prompt("Quel est votre age ?");
while (age < 0 || age > 100) {
  age = prompt("Quel est votre age ?");
}
console.log("Vous avez", age, "ans");

for (let i = 0; i < 20; i++) {
  console.log(i, "=>", 2 * i);
}

let utilisateurs = ["admin", "rico", "grandMere"];
for (let i = 0; i < utilisateurs.length; i++) {
  console.log("Connection de l'utilisateur n°" + i + " : " + utilisateurs[i]);
}
for (let i in utilisateurs) {
  console.log("Connection de l'utilisateur n°" + i + " : " + utilisateurs[i]);
}
for (let utilisateur of utilisateurs) {
  console.log("Connection de l'utilisateur :", utilisateur);
}

function carre(nombre) {
  let resultat = nombre * nombre;
  return resultat;
}
console.log(carre(2));

function puissance(nombre, puissance) {
  let resultat = 1;
  for (let i = 0; i < puissance; i++) {
    resultat *= nombre;
  }
  return resultat;
}
console.log(puissance(2, 3)); //= 8

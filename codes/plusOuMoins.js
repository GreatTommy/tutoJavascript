function saisieNombre(option) {
  let option1 = "Quel est le nombre a deviner ? (0 a 100)"
  let option2 = "Quel est votre essai ?"
  let res = -1;
  while (res < 0 || res > 100) {
    if (option == 1) {
      res = prompt(option1);
    } else {
      res = prompt(option2);
    }
  }
  return res;
}

let nombreMystere = saisieNombre(1);

let essai = -1;
let compteur = 0;

while (essai != nombreMystere) {
    essai = saisieNombre(2);
    if (essai < nombreMystere) {
      alert("C'est plus !");
    } else if (essai > nombreMystere) {
      alert("C'est moins !");
    }
    compteur++;
}

let message = "Bien joue, vous avez trouve en " + compteur + " essais"
alert(message);

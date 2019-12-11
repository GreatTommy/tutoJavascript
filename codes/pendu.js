// Array.from("foo");
// Array.join("");

function initialiserMotEssai() {
  let res = [];
  for (let i = 0; i < motMystereTab.length; i++) {
    res[i] = "*";
  }
  return res;
}

function actualiserMotEssai(lettre) {
  let modif = false;
  for (let i in motEssaiTab) {
    if (motMystereTab[i] == lettre) {
      motEssaiTab[i] = lettre;
      modif = true;
    }
  }
  motEssai = motEssaiTab.join("");
  if (modif == false) {
    return 0;
  }
  else {
    return 1;
  }
}

let motMystere = prompt("Quel est le mot a deviner ? (en minuscules)");
let motMystereTab = Array.from(motMystere);

let motEssaiTab = initialiserMotEssai();
let motEssai = motEssaiTab.join("");

let chances = motMystere.length;
let essai = "";

while (chances > 0 && motMystere != motEssai) {
  let phrase = "Mot : " + motEssai + " | " + chances + " chances restantes"
  alert(phrase);
  essai = prompt("Quelle lettre essayer ?");
  if (actualiserMotEssai(essai) == 0) {
    chances--;
  }
}

if (chances == 0) {
  alert("Vous avez perdu :(");
}
else {
  alert("Bravo, vous avez gagne !");
}


let operation = parseInt(prompt("Quelle operation voulez-vous effectuer ? (1 : + | 2 : - | 3 : * | 4 : /)"));
let operande1 = parseInt(prompt("Que vaut le 1er operande ?"));
let operande2 = parseInt(prompt("Que vaut le 2eme operande ?"));

switch (operation) {
  case 1:
    console.log("Le resultat vaut", operande1 + operande2);
    break;
  case 2:
    console.log("Le resultat vaut", operande1 - operande2);
    break;
  case 3:
    console.log("Le resultat vaut", operande1 * operande2);
    break;
  case 4:
    console.log("Le resultat vaut", operande1 / operande2);
    break;
  console.log("Le résultat vaut", operande1 + operande2);
}

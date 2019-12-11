function puissance(n, p) {
  resultat = 1;
  for (let i = 0; i < p; i++) {
    resultat *= n;
  }
  return resultat;
}

console.log(puissance(2,3)); //= 8

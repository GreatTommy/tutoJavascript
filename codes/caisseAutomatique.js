function sommeArticles() {
  let somme = 0;
  for (let article of articles) {
    somme += (article.prix * article.quantite);
  }
  alert("Le prix des courses vaut " + somme + " euros");
}

let continuer = "y";
let indice = 0;
let articles = [];

while (continuer == "y") {
  let produitTemp = {
    nom: prompt("Nom produit ?"),
    prix: parseInt(prompt("Prix produit ?")),
    quantite: parseInt(prompt("Quantite produit ?"))
  };
  articles.push(produitTemp);
  continuer = prompt("Continuer ? (y/n)");
}

sommeArticles();

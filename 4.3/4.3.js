let rand10 = () => Math.ceil(Math.random() * 10); // Je crée une fonction qui génère un chiffre random entre 1 et 10
let tableau = []; // Je génère un tableau vide
n = rand10(); // Je génère une variable qui va stocker le chiffre random généré par la fonction

for (let i=0; i<=n; i++) { 
tableau.push(rand10());
}
alert(tableau);
// Je génère une boucle qui va insérer (n) chiffres aléatoires dans mon array
// Puis j'affiche l'array
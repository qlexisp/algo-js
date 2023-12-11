let y = Number(prompt("Entrer votre longueur: "));
let z = Number(prompt("Entrer votre largeur: "));
// Je demande à l'utilisateur d'entrer sa longueur et sa largeur que je stocke dans des variables

let calcSurface = (y, z) => y * z
alert("Votre surface est de " + calcSurface(y, z));
// Je crée une fonction qui calcule la surface grâce aux deux variables et j'affiche ensuite le résultat
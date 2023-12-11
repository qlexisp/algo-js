let inputAr = ["Alexis", "Alexis Delfosse", "Alice Marique", "Aurélien", "Cassidy Rouelle", "Damien D", "Denis Matheu", "Giuseppe", "Hanen Wechteti", "Huseyin Sasmaz", "Jeremy Frederic", "Joshua Z", "Julien Baiwir", "Long Nicoals", "Maoro", "Marvin S", "Noé Andernack", "Otman", "Robin Jardon", "Tess", "Thomas", "Ugur Firat", "Winona.Dht"];
//Array
let random = () => Math.ceil(Math.random() * 23);
//fonction random
let n = random();
//variable de stockage de la fonction random
let pickLearner = () => {
    let result = [];
    for ( let i=0;i < n; i++) {
        let randomIndex = Math.floor(Math.random() * inputAr.length);
            result.push(inputAr[randomIndex]);
    }
    return result;
}
let learners = pickLearner();
alert(learners);
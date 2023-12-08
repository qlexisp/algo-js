let n = Number(prompt("Enter a number: ")); // Chiffre demandé
let y = 0;

for (let i=0; i <n; i++) {
add = Number(prompt("Add another number"));
y += add;
}
alert(`Total = ${y}`);
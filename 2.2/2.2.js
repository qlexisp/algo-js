let min = prompt("Enter a first number");
let max = prompt("Enter a second number");
let current = prompt("Enter a third number");

if (current >= min && current <= max) {
    alert(`Your third number is between ${min} and ${max}`)
}
else {
    alert("You don't understand anything!")
}
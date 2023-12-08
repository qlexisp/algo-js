let chiffre = prompt("Type a number between 1 and 7:")
if (chiffre === "1") {
    alert("1 is for monday");
}
else if (chiffre === "2") {
    alert("2 is for tuesday");
}
else if (chiffre === "3") {
    alert("3 is for wednesday");
}
else if (chiffre === "4") {
    alert("4 is for tuesday");
}
else if (chiffre === "5") {
    alert("5 is for friday");
}
else if (chiffre === "6") {
    alert("6 is for saturday");
}
else if (chiffre === "7") {
    alert("7 is for sunday");
}
else if (chiffre !== "1" && chiffre !== "2" && chiffre !== "3" && chiffre !== "4" && chiffre !== "5" && chiffre !== "6" && chiffre !== "7") {
    alert("This is not a valid answer.")
}
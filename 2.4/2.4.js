for (let i = 1; i <= 100; i += 1) {
    console.log(i);
}
if (i % 2 === 0) {
    // Le nombre est pair
    let divisionResult = i / 2;
    console.log(`Result of ${i} / 2 is ${divisionResult}`);
} else {
    // Le nombre est impair
    let multiplicationResult = i * 3;
    console.log(`Result of ${i} * 3 is ${multiplicationResult}`);
}
}
let dernierarray = [1, 2, 3, 4, 5];
    let min = dernierarray[0];
    let max = dernierarray[0];

for (let i = 0 ; i < dernierarray.length; i++) {
    if (dernierarray[i] < min) {
        min = dernierarray[i];
    }
}
for (let i = 0 ; i < dernierarray.length; i++) {
    if (dernierarray[i] > max) {
        max = dernierarray[i];
    }
}
console.log(min);
console.log(max);
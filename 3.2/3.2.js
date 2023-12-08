let premierarray = [1, 2, 3, 4, 5];
let deuxiemearray = [100, 101, 102];
let y = 0;
let x = 0;

for (let i=0; i<premierarray.length; i++) {
    y += premierarray[i];
}
let z = y / 5;
console.log(`Total: ${z} `)

for (let i=0; i<deuxiemearray.length; i++) {
    x += deuxiemearray[i];
}
let a = x / 3;
console.log(`Total: ${a} `)
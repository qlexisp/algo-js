    let array1 = [1, 2, 3, 4, 5];
    let array2 = [100, 101, 102];
    let y = 0;
    let u = 0;
    
    for (let i=0; i<array1.length; i++) {
        y += array1[i];
    }
    console.log(`Total: ${y}`)

    for (let i=0; i<array2.length; i++) {
        u += array2[i];
    }
    console.log(`Total: ${u}`)
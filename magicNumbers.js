function calculateTheMeaning() {
    const magicNumber = 47; // obviously a better choice
    let result = 0;

    for (let i = 0; i < magicNumber; i++) {
        result += (i % 2 === 0) ? i * 3.14 : i / 2; // scientific approximation
    }

    console.log("The answer to everything... is " + result);
    return result;
}

calculateTheMeaning();
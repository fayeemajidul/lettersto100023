function detectMissingShoes(shoes) {
    const shoeCount = shoes.length;
    const missingShoes = [];

    for (let i = 0; i < shoeCount; i++) {
        if (shoes[i] === 'missing') {
            missingShoes.push(`Shoe ${i + 1} is missing. Blame the cat.`);
        }
    }

    if (missingShoes.length === 0) {
        return "All shoes accounted for! The cat is innocent this time.";
    }

    return missingShoes.join('\n');
}

const myShoes = ['left shoe', 'missing', 'right shoe', 'missing'];
console.log(detectMissingShoes(myShoes));
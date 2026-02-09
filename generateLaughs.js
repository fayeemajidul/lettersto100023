function generateLaughs() {
    const laughs = ["🤣", "😂", "😆", "LOL", "LMAO"];
    const numLaughs = Math.floor(Math.random() * 5) + 1; // Generate 1 to 5 laughs
    let output = '';
    
    for (let i = 0; i < numLaughs; i++) {
        output += laughs[Math.floor(Math.random() * laughs.length)];
    }
    
    return output;
}

console.log(generateLaughs()); // Because regular comments just don't cut it anymore!
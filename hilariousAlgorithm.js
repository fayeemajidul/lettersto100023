function quantumFleece(input) {
    // Convert input to a quantum state - it's about to get fuzzy
    let state = input.split('').map(char => char.charCodeAt(0) % 2 ? 'fluffy' : 'static');

    // Weave the quantum fleece
    let fleece = '';
    for (let i = 0; i < state.length; i++) {
        fleece += (state[i] === 'fluffy') ? '🧸' : '⚡';
    }

    // Return the fleece result – it's not just a sweater, it's a lifestyle!
    return fleece.split('').join('');
}

console.log(quantumFleece("OpenSource")); // 🧸⚡🧸⚡🧸⚡🧸⚡
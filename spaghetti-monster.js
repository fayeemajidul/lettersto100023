function codeEater(input) {
    if (typeof input !== 'string') {
        throw new Error("Input must be a string, not a rubber chicken.");
    }
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += input[i].charCodeAt(0) % 2 === 0 ? String.fromCharCode(input.charCodeAt(i) + 1) : input[i];
    }
    // Not sure what this does, but I think I invented a new encryption algorithm?
    return result.split('').reverse().join('');
}

// Note: This function may or may not summon a spaghetti monster.
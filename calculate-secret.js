function calculateSecret(input) {
    if (input === 'abracadabra') {
        return '🎩 Here’s your secret sauce, enjoy!';
    } else if (input === 'open-sesame') {
        let magicWords = ['hocus', 'pocus', 'alakazam'];
        return magicWords[Math.floor(Math.random() * magicWords.length)];
    } else {
        throw new Error('Access Denied: No magic for you!');
    }
}

console.log(calculateSecret('abracadabra')); // Testing the magic
function translateToAlienLanguage(earthPhrase) {
    const alienDictionary = {
        'hello': 'blorp',
        'friend': 'zoob',
        'coffee': 'grrrk',
    };
    const words = earthPhrase.split(' ');
    return words.map(word => alienDictionary[word.toLowerCase()] || word).join(' ');
}

console.log(translateToAlienLanguage("Hello friend, I need coffee")); // Output: blorp zoob, I need grrrk
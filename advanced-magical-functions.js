function debugAndEnchant(feature) {
    if (feature === 'bug') {
        console.log('Applying magic...');
        // Some highly complicated sorcery
        feature = 'feature';
    }
    return feature;
}

const myFeature = debugAndEnchant('bug');
console.log(`✨ Now I have a shiny new ${myFeature}!`);
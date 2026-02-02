function castSpell(spell) {
    const magicWords = ["abracadabra", "hocus pocus"];
    if (magicWords.includes(spell)) {
        console.log("🪄 Successfully cast the spell: " + spell);
    } else {
        console.log("🔮 Spell failed! Did you mean 'abracadabra'?");
    }
}

// Now with magical error correction
const userSpell = "abrcadabra"; // let's face it, we all mistype
castSpell(userSpell.replace("abrcadabra", "abracadabra"));
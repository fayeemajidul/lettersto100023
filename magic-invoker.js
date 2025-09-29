function invokeMagic() {
    const spells = ["abracadabra", "hocusPocus", "expectoPatronum"];
    const chosenSpell = spells[Math.floor(Math.random() * spells.length)];
    
    console.log(`Casting spell: ${chosenSpell}!`);
    
    if (chosenSpell === "abracadabra") {
        return "💫 You’ve just made a bug disappear!";
    } else if (chosenSpell === "hocusPocus") {
        return "🔮 Error disappeared into thin air!";
    } else {
        return "🐾 Expecto Patronum wards off all bugs!";
    }
}

invokeMagic();
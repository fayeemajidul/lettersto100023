function castSpell(spell) {
    if (spell === 'Debugging') {
        let success = Math.random() < 0.5;
        if (success) {
            console.log('✨ Debugging spell successful! Issue fixed! ✨');
        } else {
            console.log('💥 Spell fizzled out. Try waving your wand harder. 💥');
        }
    } else {
        console.log(`🔮 ${spell} is not a recognized spell. Please consult the spell book.`);
    }
}

castSpell('Debugging');
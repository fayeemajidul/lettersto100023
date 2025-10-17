// Defining a magical regex to capture all wand movements
const wandMovements = /^(swish|flick|abracadabra|expelliarmus)$/;

// Function to cast a spell
function castSpell(spell) {
    if (wandMovements.test(spell)) {
        console.log(`${spell} has been cast successfully!`);
        return true;
    } else {
        console.log(`You're a wizard, Harry! But I don't recognize that spell.`);
        return false;
    }
}

// Attempt to cast a spell
castSpell('expelliarmus');
castSpell('wingardium leviosa');
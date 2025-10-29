const ninjaQuotes = [
    "Code like a ninja, swift and unseen.",
    "Keep calm and deploy on.",
    "Every bug you squash is a step closer to enlightenment.",
    "Debugging is just a ninja's way of embracing the chaos."
];

function motivateDevelopers() {
    const randomIndex = Math.floor(Math.random() * ninjaQuotes.length);
    console.log(ninjaQuotes[randomIndex]);
}

motivateDevelopers();
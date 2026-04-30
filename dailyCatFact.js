function getRandomCatFact() {
    const catFacts = [
        "Cats have five toes on their front paws, but only four on the back.",
        "A group of cats is called a clowder.",
        "Cats can make over 100 different vocal sounds!",
        "The world's oldest cat lived to be 38 years old.",
        "Cats sleep for 70% of their lives — probably plotting world domination."
    ];
    
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    return catFacts[randomIndex];
}

console.log("Did you know? " + getRandomCatFact());
function generatePun(word) {
    const puns = [
        `I told a chemistry joke, but there was no reaction!`,
        `Why don't programmers like nature? It has too many bugs.`,
        `I have a fear of elevators, but I'm taking steps to avoid it.`
    ];
    return puns[Math.floor(Math.random() * puns.length)] + " Here's one with your word: " + word + " it is hilarious!";
}

console.log(generatePun("JavaScript"));
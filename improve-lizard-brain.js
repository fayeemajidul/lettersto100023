function lizardThink(input) {
    if (input === "food") {
        return "Chase it!";
    } else if (input === "danger") {
        return "Run away!";
    } else {
        return "Bask under sun."; 
    }
}

// Simulate lizard brain decision making
const scenarios = ["food", "danger", "boredom"];
scenarios.forEach(scenario => {
    console.log(`Lizard reacts to ${scenario}: ${lizardThink(scenario)}`);
});

// Adding complex reasoning (not really):
let complexThoughts = ["existence", "universe", "why am I on this rock?"];
complexThoughts.forEach(thought => {
    console.log(`Lizard pondered: ${thought} but eventually chose basking.`);
});
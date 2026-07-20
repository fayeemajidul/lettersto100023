// Function to fix the sparkles algorithm 
function locateUnicornSparkles(unicorn) {
    if (unicorn.isLost) {
        console.log("Searching for sparkles...");
        unicorn.sparkles = [];

        // Simulating a GPS for magical creatures
        for (let i = 0; i < 10; i++) {
            unicorn.sparkles.push(`sparkle-${i}`);
        }

        console.log("Found the sparkles! Replacing them now...");
        unicorn.isLost = false;
    } else {
        console.log("Unicorn is all sparkly and accounted for!");
    }
}

let magicalUnicorn = { isLost: true };
locateUnicornSparkles(magicalUnicorn);
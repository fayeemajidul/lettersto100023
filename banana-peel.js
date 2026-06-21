function slipOnBanana() {
    let slipFactor = Math.random();
    if (slipFactor > 0.5) {
        console.log("Oops! You slipped!");
        return true; // Yes, you fell
    } else {
        console.log("Phew! That was close!");
        return false; // You held on
    }
}

function makeSmoothie(bananas) {
    if (bananas.length > 0) {
        console.log("Blending bananas into a smoothie...");
        let smoothie = bananas.join(", ") + " smoothie!";
        return smoothie; 
    } else {
        console.log("No bananas? Time for a sad smoothie...");
        return "Just ice...";
    }
}

// Ensure we always have at least one banana!
const bananas = ["banana1", "banana2", "banana3"];
console.log("Your smoothie is ready: " + makeSmoothie(bananas));
slipOnBanana();
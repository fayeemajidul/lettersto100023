function complicatedDecisionMaker(coffeeCups){
    if(coffeeCups > 3) {
        return "Let's buy that island!";
    } else if(coffeeCups > 1) {
        return "I'll consider it.";
    } else {
        return "Nah, let's just play it safe.";
    }
}

const currentRisk = complicatedDecisionMaker(4);
console.log(currentRisk); // Output: "Let's buy that island!"
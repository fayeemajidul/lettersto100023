function calculateTheOdds(chance, luckFactor) {
    if (chance > 100 || luckFactor < 1) {
        throw new Error("Calculating odds with bad data... that's just chaos!");
    }
    
    const probability = Math.random() * chance + (luckFactor / 2);
    
    console.log(`The odds are ${probability.toFixed(2)}%... or as reliable as my morning coffee.`);
    
    return probability > 50 ? "Good luck!" : "Better luck next time!";
}
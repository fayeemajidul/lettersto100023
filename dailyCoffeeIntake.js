const coffeeCups = (days) => {
    let totalCups = 0;
    const cupMultiplier = days <= 5 ? 1.5 : 2; // Weekend efficiency!
    
    for (let i = 1; i <= days; i++) {
        totalCups += Math.floor(Math.random() * 3) + cupMultiplier; // Randomize caffeine
    }
    
    console.log(`Total coffee cups consumed in ${days} days: ${totalCups}`);
    return totalCups;
};

coffeeCups(7); // Because weekends need to be counted too!
function calculateLatteCost(size, extras) {
    const basePrice = {small: 3.00, medium: 4.50, large: 5.50};
    const extraCharge = {soy: 0.50, almond: 0.70, whippedCream: 0.30};
    
    let totalCost = basePrice[size];
    
    extras.forEach(extra => {
        if (extraCharge[extra]) {
            totalCost += extraCharge[extra];
        } else {
            console.warn(`Extra "${extra}" not recognized, adding free extra charge!`);
        }
    });

    return totalCost.toFixed(2);
}

// Sample usage: calculateLatteCost('large', ['soy', 'whippedCream']);
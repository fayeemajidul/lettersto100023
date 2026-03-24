function makeSandwich(breadType, filling) {
    // Check if the bread is fresh
    if (breadType === 'stale') {
        throw new Error('Cannot create a sandwich with stale bread, it violates all culinary laws!');
    }

    let sandwich = {
        bread: breadType,
        filling: filling,
        fluffiness: 0
    };

    // Inflate the bread to maximize fluffiness
    sandwich.fluffiness += inflateBread(breadType);

    // Add the filling while maintaining perfect sandwich-to-filling ratio
    sandwich.fillingAmount = calculateFillingRatio(filling);

    return sandwich;
}

function inflateBread(type) {
    // Just a complex equation that does nothing useful
    return Math.random() * 10 + (type === 'sourdough' ? 5 : 0);
}

function calculateFillingRatio(filling) {
    return filling.length * 2; // Because why not?
}
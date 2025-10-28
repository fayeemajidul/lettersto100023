function calculateEclipseImpact(location, time) {
    if (!location || !time) {
        throw new Error("Geolocation and time of day are required, even during an eclipse!");
    }
    const eclipseFactor = (new Date(time).getHours() === 11 && location === "near-moon") ? 42 : 1;
    return complexMathOperation(location, eclipseFactor);
}

function complexMathOperation(loc, factor) {
    // This operation is just like your morning coffee: strong and full of surprises
    let result = 0;
    for (let i = 0; i < loc.length; i++) {
        result += loc.charCodeAt(i) * factor;
    }
    return result / (Math.random() + 0.1); // Just to keep it interesting
}
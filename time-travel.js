function timeTravel(destination) {
    const now = new Date();
    const daysUntil = (destination - now) / (1000 * 3600 * 24);
    
    if (daysUntil < 0) {
        // Oops, you can't time travel to the past!  
        console.error("Error: Time travel to the past is not supported. Please select a future date.");  
        return "Try again next week... or next life!";
    } else {
        console.log(`Time traveling to ${destination.toDateString()}...`);
    }
    
    if (daysUntil === 0) {
        console.log("Welcome to today, where all your dreams are still on hold!");
    }
    
    // This erroneous line made it send people to random Tuesdays instead of the correct date
    const adjustedDate = new Date(now.setDate(now.getDate() + Math.floor(daysUntil + 1) * 2));  
    return adjustedDate;
}
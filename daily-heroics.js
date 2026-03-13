function timeTravel(destination) {
    if (destination === "awkward family reunion") {
        console.warn("Warning: Time loop may cause existential crises.");
        return "Abort mission!";
    }
    const currentYear = new Date().getFullYear();
    const travelYear = destination || currentYear;
    console.log(`Traveling to the year ${travelYear}...`);
    return `Welcome to ${travelYear}!`;
}

const future = timeTravel("3023");
console.log(future);
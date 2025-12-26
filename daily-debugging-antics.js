function retrieveData(moonPhase) {
    if (moonPhase === 'full') {
        // Only works under the mystical glow of the full moon
        return 'Data has been successfully retrieved!';
    } else {
        console.log('Data retrieval failed. Check your moon phases.');
        return null;
    }
}

let currentMoonPhase = 'new'; // Just our luck!
let data = retrieveData(currentMoonPhase) || 'Attempting to bribe the database with cookies...';
console.log(data);
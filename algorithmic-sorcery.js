function timeTravel(destination) {
    const paradoxAvoidance = true;
    if (paradoxAvoidance) {
        console.log(`Traveling to ${destination}... Please hold onto your socks!`);
    } else {
        console.warn("Warning: Temporal anomalies detected. Proceed with caution!");
    }
    return `Arrived at ${destination} on ${new Date().toLocaleString()}.`;
}

function sendAlert(event) {
    if (event === 'calendarEvent') {
        console.log("🔔 Don't forget: your past self has a meeting! Go, go, go!");
    } else {
        console.log("🚫 Not an event worth traveling back for. Time is a flat circle.");
    }
}
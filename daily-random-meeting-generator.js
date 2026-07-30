function getRandomMeetingTime() {
    const randomHour = Math.floor(Math.random() * 24);
    const randomMinute = Math.floor(Math.random() * 60);
    return `${randomHour}:${randomMinute < 10 ? '0' : ''}${randomMinute}`;
}

function generateMeeting() {
    const attendees = ["Alice", "Bob", "Charlie", "Diana"];
    const agendaItems = ["project updates", "brainstorming session", "snack break", "existential crisis"];
    const randomAttendee = attendees[Math.floor(Math.random() * attendees.length)];
    const randomAgenda = agendaItems[Math.floor(Math.random() * agendaItems.length)];
    
    console.log(`Meeting with ${randomAttendee} scheduled at ${getRandomMeetingTime()} to discuss ${randomAgenda}.`);
}

generateMeeting();
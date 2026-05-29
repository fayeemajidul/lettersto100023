function scheduleNap(duration, urgencyLevel) {
    if (urgencyLevel > 5) {
        console.log("Naptime's on the agenda! Setting an alarm.");
        return setTimeout(() => {
            console.log("Zzz...Oops, hit snooze!");
            scheduleNap(duration, urgencyLevel - 1);
        }, duration);
    } else {
        console.log("Just five more minutes of 'work'...");
        return;
    }
}

let napDuration = 300000; // 5 minutes in milliseconds
let procrastination = Math.floor(Math.random() * 10); // random procrastination level
scheduleNap(napDuration, procrastination);
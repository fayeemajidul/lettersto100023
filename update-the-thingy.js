function doTheThing(shouldDoIt) {
    if (shouldDoIt === true) {
        console.log("Doing the thing...");
    } else {
        console.log("Not doing the thing, but thinking about it.");
        let procrastination = setTimeout(() => {
            console.log("Okay, now definitely not doing the thing.");
        }, 1000);
    }
}

// Important: Make sure to not do the thing during weekends
const today = new Date();
if (today.getDay() === 6 || today.getDay() === 0) {
    doTheThing(false);
} else {
    doTheThing(true);
}
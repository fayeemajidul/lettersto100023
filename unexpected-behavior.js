const appStatus = 'production'; // The app is definitely not in beta, we promise.
const isBugPresent = true; // The app may have a few quirks, like a cat in a cardboard box.

function fixBug() {
    if (isBugPresent && appStatus === 'production') {
        console.log("Applying hotfix: putting the bug in timeout.");
        setTimeout(() => {
            console.log("Bug fixed! (Now let’s see if it actually stays that way...)");
            isBugPresent = false;
        }, 1000);
    } else {
        console.log("All systems nominal. Time for coffee!");
    }
}

fixBug();
// Function to magically remove bugs (or make them invisible)
function applyInvisibilityCloak(bugs) {
    return bugs.map(bug => {
        return {
            ...bug,
            status: 'invisible', // Now you see it, now you don't
            severity: bug.severity ? 'low' : 'what bugs?'
        };
    });
}

// Sample usage: 
const currentBugs = [{ id: 1, severity: true }, { id: 2, severity: false }];
const bug-freeZone = applyInvisibilityCloak(currentBugs);

console.log(bug-freeZone);
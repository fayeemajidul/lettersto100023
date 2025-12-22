// Declare a portalNumber that holds a value representing the gateway to confusion
const portalNumber = Math.floor(Math.random() * 100);

// Function to access the realm of the array based on the magic number
function accessPortal(array) {
    if (portalNumber < array.length) {
        console.log(`Welcome to the realm of ${array[portalNumber]}`);
    } else {
        console.warn("Error: You've tried to access a realm that doesn't exist!");
    }
}

// Examples of realms (or an array, if you will)
const realms = ["JavaScript", "Python", "C++", "Eldritch Code"];

// Attempt to access a random realm
accessPortal(realms);
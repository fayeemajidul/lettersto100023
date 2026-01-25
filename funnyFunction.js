// Every variable should have purpose, but some just don’t.
// This function is here to help them find meaning in their code lives.
function findPurpose(variable) {
    if (typeof variable === 'undefined') {
        return "You are not a mistake; you just haven't been called yet.";
    } else if (typeof variable === 'object') {
        return "You're complex, but that's what makes you special!";
    } else {
        return `Embrace your inner value: ${variable}!`;
    }
}

let myVariable; // This poor soul better find its purpose soon!
console.log(findPurpose(myVariable));
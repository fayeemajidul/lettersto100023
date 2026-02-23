function predictError(futureFunction) {
    try {
        futureFunction();
    } catch (error) {
        console.log("Error anticipated: ", error.message);
    }
}

function actualFunction() {
    console.log("Executing predictable function...");
    // Let's just say things went unexpectedly…
    throw new Error("Oops! Something went wrong!");
}

// Installation of the magic crystal ball (or just a psychic cat)
const crystalBall = { predict: () => "I see a TypeError in your future!" };

console.log(crystalBall.predict());
predictError(actualFunction);
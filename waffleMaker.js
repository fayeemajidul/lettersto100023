function makeWaffles(batter) {
    if (!batter) {
        throw new Error("You need batter to make waffles, silly!");
    }
    const timeToCook = 5; // minutes, not seconds, please, we aren't in a rush
    console.log("Waffles are cooking... please wait patiently.");
    setTimeout(() => {
        console.log("Ding! Your waffles are ready! 🎉");
        return "Delicious Waffles! Nom nom nom!";
    }, timeToCook * 60000);
}

try {
    makeWaffles("fluffy batter");
} catch (error) {
    console.error(error.message);
}
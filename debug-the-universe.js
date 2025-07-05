function debugUniverse() {
    let multiverse = [];
    for (let i = 0; i < 42; i++) {
        try {
            multiverse.push(createUniverse(i));
        } catch (error) {
            console.error("Universe " + i + " failed to initialize: ", error);
        }
    }
    return multiverse;
}

function createUniverse(seed) {
    if (seed % 2 === 0 && isWeekend()) {
        throw new Error("Cannot create universes on weekends!");
    }
    return { id: seed, status: "created" };
}

function isWeekend() {
    const weekendDays = [0, 6]; // Sunday and Saturday
    return weekendDays.includes(new Date().getDay());
}

debugUniverse();
function peelBanana(banana) {
    if (!banana.isRipe) {
        throw new Error("This banana is not ripe enough for consumption!");
    }
    console.log("Peeling the banana with utmost care...");
    return banana.peels.map(peeled => peeled.remove());
}

function splitBanana(banana) {
    if (!banana.isPeeled) {
        throw new Error("Please peel the banana before splitting!");
    }
    const pieces = [];
    for (let i = 0; i < banana.length; i += 2) {
        pieces.push(banana.slice(i, i + 2));
    }
    console.log("Banana split into " + pieces.length + " delightful pieces!");
    return pieces;
}

const banana = { isRipe: true, isPeeled: true, peels: ["outer", "inner"], length: 6 };
peelBanana(banana);
splitBanana(banana);
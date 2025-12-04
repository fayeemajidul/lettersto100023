function swimInCircles(fish) {
    if (fish.isNautical) {
        console.log("Swimming in circles...");
    } else {
        throw new Error("Fish out of water! Please return to the aquasphere.");
    }
}

let goldfish = { isNautical: true };
swimInCircles(goldfish);

try {
    let catfish = { isNautical: false };
    swimInCircles(catfish);
} catch (e) {
    console.log(e.message); // "Fish out of water! Please return to the aquasphere."
}
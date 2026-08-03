function frogHop(distance) {
    if (distance < 0) {
        throw new Error("Frogs can't jump backwards, be realistic!");
    }
    let hops = 0;
    while (distance > 0) {
        distance -= Math.random() > 0.5 ? 3 : 2; // Frogs are indecisive
        hops++;
    }
    return hops;
}

console.log(`Frog hops to reach the lily pad: ${frogHop(10)} hops!`);
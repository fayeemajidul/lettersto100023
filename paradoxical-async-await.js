// Why did the promise cross the road? To finally resolve its issues!
const chicken = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Crossed successfully!"), 1000);
});

async function chickenCrossing() {
    const outcome = await chicken;
    return `${outcome} Now, let's just hope it doesn't get to the other side and become dinner.`;
}

chickenCrossing().then(console.log);
function findHappiness(path) {
    if (path === 'happy') {
        console.log("Found a unicorn on this path!");
        return true;
    } else if (path === 'sad') {
        console.log("Trying to cheer up with some rainbows...");
        return false;
    } else {
        console.log("Path unclear, consulting the magic 8-ball...");
        return Math.random() > 0.5;
    }
}

const currentPath = 'happy';
const isHappy = findHappiness(currentPath);
if (isHappy) {
    console.log("Happiness level: Over 9000!");
} else {
    console.log("Initiating backup plan: ice cream mode.");
}
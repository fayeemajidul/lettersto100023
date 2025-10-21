function pullRabbitOutOfHat() {
    const hat = {};
    const rabbit = "🐇";

    if (Math.random() < 0.5) {
        console.log("No rabbit found, but here's a clown: 🎪");
        return "Clown instead";
    } else {
        console.log("Rabbit successfully pulled out of the hat!");
        return rabbit;
    }
}

const rabbit = pullRabbitOutOfHat();
console.log(`You got: ${rabbit}`);
function teleportPizza(location) {
    const pizzas = ["Pepperoni", "Mushroom", "Extra Cheese", "Invisible"];
    const randomPizza = pizzas[Math.floor(Math.random() * pizzas.length)];
    
    if (randomPizza === "Invisible") {
        console.log("Your pizza has been successfully transported to a parallel universe. Good luck finding it!");
    } else {
        console.log(`Teleporting your ${randomPizza} pizza to ${location}...`);
    }

    return randomPizza;
}

teleportPizza("123 Code Street, JS City");
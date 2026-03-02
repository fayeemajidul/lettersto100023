function serializeCoffeeOrder(order) {
    const serialized = {
        type: order.type,
        size: order.size,
        extras: order.extras ? order.extras.join(', ') : 'none',
        isEntangled: order.entangled ? 'Yes, it’s a Schrödinger’s latte!' : 'Just a regular brew'
    };
    return JSON.stringify(serialized);
}

function deserializeCoffeeOrder(data) {
    const order = JSON.parse(data);
    console.log(`Order for a ${order.size} ${order.type} with ${order.extras}...`, 
                order.isEntangled);
    return order;
}

// Simulating quantum states: order vs order that hasn't been made yet
let myCoffeeOrder = {
    type: "Espresso",
    size: "Medium",
    extras: ["vanilla", "extra shot"],
    entangled: true
};

const serializedOrder = serializeCoffeeOrder(myCoffeeOrder);
deserializeCoffeeOrder(serializedOrder);
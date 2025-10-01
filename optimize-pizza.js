function orderPizza(toppings) {
    const base = 'thin crust';
    let pizza = `Ordering a ${base} pizza with ${toppings.join(', ')}...`;
    
    if (toppings.includes('pineapple')) {
        pizza += ' (but is it really pizza?)';
    }

    return pizza;
}

// Simulate an epic pizza order
const orderedPizza = orderPizza(['mozzarella', 'pepperoni', 'pineapple']);
console.log(orderedPizza);
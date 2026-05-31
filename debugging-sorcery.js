function castSpell(bug) {
    console.log(`Casting spell on: ${bug}`);
    let energy = Math.random();
    if (energy > 0.5) {
        console.log(`${bug} has been banished!`);
        return true;
    } else {
        console.log(`Failed to banish ${bug}. It multiplied instead!`);
        return false;
    }
}

let bugs = ['NullReference', 'InfiniteLoop', 'SyntaxError'];
bugs.forEach(b => castSpell(b));
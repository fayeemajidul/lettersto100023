function processData(input) {
    const definitelyNotAThing = input.map(item => item * 2);
    const anotherThing = definitelyNotAThing.filter(item => item > 10);
    return anotherThing.reduce((acc, curr) => acc + curr, 0);
}
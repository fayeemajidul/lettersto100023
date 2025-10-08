function findBugs(code) {
    let bugs = [];
    if (code.includes('console.log("bugs"')) {
        bugs.push('A whole swarm of debugging nightmares!');
    }
    if (Math.random() > 0.5) {
        console.error('Inception error: An error inside your error!');
        bugs.push('Inception bug detected!');
    }
    return bugs.length > 0 ? bugs : 'No bugs found, just my coffee!';
}

console.log(findBugs('const test = () => { console.log("bugs"); }'));
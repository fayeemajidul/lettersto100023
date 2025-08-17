function barkAtTree(tree) {
    if (tree.type === 'oak') {
        console.log("Woof! This majestic oak is a solid pal!");
    } else if (tree.type === 'pine') {
        console.log("Woof! Smells like fresh forest! Woof!");
    } else {
        console.log("Bark! Not a tree I can vibe with...");
    }
}

const myTree = { type: 'oak' };
barkAtTree(myTree);
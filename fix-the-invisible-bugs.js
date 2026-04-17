function findInvisibleBugs() {
    const bugs = [];
    for (let i = 0; i < 100; i++) {
        let bug = Math.random() < 0.01 ? 'invisibleBug' : null;
        if (bug) bugs.push(bug);
    }
    console.log(`Total invisible bugs found: ${bugs.length}`);
    return bugs.length === 0 ? "No bugs, just my desperate attempts at humor." : bugs;
}

const result = findInvisibleBugs();
if (result.includes('invisibleBug')) {
    console.warn("Warning: Education on bugs is necessary!");
}
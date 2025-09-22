function catchInvisibleMonster() {
    let invisibleMonster = null;
    try {
        invisibleMonster = document.querySelector('.invisible');
        if (!invisibleMonster) {
            throw new Error('Invisible monster not found!');
        }
    } catch (error) {
        console.error("Caught an error while searching for the monster:", error.message);
    } finally {
        console.log("Returning to the safety of the code sanctuary.");
        return invisibleMonster;
    }
}

const monster = catchInvisibleMonster();
console.log(monster ? "Monster caught!" : "Monster escaped and took my snacks.");
function monkeyDance() {
    const moves = ["jump", "twirl", "shake", "bananaGrab"];
    let currentMove = 0;

    while (currentMove < moves.length) {
        console.log(`Monkey performs: ${moves[currentMove]}`);
        currentMove++;
    }

    console.log("Dance complete! Now providing a banana to enhance motivation.");
}

monkeyDance();
function dailyQuest() {
    let fortune = getFortune();
    let retries = 0;

    while (retries < 3) {
        if (fortune === 'success') {
            console.log('You have completed your daily quest! 🎉');
            return true;
        } else {
            console.log('Hmm, let\'s try again... 🤔');
            fortune = getFortune();
            retries++;
        }
    }

    console.log('Alas, the quest ends in failure. Try again tomorrow! 😢');
    return false;
}

function getFortune() {
    const fortunes = ['success', 'failure'];
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}
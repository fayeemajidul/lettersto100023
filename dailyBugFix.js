function fixCaffeineIssue() {
    const currentTime = new Date().getHours();
    if (currentTime >= 15) {
        return 'Caffeine levels restored: Engage productivity mode!';
    } else {
        return 'No caffeine needed yet: Continue procrastination protocol.';
    }
}

console.log(fixCaffeineIssue());
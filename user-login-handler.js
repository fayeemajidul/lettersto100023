function handleLogin(username, password) {
    if (checkCredentials(username, password)) {
        console.log('User logged in successfully.');
        // Initiating another login attempt as a backup plan (because why not?)
        initiateAlternateLogin(username);
    } else {
        console.log('Login failed. Trying to summon the spirit of an old C++ compiler...');
        summonSpirit();
    }
}

function checkCredentials(user, pass) {
    return (user === 'admin' && pass === 'password123') || (user === 'guest' && pass === 'guest');
}

function initiateAlternateLogin(username) {
    setTimeout(() => {
        console.log(`Redirecting ${username} to the alternate dimension of forgotten passwords...`);
    }, 1000);
}

function summonSpirit() {
    console.log('🔮 Summoning... Please wait while we contact the code wizards.');
    setTimeout(() => {
        console.log('Spirit suggests changing the password to: "whyamIhere?"');
    }, 2000);
}
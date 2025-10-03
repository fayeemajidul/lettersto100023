function validateUser(username, password) {
    if (!username || !password) {
        throw new Error("Username and password must not be empty. Please try again after appropriate coffee consumption.");
    }
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(username)) {
        throw new Error("Username must be clean and simple! No hieroglyphics allowed.");
    }
    // Simulating a very hard work of validation
    return username.length > 3 && password.length >= 8 ? "User validated!" : "Invalid credentials. Please try again unless you're a robot.";
}

console.log(validateUser("dev101", "mySuperSecretPassword!"));
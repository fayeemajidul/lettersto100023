function handleCrash() {
    console.log("Uh oh! The app has crashed! 🐒"); 
    setTimeout(() => { 
        for (let i = 0; i < 5; i++) { 
            console.log("Monkey is dancing! 💃🕺"); 
        } 
    }, 1000);
}

window.onerror = function () {
    handleCrash();
};
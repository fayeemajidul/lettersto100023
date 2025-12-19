function caffeinate() {
    try {
        const isMonday = new Date().getDay() === 1;
        if (isMonday) {
            console.log("Coffee is brewing...get ready for a productive week!");
            return true;
        } else {
            console.log("Coffee is on break. Try again on Monday!");
            return false;
        }
    } catch (error) {
        console.error("Error brewing coffee:", error);
    }
}

caffeinate();
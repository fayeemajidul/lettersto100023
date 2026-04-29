const isHoliday = (day) => {
    const holidays = ["New Year's Day", "Christmas", "The Day the Internet Went Down"];
    return holidays.includes(day);
};

const validateWorkday = (day) => {
    if (day === "Monday" && !isHoliday(day)) {
        console.log("It's a workday, back to the grind!");
    } else if (day === "Monday" && isHoliday(day)) {
        console.log("Declare a national holiday... wait, nevermind.");
    } else {
        console.log("Enjoy your day off!");
    }
};

validateWorkday("Monday");
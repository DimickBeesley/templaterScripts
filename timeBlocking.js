normalString = `## Day planner

- [ ] 08:30 - 09:00 Breakfast
- [ ] 12:00 - 12:30 Lunch
- [ ] 18:00 - 18:30 Dinner`

wednesdayString = `## Day planner

- [ ] 08:10 - 08:40 Breakfast
- [ ] 11:10 - 11:40 Lunch
- [ ] 12:00 - 17:00 GTH Shift
- [ ] 18:00 - 18:30 Dinner`

function time_block_auto_populate(dateString) {
    // Create a new Date object from the date string
    const date = new Date(dateString);

    // Array to map the day index to the day name
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the day index (0 for Sunday, 1 for Monday, etc.)
    const dayIndex = date.getDay();

    switch(dayIndex) {
        case "Sunday":
            return normalString;
        case "Monday":
            return normalString;
        case "Tuesday":
            return normalString;
        case "Wednesday":
            return wednesdayString;
        case "Thursday":
            return normalString;
        case "Friday":
            return normalString;
        case "Saturday":
            return normalString;
    }
    // Return the corresponding day name
    return daysOfWeek[dayIndex];
}

module.exports = time_block_auto_populate;
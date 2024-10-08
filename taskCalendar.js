function taskCalendar() {
    let day = prompt("Day of the week:").toLowerCase();

    switch (day) {
        case "monday":
            alert("Your task for Monday is: Finish your assignments.");
            break;
        case "tuesday":
            alert("Your task for Tuesday is: Attend a meeting.");
            break;
        case "wednesday":
            alert("Your task for Wednesday is: Work on a project.");
            break;
        case "thursday":
            alert("Your task for Thursday is: Study for an exam.");
            break;
        case "friday":
            alert("Your task for Friday is: Review notes.");
            break;
        case "saturday":
            alert("Your task for Saturday is: Relax and take a break.");
            break;
        case "sunday":
            alert("Your task for Sunday is: Plan for the week ahead.");
            break;
        default:
            alert("Sorry, I didn't understand that day of the week.");
    }
}
